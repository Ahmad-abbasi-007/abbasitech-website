export default function Footer() {
  return (
    <footer className="relative border-t border-[#1687FF]/20 py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1687FF] to-[#4DA6FF] flex items-center justify-center font-bold text-sm">
              A
            </div>
            <span className="font-poppins font-bold">
              Abbasi<span className="text-[#1687FF]">Tech</span>
            </span>
          </div>

          <p className="text-white/40 text-xs sm:text-sm text-center">
            © 2026 AbbasiTech · Ideas → Code → Impact
          </p>

          <div className="flex gap-5 md:gap-6 text-white/60 text-xs sm:text-sm">
            <a href="#services" className="hover:text-[#1687FF] transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#1687FF] transition">
              Work
            </a>
            <a href="#contact" className="hover:text-[#1687FF] transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}