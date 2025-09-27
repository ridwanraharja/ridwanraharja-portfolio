import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
