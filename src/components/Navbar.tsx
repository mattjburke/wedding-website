"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/travel", label: "Travel" },
  { href: "/things-to-do", label: "Things to Do" },
  { href: "/registry", label: "Registry" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-sage-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-olive-700 text-xl tracking-widest uppercase"
        >
          BodaBurke
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm tracking-widest uppercase transition-colors ${
                  pathname === href
                    ? "text-olive-700 underline"
                    : "text-olive-700 hover:underline"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-olive-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-sage-200 border-t border-sage-300 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-body text-sm tracking-widest uppercase ${
                    pathname === href ? "text-sage-400" : "text-olive-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
