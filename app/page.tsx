import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { SectionHeader } from "@/components/SectionHeader";
import { contactInfo } from "@/data/contact";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "One Fitness | Premium Gym in Vizianagaram",
  description:
    "Transform your body at One Fitness — Vizianagaram's premium strength and transformation gym. Expert trainers, world-class equipment, flexible plans, and a supportive community.",
};

// ─── Why Choose Us data ────────────────────────────────────
const reasons = [
  {
    icon: "👨‍🏫",
    title: "Expert Trainers",
    description:
      "Our certified coaches specialize in strength training, body transformation, and athletic performance — not just general fitness.",
  },
  {
    icon: "💪",
    title: "Strength & Transformation Focus",
    description:
      "Every program is built around progressive overload and measurable results. We track your lifts, your body composition, and your progress.",
  },
  {
    icon: "🎯",
    title: "Personal Attention",
    description:
      "Small group sessions and 1-on-1 coaching ensure you get corrected form, customized plans, and real accountability.",
  },
  {
    icon: "🤝",
    title: "Supportive Gym Environment",
    description:
      "No judgment, no ego. Whether you're lifting for the first time or competing, you'll find people here who push you forward.",
  },
];

// ─── Featured plans (subset for homepage) ──────────────────
const featuredPlans = [
  {
    name: "Basic",
    price: "$19",
    period: "/mo",
    features: ["Gym floor access", "Locker room", "1 group class/week"],
  },
  {
    name: "Standard",
    price: "$39",
    period: "/mo",
    recommended: true,
    features: ["Full gym access", "Unlimited classes", "1 PT session/month"],
  },
  {
    name: "Premium",
    price: "$69",
    period: "/mo",
    features: ["24/7 access", "Unlimited classes", "4 PT sessions/month"],
  },
];

// ─── Featured trainers ─────────────────────────────────────
const featuredTrainers = [
  { name: "Marcus Johnson", role: "Strength & Conditioning", experience: "12 years" },
  { name: "Sarah Chen", role: "Yoga & Mobility", experience: "8 years" },
  { name: "David Okafor", role: "HIIT Specialist", experience: "6 years" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeader
          label="Why Us"
          title="Why Choose OneFitness"
          subtitle="Built for people who want real results — not just a gym membership."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <span className="text-3xl">{reason.icon}</span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED MEMBERSHIP PLANS ═══ */}
      <section className="border-t border-white/5 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            label="Pricing"
            title="Featured Membership Plans"
            subtitle="No contracts. Cancel anytime. Start today."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-6 transition hover:border-white/20 ${
                  plan.recommended
                    ? "border-primary/50 bg-white/[0.07] ring-1 ring-primary/30"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.recommended && (
                  <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/plans">View All Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ MEET OUR TRAINERS ═══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeader
          label="Our Team"
          title="Meet Our Trainers"
          subtitle="Certified experts ready to guide your fitness journey."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTrainers.map((trainer) => (
            <div
              key={trainer.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-white/20"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
                <svg
                  className="h-8 w-8 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {trainer.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{trainer.role}</p>
              <p className="mt-1 text-xs text-slate-400">{trainer.experience}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/trainers">View All Trainers</Link>
          </Button>
        </div>
      </section>

      {/* ═══ MEMBER TESTIMONIALS ═══ */}
      <section className="border-t border-white/5 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            label="Reviews"
            title="Member Testimonials"
            subtitle="Hear from our members about their fitness journey."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
              >
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-sm italic leading-relaxed text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                {t.transformation && (
                  <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                    {t.transformation}
                  </span>
                )}
                <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Ask us about memberships, personal training, timings, or anything
            else. We&apos;re here to help you get started.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
              <Link href="/contact">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
              <Link href="/plans">View Plans</Link>
            </Button>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-500 sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            {contactInfo.phoneDisplay} · {contactInfo.hours}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
