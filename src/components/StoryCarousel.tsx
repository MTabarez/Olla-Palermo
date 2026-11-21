import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE_CONTENT, type StoryItem } from '../data/siteContent';
import { clampCarouselIndex } from '../utils/communityLogic';
import { PrimaryButton } from './ui/PrimaryButton';
import { SectionHeading } from './ui/SectionHeading';
import { StoryCard } from './ui/StoryCard';

interface StoryCarouselProps {
  onOpenStory: (story: StoryItem) => void;
  onViewAllStories: () => void;
}

export function StoryCarousel({ onOpenStory, onViewAllStories }: StoryCarouselProps) {
  const { stories } = SITE_CONTENT;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigate = (direction: -1 | 1) => {
    const nextIndex = clampCarouselIndex(activeIndex + direction, stories.items.length);
    setActiveIndex(nextIndex);

    const container = trackRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 20 : 300;
    container.scrollTo({
      left: nextIndex * step,
      behavior: 'smooth',
    });
  };

  return (
    <section id="historias" className="w-full bg-white py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Top bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <SectionHeading as="h2" size="section">
            {stories.heading}
          </SectionHeading>

          <div className="flex items-center gap-2.5">
            <PrimaryButton variant="dark" size="sm" onClick={onViewAllStories}>
              {stories.viewAllLabel}
            </PrimaryButton>

            <div className="flex items-center gap-2" aria-label="Controles del carrusel de historias">
              <button
                type="button"
                onClick={() => handleNavigate(-1)}
                disabled={activeIndex === 0}
                aria-label="Historia anterior"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#111111] transition-colors hover:border-[#111111] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleNavigate(1)}
                disabled={activeIndex === stories.items.length - 1}
                aria-label="Siguiente historia"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#111111] transition-colors hover:border-[#111111] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal carousel row of 4 tall portrait cards */}
        <div
          ref={trackRef}
          data-active-story-index={activeIndex}
          className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {stories.items.map((story, idx) => (
            <div
              key={story.id}
              className={`shrink-0 transition-transform duration-300 ${
                idx === activeIndex ? 'ring-0' : ''
              }`}
            >
              <StoryCard
                title={story.title}
                subtitle={story.subtitle}
                image={story.image}
                imageAlt={story.imageAlt}
                onOpen={() => onOpenStory(story)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
