import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-[#1687FF]/20 bg-[#050A15] py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="flex items-center justify-center lg:justify-start">
          <BrandLogo compact showTagline={false} className="items-center" />
        </div>

        <div className="text-sm text-white/60">
          © 2025 AbbasiTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}