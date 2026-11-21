import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SITE_CONTENT, type ActivityItem } from '../data/siteContent';
import { SectionHeading } from './ui/SectionHeading';
import { SecondaryButton } from './ui/SecondaryButton';
import { TextLink } from './ui/TextLink';

interface EventListProps {
  onSelectEvent: (activity: ActivityItem) => void;
}

export function EventList({ onSelectEvent }: EventListProps) {
  const { events } = SITE_CONTENT;
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll
    ? [events.primaryEvent, ...events.additionalEvents]
    : [events.primaryEvent];

  return (
    <section id="actividades" className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading as="h2" size="section">
          {events.heading}
        </SectionHeading>

        <div className="mt-4">
          <span className="inline-flex items-center rounded-full border border-[#E8E8E8] px-4 py-1.5 text-[12px] font-medium text-[#555555]">
            {events.categoryLabel}
          </span>
        </div>

        <div className="mt-6 divide-y divide-[#E8E8E8] border-t border-b border-[#E8E8E8]">
          {visibleEvents.map((eventItem) => (
            <div
              key={eventItem.id}
              className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-5">
                {/* Compact date tile */}
                <div className="flex w-[94px] shrink-0 flex-col items-center justify-center rounded-lg border border-[#E8E8E8] bg-[#F5F7FA] px-2.5 py-3 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#426FCE]">
                    {eventItem.dateLabel}
                  </span>
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#111111] leading-tight">
                    {eventItem.dateSubLabel}
                  </span>
                </div>

                {/* Event details */}
                <div className="min-w-0">
                  <h3 className="text-[17px] md:text-[18px] font-medium tracking-[-0.01em] text-[#111111]">
                    {eventItem.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[#666666] max-w-[54ch]">
                    {eventItem.description}
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#555555]">
                    <MapPin className="h-3.5 w-3.5 text-[#426FCE]" aria-hidden="true" />
                    <span>{eventItem.location}</span>
                  </p>
                </div>
              </div>

              <div className="md:shrink-0 md:pl-4">
                <SecondaryButton
                  variant="dark-outline"
                  size="sm"
                  onClick={() => onSelectEvent(eventItem)}
                >
                  Más información
                </SecondaryButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <TextLink onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? 'Ver menos actividades' : events.secondaryAction}
          </TextLink>
        </div>
      </div>
    </section>
  );
}
