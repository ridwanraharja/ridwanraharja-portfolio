function Navigation() {
  return (
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
  );
}

export default Navigation;