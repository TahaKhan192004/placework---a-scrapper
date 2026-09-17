"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { CTA_HREF, CTA_LABEL, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b-2 border-[var(--fg)] bg-[var(--bg)]">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="font-serif text-sm tracking-wide text-[var(--fg)] uppercase"
        >
          <span className="text-[var(--terracotta)]">Place</span>
          work<span className="text-[var(--terracotta)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-[0.14em] text-[var(--muted-fg)] uppercase transition-colors hover:text-[var(--terracotta)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[var(--muted-fg)] uppercase">
            Built for Google Maps
          </span>
          <a
            href={CTA_HREF}
            className="inline-flex items-center gap-1.5 border-2 border-[var(--terracotta)] bg-[var(--terracotta)] px-4 py-2 font-serif text-xs tracking-wide text-[var(--bg)] uppercase transition-colors hover:bg-[var(--bg)] hover:text-[var(--terracotta)]"
          >
            {CTA_LABEL}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center text-[var(--fg)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </Container>

      {open && (
        <div className="border-t-2 border-[var(--fg)] bg-[var(--bg)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-xs font-bold tracking-[0.14em] text-[var(--muted-fg)] uppercase hover:text-[var(--terracotta)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CTA_HREF}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 border-2 border-[var(--terracotta)] bg-[var(--terracotta)] px-4 py-2.5 font-serif text-xs tracking-wide text-[var(--bg)] uppercase"
            >
              {CTA_LABEL}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
