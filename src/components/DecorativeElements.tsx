function DecorativeElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-32 left-16 text-teal-400 text-xl">✦</div>
      <div className="absolute top-36 right-20 w-2 h-2 bg-emerald-400 rounded-full"></div>
      <div className="absolute top-48 right-16 w-1 h-1 bg-emerald-400 rounded-full"></div>
      <div className="absolute top-80 left-32 text-slate-400 dark:text-slate-600 text-2xl transform rotate-45">
        +
      </div>
      <div className="absolute bottom-64 left-40 text-teal-400 text-lg">
        ✦
      </div>
      <div className="absolute bottom-40 right-32 text-slate-400 dark:text-slate-600 text-xl transform rotate-12">
        ✕
      </div>
      <div className="absolute bottom-20 right-48 text-emerald-400 text-3xl">
        ✦
      </div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 text-slate-500 dark:text-slate-700 text-sm">
        +
      </div>
    </div>
  );
}

export default DecorativeElements;