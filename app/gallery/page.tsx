"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = ["all", "facility", "equipment", "members", "transformations"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main id="main-content" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Page heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Space
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            See our facility, equipment, and member transformations
          </p>
        </div>

        {/* Gallery section */}
        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Our Facility</h2>
            <p className="mt-2 text-sm text-slate-400">
              Take a look inside OneFitness
            </p>
          </div>

          {/* Filter buttons */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium capitalize transition",
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-slate-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
