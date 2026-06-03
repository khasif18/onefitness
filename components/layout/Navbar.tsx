"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "#trainers", label: "Trainers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">

        {/* Logo — icon-only, so brand name text is shown beside it */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo/onefitness-logo.png"
            alt="OneFitness"
            width={40}
            height={40}
            className="h-10 w-auto rounded-full"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            OneFitness
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm transition hover:text-white",
                pathname === item.href ? "text-white" : "text-slate-400"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="/plans">Join Now</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/10 px-6 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white",
                    pathname === item.href ? "text-white" : "text-slate-400"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="mt-2 w-full rounded-full">
                <Link href="/plans" onClick={() => setMobileOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
