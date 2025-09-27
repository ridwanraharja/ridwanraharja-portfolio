import profileImage from "../assets/images/profile.png";

function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 relative pt-16">
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
    </main>
  );
}

export default Hero;