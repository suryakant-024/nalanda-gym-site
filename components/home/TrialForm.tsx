"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const GOALS = ["Weight Loss", "Muscle Gain", "General Fitness"];

const WEBHOOK_URL = "https://schinchan0024.app.n8n.cloud/webhook/nalanda-trial";

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const goal = String(form.get("goal") || "");
    const preferredTime = String(form.get("time") || "").trim();

    if (!name || !email || !phone || !goal || !preferredTime) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, goal, preferredTime }),
      });

      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);

      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="trial" className="py-16 w-full bg-transparent" style={{ fontFamily: "var(--font-matter)" }}>
      <ScrollReveal className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 bg-white shadow-md rounded-full text-gray-500 font-medium text-sm mb-4">
            Get Started
          </div>
          <h2 className="text-2xl sm:text-4xl text-gray-800 leading-snug">Book a Free Trial</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8">
          {submitted ? (
            <p className="text-center text-gray-800 font-medium py-8">
              Thanks! We&apos;ve received your request and will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={submitting}
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  disabled={submitting}
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="e.g. 9876543210"
                />
              </div>
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                  Fitness Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  disabled={submitting}
                  defaultValue=""
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:bg-gray-100"
                >
                  <option value="" disabled>
                    Select a goal
                  </option>
                  {GOALS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  required
                  disabled={submitting}
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="e.g. Weekday mornings"
                />
              </div>

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-sm sm:text-base bg-black text-white rounded-full transition-transform hover:scale-[1.02] hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ fontWeight: 500 }}
              >
                {submitting ? "Sending..." : "Book a Free Trial"}
              </button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
