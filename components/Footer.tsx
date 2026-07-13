"use client";

import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "#programs" },
  { label: "Membership", href: "#trial" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "/contact" },
];

const RESOURCES = [
  { label: "Blogs", href: "/blogs" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-gray-200 overflow-hidden w-full bg-cover bg-center bg-gray-50"
      style={{ fontFamily: "var(--font-matter)" }}
    >
      {/* PLACEHOLDER: footer background — replace with /bg_footer.png */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-lg text-gray-400">Contact us at</h3>
              <p className="text-base font-medium">
                <a href="mailto:nalandagym@demo.com" className="hover:underline">
                  nalandagym@demo.com
                </a>
              </p>
              {/* PLACEHOLDER: exact street address once available */}
              <p className="text-sm text-gray-500 mt-2">Nalanda, Bihar</p>
              <p className="text-sm text-gray-500">Mon–Sat 5 AM–10 PM, Sun 6 AM–12 PM</p>
            </div>
            <form
              className="relative w-full max-w-lg"
              onSubmit={(e) => e.preventDefault() /* PLACEHOLDER: wire to real subscribe endpoint */}
            >
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-100 p-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="grow min-w-0 pl-4 pr-2 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none md:px-7 md:py-4"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-colors shrink-0 text-sm md:px-8"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <GoogleMap />
          </div>

          <div className="lg:col-span-2 flex justify-end">
            <div className="grid grid-cols-2 gap-12 sm:gap-16 text-right">
              <div>
                <h4 className="text-base font-medium mb-4 text-gray-400">Links</h4>
                <nav className="space-y-2">
                  {LINKS.map((l) => (
                    <Link key={l.href} className="block text-sm hover:text-blue-600" href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <h4 className="text-base font-medium mb-4 text-gray-400">More Resources</h4>
                <nav className="space-y-2">
                  {RESOURCES.map((l) => (
                    <Link key={l.href} className="block text-sm hover:text-blue-600" href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pb-4">
        <span
          className="w-full text-center select-none whitespace-nowrap bg-clip-text text-transparent text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] scale-y-[1.2] sm:scale-y-[1.2] md:scale-y-[1.2] lg:scale-x-[1.5] lg:scale-y-[1.1] -translate-y-2 sm:-translate-y-3"
          style={{
            fontFamily: "var(--font-clash)",
            fontWeight: 400,
            lineHeight: 1.08,
            backgroundImage:
              "linear-gradient(180deg, rgba(30,30,30,0.93) 0%, rgba(120,120,120,0.5) 232.52%)",
            transformOrigin: "bottom center",
          }}
        >
          NALANDA GYM
        </span>
      </div>
    </footer>
  );
}
