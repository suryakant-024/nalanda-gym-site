"use client";

import { useState } from "react";
import { REELS } from "@/lib/homeData";

// Card layout (offset/scale/opacity per relative slot) approximated from the live
// site's coverflow-style carousel — confirm exact transform values against live site.
function cardStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  if (abs === 0) return { width: 230, height: 380, opacity: 1, zIndex: 50, transform: "translateX(0) scale(1)" };
  if (abs === 1)
    return {
      width: 200,
      height: 330,
      opacity: 0.8,
      zIndex: 40,
      transform: `translateX(${offset * 200}px) scale(0.9)`,
    };
  return {
    width: 260,
    height: 380,
    opacity: 0,
    zIndex: 0,
    transform: `translateX(${offset * 400}px) scale(0.6)`,
  };
}

export default function SocialReels() {
  const [index, setIndex] = useState(0);
  const count = REELS.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="py-10 text-center w-full overflow-hidden bg-white">
      <div className="inline-block px-4 py-1 border rounded-full text-sm mb-4 text-gray-500">
        Transformations &amp; Community
      </div>
      <h2 className="text-2xl my-2 sm:text-5xl text-center text-gray-800 px-3 leading-snug">
        Trusted by 500+ Members
      </h2>
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center h-[500px] w-full max-w-[1400px]">
          {REELS.map((reel, i) => {
            let offset = i - index;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            if (Math.abs(offset) > 2) return null;
            return (
              <div
                key={reel.caption}
                draggable={false}
                className="absolute rounded-[28px] overflow-hidden shadow-2xl bg-black transition-all duration-500"
                style={cardStyle(offset)}
              >
                {/* PLACEHOLDER: Unsplash stock photo — replace with real member transformation photos */}
                <img
                  alt={reel.caption}
                  src={reel.img}
                  className="object-cover pointer-events-none w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium text-left">
                  {reel.caption}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-6 mt-3 lg:mt-8 z-50">
          <button
            onClick={prev}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white transition shadow-sm"
            aria-label="Previous"
          >
            ←
          </button>
          <div className="flex justify-center gap-3">
            {REELS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gray-800" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white transition shadow-sm"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
