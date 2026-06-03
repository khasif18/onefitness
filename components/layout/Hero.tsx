"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Add your 3 hero images to public/images/hero/
const images = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export function Hero() {
  const [active, setActive] = useState(0);

  // Switch to the next image every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">

      {/* LAYER 1: Background images (stacked, one fades in at a time) */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* LAYER 2: Dark overlay (keeps text readable on any image) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-slate-950" />

      {/* LAYER 3: Hero content (fixed in place, never moves) */}
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
