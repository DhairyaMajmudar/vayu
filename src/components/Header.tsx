import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm border-b-gray-300 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="transition-opacity hover:opacity-80 focus:outline-none "
          >
            <Logo />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex md:space-x-8">
            <Link
              href="/planner"
              className="bg-indigo-600 px-2 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md rounded-md md:px-2 md:py-1.5"
            >
              Plan Weekend
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
