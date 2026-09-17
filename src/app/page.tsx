import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Capabilities } from "@/components/Capabilities";
import { Comparison } from "@/components/Comparison";
import { UseCases } from "@/components/UseCases";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border-2 focus:border-[var(--terracotta)] focus:bg-[var(--terracotta)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsStrip />
        <Capabilities />
        <Comparison />
        <UseCases />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
