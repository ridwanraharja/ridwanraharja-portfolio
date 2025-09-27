import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useThemeStore } from "../store/themeStore";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200/80 dark:bg-slate-200/20 backdrop-blur-md hover:bg-slate-300/80 dark:hover:bg-slate-200/30 transition-colors border border-slate-300/50 dark:border-slate-700/20 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HiOutlineMoon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      ) : (
        <HiOutlineSun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
