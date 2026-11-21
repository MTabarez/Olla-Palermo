import { SITE_CONTENT, type NewsItem } from '../data/siteContent';
import { NewsCard } from './ui/NewsCard';
import { SectionHeading } from './ui/SectionHeading';

interface NewsGridProps {
  onOpenNews: (item: NewsItem) => void;
}

export function NewsGrid({ onOpenNews }: NewsGridProps) {
  const { news } = SITE_CONTENT;

  return (
    <section id="noticias" className="w-full bg-white py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* 2-column header */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-10 items-end mb-12">
          <div className="md:col-span-5">
            <SectionHeading as="h2" size="section">
              {news.heading}
            </SectionHeading>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#666666]">
              {news.subtitle}
            </p>
          </div>
        </div>

        {/* Exact four horizontal news cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {news.items.map((item) => (
            <NewsCard
              key={item.id}
              category={item.category}
              title={item.title}
              dateLabel={item.dateLabel}
              image={item.image}
              imageAlt={item.imageAlt}
              onOpen={() => onOpenNews(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
