import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-sm font-display text-xl font-medium leading-snug text-carbon sm:text-2xl">
              Building People.
              <br />
              Building Facilities.
              <br />
              Building the Future.
            </p>
          </div>
          <Link
            href="#join"
            className="text-sm font-medium text-steel transition-colors hover:text-teal"
          >
            Keep me updated
          </Link>
        </div>

        <div className="flex flex-col gap-3 border-t border-divider pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} NEXFM. All rights reserved.
          </p>
          <p className="text-xs text-slate">
            An operating partner connecting people, places, and performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
