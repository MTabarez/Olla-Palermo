import { SITE_CONTENT } from '../data/siteContent';
import { SectionHeading } from './ui/SectionHeading';

export function MissionStatement() {
  const { mission } = SITE_CONTENT;

  return (
    <section
      aria-label="Declaración institucional"
      className="w-full bg-white py-24 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-[860px] px-6 md:px-10">
        <SectionHeading as="h2" size="statement" align="center">
          {mission.statement}
        </SectionHeading>
      </div>
    </section>
  );
}
