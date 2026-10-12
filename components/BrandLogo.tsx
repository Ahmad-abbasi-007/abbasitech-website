import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
};

export default function BrandLogo({
  compact = false,
  showTagline = true,
  className = "",
}: BrandLogoProps) {
  if (compact || !showTagline) {
    return (
      <div
        className={`relative h-9 w-[9.5rem] shrink-0 overflow-hidden ${className}`}
        aria-label="AbbasiTech"
      >
        <Image
          src="/logo.png.png"
          alt="AbbasiTech"
          width={2460}
          height={1665}
          sizes="220px"
          className="absolute -top-[3.75rem] left-0 h-auto w-full max-w-none"
        />
      </div>
    );
  }

  return (
    <div className={`mx-auto w-full max-w-[850px] ${className}`}>
      <Image
        src="/logo.png.png"
        alt="AbbasiTech — Ideas to Code to Impact"
        width={2460}
        height={1665}
        sizes="(max-width: 640px) 100vw, 850px"
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
