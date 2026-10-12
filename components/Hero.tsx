import BrandLogo from "./BrandLogo";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1687FF]/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#4DA6FF]/10 rounded-full blur-3xl animate-glow" />

      <div className="relative max-w-6xl mx-auto text-center animate-fade-in-up">
        <BrandLogo className="justify-center" />
      </div>
    </section>
  );
}