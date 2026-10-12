const projects = [
  {
    title: "ChaiTap Landing Page",
    desc: "Modern, responsive landing page for a tea brand with smooth animations.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://chaitap-landing.vercel.app",
    tag: "Landing Page",
    icon: "🌐",
  },
  {
    title: "Comsats Scholarship System",
    desc: "Complete scholarship management system with database integration and admin workflows.",
    tech: ["Next.js", "Database", "Admin Panel"],
    link: "https://comsats-scholarship-system.vercel.app",
    tag: "Web App",
    icon: "🎓",
  },
  {
    title: "FinTrack AI",
    desc: "AI-powered personal finance tracker with smart insights and analytics dashboard.",
    tech: ["AI", "React", "Analytics"],
    link: "https://fintrack-ai-lime.vercel.app",
    tag: "AI Platform",
    icon: "🤖",
  },
  {
    title: "Ahmad Raza Portfolio",
    desc: "Modern developer portfolio with AR monogram branding and live demo links.",
    tech: ["Next.js", "Tailwind", "Responsive"],
    link: "https://ahmad-raza-portfolio-vert.vercel.app",
    tag: "Portfolio",
    icon: "💼",
  },
  {
    title: "Grocifier-Store",
    desc: "Full-featured e-commerce platform with cart, checkout, and product management.",
    tech: ["Next.js", "E-commerce", "Vercel"],
    link: "https://grocifier-store-by-abbasi.vercel.app/",
    tag: "E-commerce",
    icon: "🛒",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application with location-based forecasts and clean UI.",
    tech: ["React", "API", "Weather"],
    link: "https://weather-app-react-js-livid.vercel.app",
    tag: "Web App",
    icon: "🌤️",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#1687FF] text-xs sm:text-sm font-semibold mb-3 tracking-widest uppercase">
            Case Studies
          </p>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg px-2">
            Real projects we have designed and developed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Header */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-[#1687FF]/20 via-[#050A15] to-[#4DA6FF]/10 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#1687FF]/20 border border-[#1687FF]/40 text-[#4DA6FF] backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-5xl sm:text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                  {p.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-poppins text-base sm:text-lg font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mb-4 leading-relaxed flex-grow">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs bg-[#1687FF]/10 border border-[#1687FF]/20 text-[#4DA6FF] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1687FF] text-sm font-semibold hover:text-[#4DA6FF] transition inline-flex items-center gap-1 group-hover:gap-2"
                >
                  View Live <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}