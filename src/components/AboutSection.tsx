import { SITE_CONTENT } from '../data/siteContent';
import { TextLink } from './ui/TextLink';

interface AboutSectionProps {
  onOpenHistory: () => void;
}

export function AboutSection({ onOpenHistory }: AboutSectionProps) {
  const { about } = SITE_CONTENT;

  return (
    <section id="quienes-somos" className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="border-t border-[#E8E8E8] py-20 md:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#666666] lg:pt-2">
                {about.label}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] font-normal leading-[1.45] tracking-[-0.015em] text-[#111111]">
                {about.paragraphs[0]}
              </p>

              <p className="text-[16px] md:text-[17px] leading-[1.68] text-[#444444]">
                {about.paragraphs[1]}
              </p>

              <p className="text-[16px] md:text-[17px] leading-[1.68] text-[#444444]">
                {about.paragraphs[2]}
              </p>

              <div className="pt-2">
                <TextLink onClick={onOpenHistory}>{about.ctaLabel}</TextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
