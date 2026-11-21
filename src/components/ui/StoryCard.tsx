import { ArrowUpRight } from 'lucide-react';

interface StoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  onOpen: () => void;
}

export function StoryCard({
  title,
  subtitle,
  image,
  imageAlt,
  onOpen,
}: StoryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl aspect-[3/4] w-[270px] sm:w-[290px] lg:w-full shrink-0 text-left bg-[#1A1A1A] cursor-pointer snap-start"
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/65"
        aria-hidden="true"
      />

      <div className="relative z-10 p-5">
        <h3 className="text-[17px] md:text-[18px] font-medium leading-[1.25] tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="mt-1.5 text-[12px] md:text-[13px] leading-[1.45] text-white/80">
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 p-5 flex items-center justify-between">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111111] shadow-sm transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
