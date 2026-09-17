import {
  Briefcase,
  Dumbbell,
  Home,
  LineChart,
  Plus,
  Scale,
  Smile,
  UsersRound,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const USE_CASES = [
  {
    title: "Sales and lead generation",
    description: "Build a prospect list for a niche and city before the first outreach email goes out.",
  },
  {
    title: "Market research",
    description: "Map every business of a category in an area for pricing, coverage, or expansion research.",
  },
  {
    title: "Recruiting and sourcing",
    description: "Find businesses of a type in a region, then work from their published contact details.",
  },
  {
    title: "Local outreach",
    description: "Build lists for events, sponsorships, and community partnerships nearby.",
  },
];

const INDUSTRIES: { label: string; icon: LucideIcon }[] = [
  { label: "Restaurants", icon: Utensils },
  { label: "Dentists", icon: Smile },
  { label: "Gyms", icon: Dumbbell },
  { label: "Real estate", icon: Home },
  { label: "Lawyers", icon: Scale },
  { label: "Home services", icon: Wrench },
];

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 bg-[var(--bg)] py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--terracotta)] uppercase">
            Built for real work
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--fg)] uppercase sm:text-4xl">
            Popular use cases
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((useCase, index) => {
            const icon = [Briefcase, LineChart, UsersRound, Home][index];
            const Icon = icon;
            return (
              <Reveal key={useCase.title} delay={index * 0.05}>
                <div className="h-full border-t-2 border-[var(--fg)] pt-5">
                  <Icon className="h-5 w-5 text-[var(--terracotta)]" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-base text-[var(--fg)] uppercase">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-fg)]">
                    {useCase.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <p className="text-sm text-[var(--muted-fg)]">Works with any industry.</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry.label}
                className="inline-flex items-center gap-2 border-2 border-[var(--fg)] px-4 py-2 font-serif text-xs text-[var(--fg)] uppercase transition-colors hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
              >
                <industry.icon className="h-4 w-4" strokeWidth={1.75} />
                {industry.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 border-2 border-dashed border-[var(--muted-fg)] px-4 py-2 font-serif text-xs text-[var(--muted-fg)] uppercase">
              <Plus className="h-4 w-4" strokeWidth={1.75} />
              And more
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
