import Navigation from "./components/Navbar";
import DecorativeElements from "./components/DecorativeElements";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <Navigation />
      <DecorativeElements />
      <Hero />
      <CompanyLogos />
    </div>
  );
}

export default App;
