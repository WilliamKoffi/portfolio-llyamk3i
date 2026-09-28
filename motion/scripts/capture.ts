import { mkdir, writeFile } from "node:fs/promises";
import { chromium, type Browser } from "playwright";
import { NAV_LINKS } from "../../src/navigation.ts";
import { PROCESS_STEPS } from "../../src/components/process/content.ts";
import { PROJECTS } from "../../src/components/projects/content.ts";
import { DEV_INFO } from "../../src/profile.ts";
import type { Manifest, Section, Showcase } from "../src/manifest.ts";
import { Browse } from "./browse.ts";

// The portfolio must be served first: `bun run build && bun run preview` at the repo root.
const origin = process.env.PORTFOLIO_URL ?? "http://localhost:3000";
const site = process.env.PORTFOLIO_SITE ?? process.env.NEXT_PUBLIC_SITE_URL ?? origin;

const LABELS: Record<string, string> = {
  ...Object.fromEntries(NAV_LINKS.map((link) => [link.id, link.label])),
  competences: "Compétences",
  contact: "Contact",
};

async function portfolio(browser: Browser) {
  const desktop = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await Browse.open(desktop, origin);
  await Browse.reveal(desktop);
  const page = await Browse.page(desktop, "portfolio-desktop", 16_000);

  const sections: Section[] = [];
  for (const id of Object.keys(LABELS)) {
    if (!(await desktop.locator(`#${id}`).count())) continue;
    await desktop.evaluate((target) => document.getElementById(target)?.scrollIntoView(), id);
    await desktop.waitForTimeout(900);
    sections.push({ id, label: LABELS[id], shot: await Browse.view(desktop, `section-${id}`) });
  }
  await desktop.close();

  const phone = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await Browse.open(phone, origin);
  await Browse.reveal(phone);
  const mobile = await Browse.page(phone, "portfolio-mobile", 844 * 6);
  await phone.close();

  return { desktop: page, mobile, sections };
}

async function projects(browser: Browser) {
  const shown: Showcase[] = [];
  for (const project of PROJECTS) {
    if (!project.demo || project.demo === "#") continue;
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    try {
      await Browse.open(page, project.demo);
      await Browse.reveal(page);
      shown.push({
        id: project.id,
        title: project.title,
        category: project.category,
        technologies: project.technologies,
        demo: new URL(project.demo).host,
        page: await Browse.page(page, project.id, 900 * 5),
      });
      console.log(`✓ ${project.title}`);
    } catch (error) {
      console.warn(`✗ ${project.title}: ${(error as Error).message.split("\n")[0]}`);
    } finally {
      await page.close();
    }
  }
  return shown;
}

const probe = await fetch(origin).catch(() => null);
if (!probe?.ok) {
  console.error(`Portfolio not reachable at ${origin}. Run \`bun run build && bun run preview\` at the repo root.`);
  process.exit(1);
}

await mkdir(Browse.folder, { recursive: true });
const browser = await chromium.launch();
const captured = await portfolio(browser);
console.log(`✓ Portfolio (${captured.sections.length} sections)`);

const manifest: Manifest = {
  profile: { name: DEV_INFO.name, title: DEV_INFO.title, email: DEV_INFO.email, site: new URL(site).host },
  ...captured,
  projects: await projects(browser),
  steps: PROCESS_STEPS.map((step) => ({ number: step.number, title: step.title })),
};
await browser.close();

await writeFile(Browse.folder + "manifest.json", JSON.stringify(manifest, null, 2));
console.log(`Manifest written with ${manifest.projects.length} projects.`);
