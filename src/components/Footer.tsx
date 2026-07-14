import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo size="lg" onDark />
            <p className="mt-5 max-w-sm font-display text-xl font-medium leading-snug text-white sm:text-2xl">
              Building People.
              <br />
              Building Facilities.
              <br />
              Building the Future.
            </p>
          </div>
          <Link
            href="#join"
            className="text-sm font-medium text-muted-label transition-colors hover:text-teal"
          >
            Keep me updated
          </Link>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-label">
            © {new Date().getFullYear()} NEXFM. All rights reserved.
          </p>
          <p className="text-xs text-muted-label">
            An operating partner connecting people, places, and performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
