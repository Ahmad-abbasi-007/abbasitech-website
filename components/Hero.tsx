export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1687FF]/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#4DA6FF]/10 rounded-full blur-3xl animate-glow" />

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#1687FF]/10 border border-[#1687FF]/30 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1687FF] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#4DA6FF] font-medium">
            Available for New Projects
          </span>
        </div>

        {/* Heading — RESPONSIVE FIX */}
        <h1 className="font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight">
          <span className="inline-block">
            Ideas <span className="text-[#1687FF]">→</span>
          </span>{" "}
          <span className="inline-block">
            Code <span className="text-[#1687FF]">→</span>
          </span>
          <br />
          <span className="gradient-text inline-block">Impact</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-xl text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          We build modern websites, web applications, and AI-powered solutions
          that help businesses grow online. From concept to launch — we handle it
          all.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap mb-12 sm:mb-16 px-4">
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-[#1687FF] to-[#4DA6FF] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold shadow-xl shadow-[#1687FF]/30 hover:shadow-[#1687FF]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#portfolio"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold border border-[#1687FF]/30 hover:border-[#1687FF] hover:bg-[#1687FF]/10 transition-all duration-300 text-sm sm:text-base"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 sm:pt-12 border-t border-[#1687FF]/20 px-4">
          {[
            { num: "10+", label: "Projects Built" },
            { num: "100%", label: "Client Focused" },
            { num: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins gradient-text">
                {stat.num}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}