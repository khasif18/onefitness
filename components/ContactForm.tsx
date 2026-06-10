"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-200"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-200"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          required
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Email Address */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-200"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Submit button */}
      <Button type="submit" size="lg" className="relative z-10 w-full rounded-full">
        Send Inquiry
      </Button>

      {/* Helper text */}
      <p className="text-center text-xs text-slate-500">
        We will get back to you as soon as possible
      </p>
    </form>
  );
}
