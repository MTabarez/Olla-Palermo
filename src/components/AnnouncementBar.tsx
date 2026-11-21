import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/siteContent';

export function AnnouncementBar() {
  const { announcement } = SITE_CONTENT;

  return (
    <div className="relative z-40 w-full border-b border-[#E8E8E8] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 text-center text-[11px] sm:text-[12px] leading-snug text-[#111111]">
        <span className="hidden sm:inline-flex items-center rounded bg-[#426FCE] px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.08em] text-white">
          {announcement.badge}
        </span>
        <span className="text-[#444444]">{announcement.text}</span>
        <a
          href={announcement.href}
          className="inline-flex shrink-0 items-center gap-1 font-medium text-[#426FCE] hover:text-[#355BB5] transition-colors"
        >
          <span>{announcement.linkLabel}</span>
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
