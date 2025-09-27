import Navigation from "./components/Navbar";
import DecorativeElements from "./components/DecorativeElements";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300`}>
      <Navigation />
      <DecorativeElements />
      <Hero />
      <CompanyLogos />
    </div>
  );
}

export default App;
