import { Container } from "./Container";

const STATS = [
  {
    value: "200 Places",
    label: "collected per Maps search, at most",
  },
  {
    value: "1 CSV File",
    label: "Maps details and website contacts, combined",
  },
  {
    value: "0 Installs",
    label: "no Python, server, or account needed",
  },
];

export function StatsStrip() {
  return (
    <section className="border-y-2 border-[var(--fg)] bg-[var(--bg)]">
      <Container className="grid grid-cols-1 divide-y divide-[var(--border)] py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.value} className="px-2 py-4 text-center sm:py-0">
            <p className="font-serif text-2xl text-[var(--fg)] uppercase sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[11px] font-bold tracking-[0.1em] text-[var(--muted-fg)] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
