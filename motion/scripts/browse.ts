import type { Page } from "playwright";
import type { Capture } from "../src/manifest.ts";

const CONSENT = /tout refuser|refuser|accept|j'accepte|compris|got it/i;

export namespace Browse {
  export const folder = new URL("../public/captures/", import.meta.url).pathname;

  export async function open(page: Page, url: string) {
    await page.goto(url, { waitUntil: "load", timeout: 60_000 });
    await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});
    await dismiss(page);
  }

  // Cookie banners hide the hero; refuse or accept whichever button shows up first.
  export async function dismiss(page: Page) {
    const button = page.getByRole("button", { name: CONSENT }).first();
    if (await button.isVisible({ timeout: 1_500 }).catch(() => false)) {
      await button.click().catch(() => {});
      await page.waitForTimeout(800);
    }
  }

  // Scroll step by step so every whileInView animation plays before the full-page shot.
  export async function reveal(page: Page) {
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const step = page.viewportSize()?.height ?? 800;
    for (let top = 0; top < total; top += step / 2) {
      await page.evaluate((y) => window.scrollTo(0, y), top);
      await page.waitForTimeout(250);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
  }

  export async function page(page: Page, name: string, limit: number): Promise<Capture> {
    const viewport = page.viewportSize()!;
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const height = Math.min(total, limit);
    const scale = await page.evaluate(() => window.devicePixelRatio);
    const file = `${name}.jpg`;
    await page.screenshot({
      path: folder + file,
      type: "jpeg",
      quality: 85,
      fullPage: true,
      clip: { x: 0, y: 0, width: viewport.width, height },
    });
    return { file: `captures/${file}`, width: viewport.width * scale, height: height * scale };
  }

  export async function view(page: Page, name: string): Promise<Capture> {
    const viewport = page.viewportSize()!;
    const scale = await page.evaluate(() => window.devicePixelRatio);
    const file = `${name}.jpg`;
    await page.screenshot({ path: folder + file, type: "jpeg", quality: 85 });
    return { file: `captures/${file}`, width: viewport.width * scale, height: viewport.height * scale };
  }
}
