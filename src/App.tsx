import profileImage from "./assets/images/profile.png";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-slate-800/40 backdrop-blur-md rounded-full px-8 py-3">
          <div className="flex space-x-8 text-sm gap-4">
            <a href="#home" className="text-white">
              Home
            </a>
            <a
              href="#works"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Works
            </a>
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-slate-400 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left star */}
        <div className="absolute top-32 left-16 text-teal-400 text-xl">✦</div>
        {/* Top right dots */}
        <div className="absolute top-36 right-20 w-2 h-2 bg-emerald-400 rounded-full"></div>
        <div className="absolute top-48 right-16 w-1 h-1 bg-emerald-400 rounded-full"></div>
        {/* Left side cross */}
        <div className="absolute top-80 left-32 text-slate-600 text-2xl transform rotate-45">
          +
        </div>
        {/* Bottom left star */}
        <div className="absolute bottom-64 left-40 text-teal-400 text-lg">
          ✦
        </div>
        {/* Right side elements */}
        <div className="absolute bottom-40 right-32 text-slate-600 text-xl transform rotate-12">
          ✕
        </div>
        <div className="absolute bottom-20 right-48 text-emerald-400 text-3xl">
          ✦
        </div>
        {/* Additional scattered elements */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-600 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 text-slate-700 text-sm">
          +
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 relative pt-16">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 mb-3">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm rounded-full px-3 py-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs text-slate-300">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <br />
            my digital humble abode
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-lg mx-auto">
            I'm an independent designer.
            <br />
            My interest lies in brand experience, and user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors flex items-center space-x-2 text-sm">
              <span>👋</span>
              <span>Let's talk</span>
            </button>
            <button className="border border-slate-700 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center space-x-2 text-sm">
              <span>Get Template</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-40 text-slate-500">
          <span className="text-sm font-medium">airbnb</span>
          <span className="text-sm font-medium">Microsoft</span>
          <span className="text-sm font-medium">duolingo</span>
          <span className="text-sm font-medium">NETFLIX</span>
          <span className="text-sm font-medium">Disney</span>
          <span className="text-sm font-medium">airbnb</span>
          <span className="text-sm font-medium">Meta</span>
        </div>
      </main>
    </div>
  );
}

export default App;
