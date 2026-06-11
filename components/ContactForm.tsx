"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      console.log("Form submitted:", form);
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
          <svg
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
        <p className="text-sm text-slate-400">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", email: "", message: "" });
          }}
          className="mt-2 text-sm font-medium text-primary transition hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Full Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-200"
        >
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          aria-invalid={!!errors.name}
          className={`w-full rounded-lg border bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:ring-2 ${
            errors.name
              ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
              : "border-white/10 focus:border-primary focus:ring-primary/30"
          }`}
        />
        {errors.name && (
          <p className="text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-200"
        >
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          className={`w-full rounded-lg border bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:ring-2 ${
            errors.phone
              ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
              : "border-white/10 focus:border-primary focus:ring-primary/30"
          }`}
        />
        {errors.phone && (
          <p className="text-xs text-red-400">{errors.phone}</p>
        )}
      </div>

      {/* Email Address */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-200"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={`w-full rounded-lg border bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:ring-2 ${
            errors.email
              ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
              : "border-white/10 focus:border-primary focus:ring-primary/30"
          }`}
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-200"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={4}
          aria-invalid={!!errors.message}
          className={`w-full resize-none rounded-lg border bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:ring-2 ${
            errors.message
              ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
              : "border-white/10 focus:border-primary focus:ring-primary/30"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="relative z-10 w-full rounded-full disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
      </Button>

      {/* Helper text */}
      <p className="text-center text-xs text-slate-500">
        We will get back to you as soon as possible
      </p>
    </form>
  );
}
