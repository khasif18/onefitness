"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── Hero slide images ──────────────────────────────────────
// Edit this array to add, remove, or reorder hero slides.
// Images are stored in: public/hero/
const HERO_IMAGES = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
];

// How often slides change (in milliseconds)
const SLIDE_INTERVAL = 3000;

// Single hero image with error fallback
function HeroImage({
  src,
  isActive,
  isPriority,
}: {
  src: string;
  isActive: boolean;
  isPriority: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null; // Hide broken images — dark bg shows through

  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="100vw"
      quality={80}
      priority={isPriority}
      loading={isPriority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export function Hero() {
  const [active, setActive] = useState(0);

  // Auto-advance to next slide every SLIDE_INTERVAL ms
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);

    // Cleanup: stop the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden bg-slate-900 sm:h-[90vh] sm:min-h-[600px]">
      {/* Background images — stacked, one visible at a time */}
      {HERO_IMAGES.map((src, index) => (
        <HeroImage
          key={src}
          src={src}
          isActive={index === active}
          isPriority={index === 0}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-slate-950" />
      {/* Extra left-side overlay to protect text area from bright spots */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {HERO_IMAGES.map((_, index) => (
          <span
            key={index}
            className={`block h-1.5 rounded-full transition-all duration-500 ${
              index === active
                ? "w-8 bg-primary"
                : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Hero content — always visible above everything */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <p className="text-xs font-medium uppercase tracking-widest text-primary sm:text-sm">
              Transform Your Body
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Your Fitness Journey{" "}
              <span className="text-primary">Starts Here</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Join OneFitness and get access to world-class equipment,
              expert trainers, and a community that pushes you to be your best.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link href="/plans">View Plans</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
