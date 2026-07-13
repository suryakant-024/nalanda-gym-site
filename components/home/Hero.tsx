import Link from "next/link";
import ScrollStrips from "@/components/home/ScrollStrips";

// PLACEHOLDER: hero section background — replace with /common/Bg2.png
// Note: on the live site the header nav sits inside this same background block;
// here <Header /> is rendered globally in the shared layout instead.
export default function Hero() {
  return (
    <div className="bg-cover bg-center font-poppins w-full overflow-x-hidden min-h-auto sm:min-h-screen bg-gray-50">
      <div className="flex flex-col items-center text-center px-4 justify-start bg-transparent pt-0">
        <div className="relative w-full mx-auto mt-0 lg:-mt-4 sm:max-w-4xl aspect-[4/3] sm:aspect-auto">
          <img
            alt="Nalanda Gym trainers"
            src="/headerimg.jpg"
            className="w-full h-full object-cover rounded-2xl scale-[1.0] sm:scale-[0.92] lg:scale-[0.83]"
            style={{
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          />
        </div>
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-matter)" }}
        >
          Forge Your Strength at Nalanda Gym
        </h1>
        <p
          className="text-gray-600 text-sm sm:text-lg mt-4 max-w-xl"
          style={{ fontFamily: "var(--font-matter)" }}
        >
          Train with expert coaches, modern equipment, and a community that pushes you further.
        </p>
        <div className="flex space-x-3 sm:space-x-4 mt-8 z-10">
          <Link href="#trial">
            <button
              className="px-6 py-3.5 text-sm sm:px-8 sm:text-base lg:py-4 bg-black text-white rounded-full transition-transform hover:scale-105 hover:bg-gray-900"
              style={{ fontFamily: "var(--font-matter)", fontWeight: 500 }}
            >
              Book a Free Trial
            </button>
          </Link>
          <Link href="/contact">
            <button
              className="w-32 py-3.5 text-sm sm:w-44 sm:text-base lg:py-4 bg-white text-black rounded-full border border-gray-300 transition-transform hover:scale-105 hover:bg-gray-100"
              style={{ fontFamily: "var(--font-matter)", fontWeight: 500 }}
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mt-5">
          <p
            className="text-gray-700 text-sm sm:text-lg leading-none"
            style={{ fontFamily: "var(--font-matter)" }}
          >
            Trusted by <span className="text-blue-500 font-semibold">500+</span> Members
          </p>
        </div>
        <ScrollStrips />
      </div>
    </div>
  );
}
