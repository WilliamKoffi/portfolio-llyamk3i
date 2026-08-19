import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ContactFloatingButton from "@/components/ContactFloatingButton";
import { DEV_INFO } from "@/profile";
import { SITE_URL } from "@/site";

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: DEV_INFO.name,
        jobTitle: DEV_INFO.title,
        description: DEV_INFO.bioShort,
        image: new URL(DEV_INFO.avatar, SITE_URL).toString(),
        email: `mailto:${DEV_INFO.email}`,
        telephone: DEV_INFO.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abidjan",
          addressCountry: "CI",
        },
        url: SITE_URL,
        sameAs: [DEV_INFO.github, DEV_INFO.linkedin, DEV_INFO.facebook, DEV_INFO.tiktok],
        knowsAbout: [
          "Développement Web",
          "Développement Mobile",
          "Laravel",
          "React",
          "Vue.js",
          "Cybersécurité",
          "Automatisation",
        ],
      },
      {
        "@type": "WebSite",
        name: "Konan William Koffi - Portfolio",
        url: SITE_URL,
      },
    ],
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      {/* Navigation Header */}
      <Header />

      {/* Main Sections Wrapper */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Biography Section */}
        <About />

        {/* Technologies & Skills Dashboard */}
        <Skills />

        {/* Selected Portfolio Projects Showcase */}
        <Projects />

        {/* Professional Services */}
        <Services />

        {/* Experience & Creative Methodology Process */}
        <Process />

        {/* Client Recommendations / Testimonials */}
        <Testimonials />

        {/* Highly Interactive Contact Section with Confetti & WhatsApp/Email CTA */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Mobile Floating Contact Anchor Button */}
      <ContactFloatingButton />
    </>
  );
}
