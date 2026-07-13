"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const GOALS = ["Weight Loss", "Muscle Gain", "General Fitness"];

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const goal = String(form.get("goal") || "");
    const time = String(form.get("time") || "").trim();

    if (!name || !phone || !goal || !time) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    // TODO: connect to n8n webhook for lead capture
    setSubmitted(true);
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
              Thanks! We&apos;ve received your request — our team will call you shortly to confirm your free trial.
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
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
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
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  defaultValue=""
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Weekday mornings"
                />
              </div>

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <button
                type="submit"
                className="w-full py-3.5 text-sm sm:text-base bg-black text-white rounded-full transition-transform hover:scale-[1.02] hover:bg-gray-900"
                style={{ fontWeight: 500 }}
              >
                Book a Free Trial
              </button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
