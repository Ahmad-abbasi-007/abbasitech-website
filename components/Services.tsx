const services = [
  {
    title: "Business Websites",
    desc: "Modern, responsive websites that convert visitors into customers.",
    icon: "🌐",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, portals, and management systems for your business.",
    icon: "⚙️",
  },
  {
    title: "E-commerce Stores",
    desc: "Online stores with secure payments and easy product management.",
    icon: "🛒",
  },
  {
    title: "AI Integration",
    desc: "AI chatbots, automation, and smart features for your web apps.",
    icon: "🤖",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps built with React Native and Flutter.",
    icon: "📱",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing updates, backups, and technical support for your projects.",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#1687FF] text-xs sm:text-sm font-semibold mb-3 tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg px-2">
            End-to-end digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card rounded-2xl p-6 sm:p-8 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#1687FF]/20 to-[#4DA6FF]/10 border border-[#1687FF]/30 flex items-center justify-center text-xl sm:text-2xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-poppins text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {s.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}