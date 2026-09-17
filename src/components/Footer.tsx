import { Container } from "./Container";
import { EXTENSION_ZIP_URL, NAV_LINKS } from "@/lib/site";

const RESOURCE_LINKS = [
  { label: "Download the ZIP", href: EXTENSION_ZIP_URL },
  { label: "Install steps", href: "#install" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[var(--fg)] bg-[var(--bg)] py-12">
      <Container className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#" className="font-serif text-sm tracking-wide text-[var(--fg)] uppercase">
            <span className="text-[var(--terracotta)]">Place</span>
            work<span className="text-[var(--terracotta)]">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-[var(--muted-fg)]">
            Turn Google Maps into opportunity. An independent tool, not
            affiliated with Google.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold tracking-[0.18em] text-[var(--muted-fg)] uppercase">
            Product
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.filter((link) => link.label !== "Pricing").map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--fg)] hover:text-[var(--terracotta)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold tracking-[0.18em] text-[var(--muted-fg)] uppercase">
            Resources
          </p>
          <ul className="mt-4 space-y-2.5">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--fg)] hover:text-[var(--terracotta)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-fg)] sm:flex-row sm:items-center sm:justify-between">
        <span>Made for builders, marketers, and curious minds.</span>
        <span>&copy; 2026 Placework. All rights reserved.</span>
      </Container>
    </footer>
  );
}
