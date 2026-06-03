"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── REPLACE THESE WITH REAL IMAGE PATHS LATER ───────────────
// When you have real images, change this array to:
//   import Image from "next/image";
//   const images = [
//     "/images/hero/hero-1.jpg",
//     "/images/hero/hero-2.jpg",
//     "/images/hero/hero-3.jpg",
//   ];
// Then swap the placeholder <div> below with <Image> components.
// ──────────────────────────────────────────────────────────────

const placeholderSlides = [
  { id: 1, bg: "bg-slate-800" },
  { id: 2, bg: "bg-slate-700" },
  { id: 3, bg: "bg-slate-800" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  // Switch to the next slide every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % placeholderSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">

      {/* LAYER 1: Background placeholder slides */}
      {placeholderSlides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden="true"
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1500ms] ease-in-out ${
            slide.bg
          } ${index === active ? "opacity-100" : "opacity-0"}`}
        >
          {/* Placeholder indicator (only visible until real images are added) */}
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/5 px-8 py-6">
            <svg
              className="h-10 w-10 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
            <p className="text-sm font-medium text-slate-400">
              BG Images will run here
            </p>
            <p className="text-xs text-slate-500">
              Background images will change every 3 seconds
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Slide {slide.id} of {placeholderSlides.length}
            </p>
          </div>
        </div>
      ))}

      {/* LAYER 2: Dark overlay (keeps hero text readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-slate-950" />

      {/* LAYER 3: Hero content (always visible above everything) */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Transform Your Body
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Fitness Journey{" "}
              <span className="text-primary">Starts Here</span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-200">
              Join OneFitness and get access to world-class equipment,
              expert trainers, and a community that pushes you to be your best.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/plans">View Plans</Link>
              </Button>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
