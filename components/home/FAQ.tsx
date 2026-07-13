"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/homeData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-16 bg-cover bg-center bg-gray-50"
      /* PLACEHOLDER: background — replace with /bg_footer.png */
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2
            className="text-3xl sm:text-5xl text-gray-900 leading-snug"
            style={{ fontFamily: "var(--font-matter)" }}
          >
            Frequently Asked
            <br /> Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-5 bg-black rounded-full" />
                    <span style={{ fontFamily: "var(--font-matter)" }}>{faq.question}</span>
                  </div>
                  <ChevronDown
                    width={20}
                    height={20}
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 pl-8 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
