interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-200/20 backdrop-blur-md hover:bg-slate-300/80 dark:hover:bg-slate-200/30 transition-colors border border-slate-300/50 dark:border-slate-700/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
