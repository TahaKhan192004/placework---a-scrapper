import Image from "next/image";
import { Download, FileSpreadsheet, Settings2 } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ArrowDoodle } from "./Doodles";

const STEPS = [
  {
    number: "1",
    title: "Search on Google Maps",
    description: 'Find any business type or location, like "dentists in Austin."',
  },
  {
    number: "2",
    title: "Run Placework",
    description: "Click the extension to collect results from the current search.",
  },
  {
    number: "3",
    title: "Export to CSV",
    description: "Download your list and open it in Excel, Sheets, or your CRM.",
  },
];

export function Comparison() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-[var(--bg)] py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-[var(--fg)] pb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--terracotta)] uppercase">
              From search to spreadsheet
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--fg)] uppercase sm:text-4xl">
              3 simple steps
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          <Reveal>
            <StepHeading number={STEPS[0].number} title={STEPS[0].title} description={STEPS[0].description} />
            <div className="mt-6">
              <Image
                src="/images/search-suggestions.png"
                alt="A Google Maps search box showing recent searches like dentists in Miami and gyms near me"
                width={285}
                height={210}
                className="h-auto w-full max-w-[15rem] border-2 border-[var(--fg)]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <StepHeading number={STEPS[1].number} title={STEPS[1].title} description={STEPS[1].description} />
            <div className="mt-6 max-w-[15rem] border-2 border-[var(--fg)] bg-[var(--card)] p-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm text-[var(--fg)] uppercase">Placework</span>
                <Settings2 className="h-4 w-4 text-[var(--muted-fg)]" strokeWidth={1.75} />
              </div>
              <button
                type="button"
                tabIndex={-1}
                className="mt-3 w-full border-2 border-[var(--terracotta)] bg-[var(--terracotta)] py-2.5 font-serif text-[11px] tracking-wide text-[var(--bg)] uppercase"
              >
                Extract results
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <StepHeading number={STEPS[2].number} title={STEPS[2].title} description={STEPS[2].description} />
            <div className="relative mt-6 max-w-[15rem]">
              <div className="flex items-center gap-3 border-2 border-[var(--fg)] bg-[var(--card)] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[var(--fg)] bg-[var(--accent)] text-[var(--terracotta)]">
                  <FileSpreadsheet className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[var(--fg)]">
                    businesses.csv
                  </p>
                  <p className="text-[11px] text-[var(--muted-fg)]">148 rows</p>
                </div>
                <Download className="ml-auto h-4 w-4 shrink-0 text-[var(--muted-fg)]" strokeWidth={1.75} />
              </div>
              <div className="absolute top-full left-1/2 mt-3 hidden -translate-x-1/2 items-start gap-2 text-[var(--muted-fg)] sm:flex">
                <ArrowDoodle className="h-8 w-14 -rotate-90" />
                <p className="max-w-[8rem] text-xs">
                  Open in Sheets, Excel, or your CRM.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function StepHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <span className="flex h-9 w-9 items-center justify-center border-2 border-[var(--fg)] font-serif text-sm text-[var(--fg)]">
        {number}
      </span>
      <h3 className="mt-4 font-serif text-base text-[var(--fg)] uppercase">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-fg)]">
        {description}
      </p>
    </div>
  );
}
