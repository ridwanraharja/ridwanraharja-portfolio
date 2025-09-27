import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function Navigation({ theme, setTheme }: NavigationProps) {
  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-md rounded-full px-8 py-3 border border-slate-200/20 dark:border-slate-700/20">
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
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
