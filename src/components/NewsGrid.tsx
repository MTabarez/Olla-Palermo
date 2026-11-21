import { ArrowUpRight, Instagram } from 'lucide-react';
import { SITE_CONTENT, type NewsItem } from '../data/siteContent';
import { parseInstagramEmbedUrl, type InstagramEmbedData } from '../utils/communityLogic';
import { SectionHeading } from './ui/SectionHeading';

interface NewsGridProps {
  onOpenNews: (item: NewsItem) => void;
  onOpenInstagramInfo: () => void;
}

export function NewsGrid({ onOpenNews, onOpenInstagramInfo }: NewsGridProps) {
  const { news } = SITE_CONTENT;
  const { instagram } = news;

  const validEmbeds: InstagramEmbedData[] = instagram.postUrls
    .map((url) => parseInstagramEmbedUrl(url))
    .filter((entry): entry is InstagramEmbedData => entry !== null)
    .slice(0, 4);

  const hasLiveProfileUrl = Boolean(instagram.profileUrl.trim());

  return (
    <section id="noticias" className="w-full bg-white py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* 2-column header matching reference */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-10 items-end mb-12">
          <div className="md:col-span-5">
            <SectionHeading as="h2" size="section">
              {news.heading}
            </SectionHeading>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#666666] max-w-[44ch]">
              {news.subtitle}
            </p>
            {hasLiveProfileUrl ? (
              <a
                href={instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E8E8E8] bg-white px-4 py-2 text-[12px] font-medium text-[#111111] transition-colors hover:border-[#111111]"
              >
                <Instagram className="h-3.5 w-3.5 text-[#426FCE]" aria-hidden="true" />
                <span>{instagram.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#666666]" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onOpenInstagramInfo}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E8E8E8] bg-white px-4 py-2 text-[12px] font-medium text-[#111111] transition-colors hover:border-[#111111] cursor-pointer"
              >
                <Instagram className="h-3.5 w-3.5 text-[#426FCE]" aria-hidden="true" />
                <span>{instagram.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#666666]" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Live official Instagram post embeds when postUrls are configured */}
        {validEmbeds.length > 0 ? (
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Publicaciones incrustadas de Instagram"
          >
            {validEmbeds.map((embed) => (
              <div
                key={embed.shortcode}
                className="overflow-hidden rounded-xl border border-[#E8E8E8] bg-white"
              >
                <iframe
                  src={embed.embedUrl}
                  title={`Publicación de Instagram ${embed.shortcode}`}
                  className="h-[460px] w-full border-0 bg-white"
                  loading="lazy"
                  allow="encrypted-media"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Clean 4-column Instagram feed embed layout ready to swap with real postUrls */
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Vista de publicaciones de Instagram"
          >
            {news.items.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#E8E8E8] bg-white transition-colors hover:border-[#D0D7E2]"
              >
                {/* Instagram embed top bar */}
                <div className="flex items-center justify-between border-b border-[#F0F0F0] px-3.5 py-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[9px] font-semibold tracking-[0.04em] text-white"
                      aria-hidden="true"
                    >
                      RP
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold leading-tight text-[#111111]">
                        {instagram.handle}
                      </p>
                      <p className="truncate text-[10px] leading-tight text-[#666666]">
                        Palermo, Montevideo
                      </p>
                    </div>
                  </div>
                  <Instagram className="h-3.5 w-3.5 shrink-0 text-[#666666]" aria-hidden="true" />
                </div>

                {/* Clickable post visual + caption */}
                <button
                  type="button"
                  onClick={() => onOpenNews(item)}
                  className="flex flex-1 flex-col text-left cursor-pointer"
                >
                  <div className="aspect-[4/4] w-full overflow-hidden bg-[#F5F7FA]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#426FCE]">
                        {item.category}
                      </span>
                      <h3 className="mt-1 text-[14px] font-medium leading-[1.4] text-[#111111] transition-colors group-hover:text-[#426FCE]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-[1.5] text-[#666666] line-clamp-2">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-3.5 flex items-center justify-between border-t border-[#F0F0F0] pt-3 text-[11px] font-medium text-[#666666]">
                      <span>{item.dateLabel}</span>
                      <span className="inline-flex items-center gap-1 text-[#426FCE]">
                        <span>Ver publicación</span>
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
