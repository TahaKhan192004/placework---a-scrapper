import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "./Container";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import { ArrowDoodle, CircleDoodle } from "./Doodles";

const TRUST_ITEMS = [
  "Free to try",
  "No credit card required",
  "Works on any Google Maps search",
];

export function Hero() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-[var(--bg)] pt-16 pb-24 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--terracotta)] uppercase">
            Explore. Extract. Grow.
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[0.98] tracking-tight text-[var(--fg)] uppercase sm:text-5xl lg:text-6xl">
            Turn map searches into <span className="stroke">qualified leads.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--fg)] sm:text-lg">
            Placework is a Chrome extension that turns Google Maps search
            results into a clean, structured business list. Extract names,
            phone numbers, emails, websites, categories, and ratings, then
            export it all to CSV.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href={CTA_HREF}
              className="inline-flex items-center gap-2 border-2 border-[var(--terracotta)] bg-[var(--terracotta)] px-6 py-3.5 font-serif text-xs tracking-wide text-[var(--bg)] uppercase transition-colors hover:bg-[var(--bg)] hover:text-[var(--terracotta)]"
            >
              {CTA_LABEL}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--fg)] underline decoration-[var(--fg)]/30 underline-offset-4 hover:decoration-[var(--fg)]"
            >
              See how it works
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.06em] text-[var(--muted-fg)] uppercase"
              >
                <Check className="h-3.5 w-3.5 text-[var(--terracotta)]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="hidden lg:block">
            <div className="absolute top-8 -left-6 -rotate-6 text-[var(--muted-fg)] xl:-left-16">
              <CircleDoodle className="h-16 w-36 text-[var(--ring)]" />
              <p className="mt-1 max-w-[9rem] -rotate-2 text-sm">
                Local data. Real opportunities.
              </p>
            </div>
            <div className="absolute right-0 -bottom-14 rotate-3 text-[var(--muted-fg)] xl:-right-10">
              <p className="max-w-[9rem] rotate-1 text-right text-sm">
                Clean data. Real growth.
              </p>
              <CircleDoodle className="mt-1 ml-auto h-14 w-32 -scale-x-100 text-[var(--ring)]" />
            </div>
            <div className="absolute top-1/2 -right-4 flex -translate-y-1/2 items-center gap-1 text-[var(--muted-fg)] xl:-right-14">
              <ArrowDoodle className="h-10 w-14 rotate-90" />
              <p className="text-sm">...to this.</p>
            </div>
          </div>

          <div className="overflow-hidden border-2 border-[var(--fg)] bg-[var(--card)] p-3 sm:p-6">
            <Image
              src="/images/hero-maps-to-csv.png"
              alt="A Google Maps search for coffee shops in Austin on the left, turning into a structured spreadsheet of business names, phones, emails, and websites on the right"
              width={780}
              height={340}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
