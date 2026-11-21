import { SITE_CONTENT } from '../data/siteContent';
import type { DonationResolution } from '../utils/communityLogic';
import { DonationAmountSelector } from './ui/DonationAmountSelector';
import { SectionHeading } from './ui/SectionHeading';

interface DonationFeatureProps {
  onDonationProceed: (resolution: DonationResolution) => void;
}

export function DonationFeature({ onDonationProceed }: DonationFeatureProps) {
  const { donation } = SITE_CONTENT;

  return (
    <section
      id="colaborar"
      className="relative w-full overflow-hidden bg-[#181818] py-24 sm:py-28 md:py-36"
    >
      <img
        src={donation.backgroundImage}
        alt={donation.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-black/48"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[660px] mb-10 md:mb-12">
          <SectionHeading as="h2" size="statement" align="center" tone="white">
            {donation.topHeading}
          </SectionHeading>
        </div>

        <DonationAmountSelector onProceed={onDonationProceed} />

        <div className="mx-auto max-w-[620px] mt-10 md:mt-12">
          <p className="text-center text-[30px] sm:text-[38px] md:text-[44px] font-normal leading-[1.15] tracking-[-0.025em] text-white">
            {donation.bottomHeading}
          </p>
        </div>
      </div>
    </section>
  );
}
