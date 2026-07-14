"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const links = [
  { href: "#building", label: "What We're Building" },
  { href: "#difference", label: "Why We're Different" },
  { href: "#join", label: "Join" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo size="md" />

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-carbon transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#join" variant="primary" className="!px-5 !py-2.5">
            Keep Me Updated
          </Button>
        </div>

        <button
          type="button"
          className="text-carbon md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Menu strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-nav-border bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-carbon transition-colors hover:text-teal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#join" className="mt-2 w-full">
              Keep Me Updated
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
