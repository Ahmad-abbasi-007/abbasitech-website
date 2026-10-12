export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#1687FF] text-xs sm:text-sm font-semibold mb-3 tracking-widest uppercase">
              About Us
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              A founder-led studio building{" "}
              <span className="gradient-text">digital excellence</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-5 md:mb-6">
              AbbasiTech is a software studio based in Pakistan, helping
              businesses, startups, and institutions build fast, reliable, and
              user-friendly digital products.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Our approach is simple: understand your needs, agree on the scope,
              build the solution, test it, and support you after launch.
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                "Quality over quantity",
                "Transparent communication",
                "Long-term partnerships",
              ].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1687FF]/20 border border-[#1687FF]/40 flex items-center justify-center text-[#1687FF] text-xs flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-white/80 text-sm md:text-base">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#1687FF]/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1687FF] to-[#4DA6FF] flex items-center justify-center text-xl sm:text-2xl font-bold shadow-xl shadow-[#1687FF]/30">
                    A
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-base sm:text-lg">
                      AbbasiTech
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm">
                      Software House
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#1687FF]/5 border border-[#1687FF]/20">
                    <div className="text-xs text-white/50 mb-1">Mission</div>
                    <div className="text-sm">
                      Build digital products that create real impact
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-[#1687FF]/5 border border-[#1687FF]/20">
                    <div className="text-xs text-white/50 mb-1">Based in</div>
                    <div className="text-sm">Pakistan · Serving Globally</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-[#1687FF]/5 border border-[#1687FF]/20">
                    <div className="text-xs text-white/50 mb-1">Focus</div>
                    <div className="text-sm">Web · AI · Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}