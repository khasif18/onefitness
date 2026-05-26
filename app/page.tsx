import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
              OneFitness foundation
            </div>

            <div className="max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300">
                Freelance gym marketing landing page
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A clean, modern homepage built for gym brands and coaches.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                This Day 1 foundation includes a modular layout, reusable Navbar and Footer, plus a shadcn Button CTA for a polished hero section.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-full px-8">
                  Start your site
                </Button>
                <a
                  href="#home"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/25 p-6 text-slate-950">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-700">Day 1 foundation</p>
                <h2 className="mt-4 text-3xl font-semibold">Modular, simple, and ready to expand.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Keep the layout flexible so future pages can be added without changing the core structure.
                </p>
              </div>

              <div className="grid gap-4 rounded-3xl bg-slate-900/80 p-6 text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Focused for later</p>
                  <p className="mt-2 text-base">Membership, trainers, gallery, testimonials, and contact pages will come next.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Clean structure</p>
                    <p className="mt-2 text-sm">App Router + reusable components.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Mobile responsive</p>
                    <p className="mt-2 text-sm">Spacing and typography that scale on small screens.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
