export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1687FF]/20 via-[#050A15] to-[#4DA6FF]/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 -right-20 w-72 md:w-96 h-72 md:h-96 bg-[#1687FF]/30 rounded-full blur-3xl animate-glow" />

          <div className="relative p-8 sm:p-12 md:p-20 text-center">
            <p className="text-[#4DA6FF] text-xs sm:text-sm font-semibold mb-3 tracking-widest uppercase">
              Get In Touch
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg px-2">
              Have a project in mind? Let's talk about it. Free consultation,
              no obligations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/923134322782"
                className="bg-gradient-to-r from-[#1687FF] to-[#4DA6FF] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold shadow-xl shadow-[#1687FF]/30 hover:shadow-[#1687FF]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:hrabbasitech@gmail.com"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold border border-[#1687FF]/40 hover:border-[#1687FF] hover:bg-[#1687FF]/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                📧 Email Us
              </a>
              <a
                href="https://linkedin.com/company/abbasitech"
                target="_blank"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold border border-[#1687FF]/40 hover:border-[#1687FF] hover:bg-[#1687FF]/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}