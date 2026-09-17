import { Plus } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "Is Placework free to use?",
    answer:
      "Yes. It's free to try, with no credit card required to install or run it.",
  },
  {
    question: "Do I need a Google account?",
    answer:
      "No. Placework reads the Google Maps page you already have open. There's no separate login or API key.",
  },
  {
    question: "Can I get email addresses?",
    answer:
      "When a business publishes one. Placework reads published pages only, so some businesses won't have a listed email.",
  },
  {
    question: "What data fields are included?",
    answer:
      "Business name, phone, email, website, category, rating, and address, plus decision-maker names or revenue when a business has published them.",
  },
  {
    question: "Does it work worldwide?",
    answer:
      "It works on any Google Maps search, in any city or country. Result coverage still depends on what each business has published.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Jobs and results stay in Chrome's local storage, and the CSV downloads straight to your computer. Nothing is uploaded to a server.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-[var(--bg)] py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-[var(--fg)] pb-8">
          <h2 className="font-serif text-3xl leading-tight text-[var(--fg)] uppercase sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-4 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--border)] py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--fg)] marker:content-none">
                  {faq.question}
                  <Plus
                    className="h-4 w-4 shrink-0 text-[var(--terracotta)] transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={2}
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-fg)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
