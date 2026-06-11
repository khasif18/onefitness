import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet the certified trainers at One Fitness Vizianagaram. Specialists in strength, HIIT, yoga, and body transformation — ready to guide your fitness journey.",
};

// Trainer data
const trainers = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Head Coach",
    specialization: "Strength & Conditioning",
    bio: "Marcus brings 10+ years of competitive powerlifting experience. He focuses on building functional strength for everyday athletes.",
    experience: "12 years",
    image: "/images/trainers/trainer-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Yoga & Mobility Coach",
    specialization: "Flexibility & Recovery",
    bio: "Sarah combines traditional yoga with sports science to help clients improve mobility, prevent injuries, and recover faster.",
    experience: "8 years",
    image: "/images/trainers/trainer-2.jpg",
  },
  {
    id: 3,
    name: "David Okafor",
    role: "HIIT Specialist",
    specialization: "Fat Loss & Endurance",
    bio: "David designs high-intensity programs that maximize calorie burn while keeping workouts fun and varied.",
    experience: "6 years",
    image: "/images/trainers/trainer-3.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Nutrition & Fitness Coach",
    specialization: "Body Transformation",
    bio: "Emily takes a holistic approach, combining personalized meal plans with progressive training to deliver lasting results.",
    experience: "9 years",
    image: "/images/trainers/trainer-4.jpg",
  },
];

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main id="main-content" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Page heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Team
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Meet Our Trainers
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Expert coaches dedicated to helping you reach your fitness goals.
            Every trainer is certified and passionate about results.
          </p>
        </div>

        {/* Trainer cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
            >
              {/* Trainer image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-800">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <svg
                    className="h-14 w-14 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.8}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Trainer info */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-white">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {trainer.role}
                </p>

                {/* Meta row */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
                    {trainer.specialization}
                  </span>
                  <span>{trainer.experience}</span>
                </div>

                {/* Bio */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {trainer.bio}
                </p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Train With Me
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
