import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-6 z-50 w-full flex justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:block bg-white/80 dark:bg-slate-800/40 backdrop-blur-md rounded-full px-8 py-3 border border-slate-200/20 dark:border-slate-700/20">
          <div className="flex items-center space-x-8 text-sm gap-4">
            <a href="#home" className="text-slate-900 dark:text-white">
              Home
            </a>
            <a
              href="#works"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Works
            </a>
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              FAQ
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="w-[90%] md:hidden bg-white/80 dark:bg-slate-700/90 backdrop-blur-md rounded-full px-4 py-3 border border-slate-200/20 dark:border-slate-600/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
              </div>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-3xl p-8 border border-slate-200/30 dark:border-slate-700/20 min-w-[280px]">
            <div className="flex flex-col space-y-6 text-lg">
              <a
                href="#work"
                className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work
              </a>
              <a
                href="#about"
                className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Let's talk
              </a>

              {/* Theme Toggle for Mobile */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-600/30">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
