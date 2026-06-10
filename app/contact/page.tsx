import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfoCard } from "@/components/ContactInfoCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with One Fitness Vizianagaram. Visit us at Boggula Dibba, call, WhatsApp, or send a message. Open until 10 PM daily.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Page heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get In Touch
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Start your fitness journey with OneFitness today
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact form */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>

          {/* Right: Contact info + WhatsApp */}
          <div className="space-y-8">
            {/* Contact info cards */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-white">
                Get in Touch
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <ContactInfoCard
                  title="Phone"
                  value={contactInfo.phoneDisplay}
                  icon={<span className="text-lg">📞</span>}
                  href={`tel:${contactInfo.phone}`}
                />
                <ContactInfoCard
                  title="Email"
                  value={contactInfo.email}
                  icon={<span className="text-lg">✉️</span>}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactInfoCard
                  title="Address"
                  value={contactInfo.address}
                  icon={<span className="text-lg">📍</span>}
                />
                <ContactInfoCard
                  title="Hours"
                  value={contactInfo.hours}
                  icon={<span className="text-lg">🕐</span>}
                />
              </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Quick Chat
              </h2>
              <WhatsAppCTA
                phone={contactInfo.whatsappNumber}
                message={contactInfo.whatsappMessage}
              />
            </section>
          </div>
        </div>

        {/* Google Maps */}
        <section className="mt-12 sm:mt-16">
          <GoogleMapEmbed />
        </section>
      </main>

      <Footer />
    </div>
  );
}
