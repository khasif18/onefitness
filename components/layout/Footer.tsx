import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#plans", label: "Membership" },
  { href: "#trainers", label: "Trainers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-6 py-10 text-slate-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-base font-semibold text-white">OneFitness</p>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            A simple marketing foundation for freelance gym brands. Clean, modern, and built to grow.
          </p>
        </div>
        <div className="grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} OneFitness. Built for gym marketing landing pages.
      </div>
    </footer>
  );
}
