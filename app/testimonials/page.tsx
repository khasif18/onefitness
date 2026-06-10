import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsList } from "@/components/TestimonialsList";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real reviews from One Fitness members in Vizianagaram. See how our trainers and community have helped members lose weight, gain muscle, and transform their lives.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Page heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Member Stories
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Testimonials
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            See what our members say about their transformation at OneFitness
          </p>
        </div>

        {/* Testimonials section */}
        <section className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">
              Member Success Stories
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Real transformations from real members
            </p>
          </div>

          <TestimonialsList testimonials={testimonials} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
