import { Download } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Download the ZIP",
    detail: "Extract it into a folder you'll keep around.",
  },
  {
    title: "Open chrome://extensions",
    detail: "Switch on Developer mode in the top right.",
  },
  {
    title: "Choose Load unpacked",
    detail: "Select the folder that contains manifest.json.",
  },
  {
    title: "Pin Placework and start",
    detail: "Enter a Maps search and a limit from 1 to 200.",
  },
];

export function FinalCta() {
  return (
    <section id="install" className="scroll-mt-20 bg-[var(--primary)] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--orb-peach)] uppercase">
            More businesses. Brighter opportunities.
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--bg)] uppercase sm:text-4xl">
            Ready to find your next <span className="stroke-peach">customers?</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
            One extension, your browser, and a more useful list than a page
            of open tabs.
          </p>
          <a
            href="/placework-browser-extension.zip"
            download
            className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--bg)] bg-[var(--bg)] px-6 py-3.5 font-serif text-xs tracking-wide text-[var(--terracotta)] uppercase transition-colors hover:bg-[var(--terracotta)] hover:text-[var(--bg)]"
          >
            <Download className="h-4 w-4" strokeWidth={2} />
            Download the ZIP
          </a>
          <p className="mt-4 text-xs text-[var(--orb-peach)]">
            For desktop Chrome 120 or later. Not yet published on the
            Chrome Web Store.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="divide-y divide-[var(--border)] bg-[var(--bg)] p-6 sm:p-8">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[var(--fg)] font-serif text-xs text-[var(--fg)]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--fg)]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted-fg)]">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
