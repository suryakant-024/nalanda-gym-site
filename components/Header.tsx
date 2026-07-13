"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const NAV_LEFT = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "#programs" },
];

const NAV_RIGHT = [
  { label: "Membership", href: "#trial" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="relative flex justify-center items-center py-6 bg-transparent"
      style={{ fontFamily: "var(--font-matter)" }}
    >
      {/* Desktop nav */}
      <div className="hidden md:grid grid-cols-3 items-center rounded-full px-12 py-4 border border-gray-200 min-w-[700px] bg-white">
        <div className="flex justify-center space-x-12">
          {NAV_LEFT.map((item) => (
            <Link key={item.href} className="hover:text-blue-600 font-medium" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
            Nalanda <span className="text-blue-500">Gym</span>
          </Link>
        </div>
        <div className="flex justify-center space-x-12">
          {NAV_RIGHT.map((item) => (
            <Link key={item.href} className="hover:text-blue-600 font-medium" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden w-[90%] justify-between items-center px-6 py-3 border border-gray-200 rounded-full bg-white z-50">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
          Nalanda <span className="text-blue-500">Gym</span>
        </Link>
        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu width={28} height={28} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[90%]
          bg-white border border-gray-200 rounded-xl shadow-md
          flex flex-col items-center py-6 space-y-6
          md:hidden z-40
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
      >
        {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
          <Link
            key={item.href}
            className="hover:text-blue-600 font-medium"
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
