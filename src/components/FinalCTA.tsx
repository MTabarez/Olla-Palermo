import { SITE_CONTENT } from '../data/siteContent';
import { PrimaryButton } from './ui/PrimaryButton';

interface FinalCTAProps {
  onOpenCollaborate: (presetTopic?: string) => void;
}

export function FinalCTA({ onOpenCollaborate }: FinalCTAProps) {
  const { finalCta } = SITE_CONTENT;

  return (
    <section aria-label="Llamado final a colaborar" className="w-full bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="relative flex min-h-[300px] md:min-h-[340px] w-full items-center overflow-hidden rounded-2xl bg-[#1A1A1A]">
          <img
            src={finalCta.image}
            alt={finalCta.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
            loading="lazy"
          />
          {/* Left-focused dark gradient keeps copy legible while keeping volunteer clearly visible on the right */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/48 to-black/10"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[540px] p-8 sm:p-10 md:p-14">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-normal leading-[1.16] tracking-[-0.02em] text-white">
              {finalCta.heading}
            </h2>
            <p className="mt-3.5 text-[14px] sm:text-[15px] leading-[1.6] text-white/85">
              {finalCta.body}
            </p>
            <div className="mt-6">
              <PrimaryButton
                variant="white"
                size="md"
                onClick={() => onOpenCollaborate('Quiero ser parte y colaborar en Palermo')}
              >
                {finalCta.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
