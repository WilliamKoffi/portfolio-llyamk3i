/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark selection:bg-brand-accent selection:text-white overflow-x-hidden">
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
    </div>
  );
}

