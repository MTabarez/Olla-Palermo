import { SITE_CONTENT } from '../data/siteContent';
import { ImageCard } from './ui/ImageCard';
import { SectionHeading } from './ui/SectionHeading';

interface WaysToHelpProps {
  onSelectTopic: (topic: string) => void;
}

export function WaysToHelp({ onSelectTopic }: WaysToHelpProps) {
  const { waysToHelp } = SITE_CONTENT;

  return (
    <section id="que-hacemos" className="w-full bg-white py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Asymmetric 2-column header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 items-start mb-12 md:mb-14">
          <div className="md:col-span-5">
            <SectionHeading as="h2" size="section">
              {waysToHelp.heading}
            </SectionHeading>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#666666]">
              {waysToHelp.description}
            </p>
          </div>
        </div>

        {/* Exact three equal-width photographic feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {waysToHelp.cards.map((card) => (
            <ImageCard
              key={card.id}
              title={card.title}
              description={card.description}
              linkLabel={card.linkLabel}
              image={card.image}
              imageAlt={card.imageAlt}
              onSelect={() => onSelectTopic(card.presetTopic)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
