import { FileSpreadsheet, FileText, MapPin, Zap, type LucideIcon } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Feature = {
  icon: LucideIcon;
  dot: string;
  label: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: FileText,
    dot: "var(--terracotta)",
    label: "Data",
    title: "Complete Business Data",
    description: "Name, phone, email, website, category, rating, and address, all in one row.",
  },
  {
    icon: MapPin,
    dot: "var(--ring)",
    label: "Search",
    title: "Works Inside Google Maps",
    description: "No separate tool or login. Search Google Maps like normal, then run the extension.",
  },
  {
    icon: Zap,
    dot: "var(--orb-coral)",
    label: "Reliability",
    title: "Fast & Reliable",
    description: "Failed sites retry on their own, so a run finishes even when a few don't load.",
  },
  {
    icon: FileSpreadsheet,
    dot: "var(--orb-pink)",
    label: "Export",
    title: "Clean CSV Export",
    description: "One click to download a spreadsheet, ready to open in Excel, Sheets, or your CRM.",
  },
];

export function Capabilities() {
  return (
    <section id="features" className="scroll-mt-20 bg-[var(--bg)] py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--terracotta)] uppercase">
            A small extension. A bigger picture.
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--fg)] uppercase sm:text-4xl">
            Everything you need to collect better data.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-[2px] border-2 border-[var(--fg)] bg-[var(--fg)] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05} className="h-full">
              <div className="h-full bg-[var(--card)] p-7 transition-colors hover:bg-[var(--secondary)]">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0"
                    style={{ background: feature.dot }}
                  />
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[var(--muted-fg)] uppercase">
                    {feature.label}
                  </span>
                </div>
                <feature.icon className="h-6 w-6 text-[var(--fg)]" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-lg text-[var(--fg)] uppercase">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-fg)]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[var(--muted-fg)]">
          It also skips duplicate listings, keeps every run&rsquo;s progress
          checkpointed locally in Chrome, and never uploads results to an
          outside server.
        </p>
      </Container>
    </section>
  );
}
