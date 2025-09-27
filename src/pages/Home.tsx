import { Hero, Overview } from "../features/home";
import DecorativeElements from "../components/atoms/DecorativeElements";
import CompanyLogos from "../components/atoms/CompanyLogos";

function Home() {
  return (
    <>
      <DecorativeElements />
      <Hero />
      <CompanyLogos />
      <Overview />

      {/* Temporary content for testing sticky navbar */}
      <div className="h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Works Section</h2>
      </div>
      <div className="h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Section</h2>
      </div>
      <div className="h-screen bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
        <h2 className="text-4xl font-bold">FAQ Section</h2>
      </div>
    </>
  );
}

export default Home;
