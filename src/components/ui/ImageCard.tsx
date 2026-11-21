import { ArrowRight } from 'lucide-react';

interface ImageCardProps {
  title: string;
  description: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  onSelect: () => void;
}

export function ImageCard({
  title,
  description,
  linkLabel,
  image,
  imageAlt,
  onSelect,
}: ImageCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl aspect-[4/4.6] w-full text-left bg-[#1A1A1A] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426FCE]"
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/70 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 p-5 md:p-6">
        <h3 className="text-[19px] md:text-[21px] font-medium leading-[1.22] tracking-[-0.015em] text-white">
          {title}
        </h3>
        <p className="mt-2 text-[13px] md:text-[14px] leading-[1.5] text-white/85 max-w-[28ch]">
          {description}
        </p>
      </div>

      <div className="relative z-10 p-4 md:p-5">
        <span className="flex w-full items-center justify-between rounded-lg border border-white/25 bg-white/15 px-4 py-2.5 text-[13px] font-medium text-white backdrop-blur-md transition-colors duration-200 group-hover:bg-white/25">
          <span>{linkLabel}</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </button>
  );
}
