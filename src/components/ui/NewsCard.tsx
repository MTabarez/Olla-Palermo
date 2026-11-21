import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  category: string;
  title: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  onOpen: () => void;
}

export function NewsCard({
  category,
  title,
  dateLabel,
  image,
  imageAlt,
  onOpen,
}: NewsCardProps) {
  return (
    <article className="group flex flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="flex flex-col text-left cursor-pointer"
      >
        <div className="overflow-hidden rounded-lg bg-[#F5F7FA] aspect-[4/3] w-full">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>
        <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.09em] text-[#426FCE]">
          {category}
        </span>
        <h3 className="mt-1.5 text-[16px] md:text-[17px] font-medium leading-[1.35] tracking-[-0.01em] text-[#111111] transition-colors group-hover:text-[#426FCE]">
          {title}
        </h3>
        <div className="mt-2.5 flex items-center justify-between text-[12px] text-[#666666]">
          <span>{dateLabel}</span>
          <ArrowRight
            className="h-3.5 w-3.5 text-[#666666] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#426FCE]"
            aria-hidden="true"
          />
        </div>
      </button>
    </article>
  );
}
