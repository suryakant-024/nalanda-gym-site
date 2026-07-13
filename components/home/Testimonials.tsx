"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/homeData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="my-12 w-full flex flex-col items-center text-center px-6 bg-white" style={{ fontFamily: "var(--font-matter)" }}>
      <div className="px-5 py-2 bg-white shadow-md rounded-full text-gray-600 text-xs sm:text-sm font-medium">
        Client Testimonials
      </div>
      <h2 className="text-2xl sm:text-5xl mt-4 text-gray-800 mb-10 px-3 leading-snug">
        Happy Clients Testimonials
      </h2>
      <div className="relative w-full mt-5 max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {/* PLACEHOLDER testimonial — wire to real data source later */}
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-4">
              <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-6 font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-10 z-50">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gray-800" : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
