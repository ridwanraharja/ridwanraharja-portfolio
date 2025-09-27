import ThemeToggle from "../atoms/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-3xl p-8 border border-slate-200/30 dark:border-slate-700/20 min-w-[280px]">
        <div className="flex flex-col space-y-6 text-lg">
          <a
            href="#work"
            className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            onClick={onClose}
          >
            Work
          </a>
          <a
            href="#about"
            className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="#services"
            className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            onClick={onClose}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
            onClick={onClose}
          >
            Let's talk
          </a>

          <div className="pt-4 border-t border-slate-200/50 dark:border-slate-600/30">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
