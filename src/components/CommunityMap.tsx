import { SITE_CONTENT } from '../data/siteContent';
import { PrimaryButton } from './ui/PrimaryButton';

// Stylized monochromatic dot-matrix silhouette evoking Palermo & Montevideo's southern coast along the Rambla Sur
function buildPalermoMapDots(): Array<{ x: number; y: number; active: boolean }> {
  const dots: Array<{ x: number; y: number; active: boolean }> = [];
  const cols = 46;
  const rows = 20;

  // Abstract neighborhood meeting & activity nodes (non-statistical, purely geographic visual accents)
  const accentNodes = new Set([
    '12,6',
    '13,6',
    '12,7',
    '19,4',
    '20,4',
    '26,5',
    '27,5',
    '26,6',
    '33,7',
    '34,7',
    '15,11',
    '16,11',
    '30,11',
    '31,11',
    '23,13',
  ]);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Gentle coastal bay curve on the bottom (Río de la Plata / Rambla Sur) and organic urban edges left/right
      const nx = c / (cols - 1);
      const ny = r / (rows - 1);

      const topBound = 0.08 + Math.sin(nx * Math.PI * 1.6) * 0.06 + (nx < 0.14 ? (0.14 - nx) * 1.4 : 0);
      const bottomBound =
        0.84 -
        Math.sin(nx * Math.PI) * 0.12 -
        (nx > 0.72 ? (nx - 0.72) * 0.55 : 0) +
        (nx < 0.25 ? (0.25 - nx) * 0.25 : 0);

      const leftEdge = 0.04 + Math.abs(ny - 0.45) * 0.18;
      const rightEdge = 0.96 - Math.abs(ny - 0.48) * 0.22;

      // Subtle diagonal avenue corridors evoking Palermo's street grid
      const inAvenueGap =
        (r === 9 && c > 6 && c < 39 && c % 4 === 0) ||
        (c === 22 && r > 2 && r < 14 && r % 3 === 0);

      if (
        ny >= topBound &&
        ny <= bottomBound &&
        nx >= leftEdge &&
        nx <= rightEdge &&
        !inAvenueGap
      ) {
        dots.push({
          x: 24 + c * 20,
          y: 20 + r * 19,
          active: accentNodes.has(`${c},${r}`),
        });
      }
    }
  }
  return dots;
}

const MAP_DOTS = buildPalermoMapDots();

export function CommunityMap() {
  const { map } = SITE_CONTENT;

  return (
    <section
      aria-label="Presencia territorial en Palermo, Montevideo"
      className="w-full bg-white py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1160px] px-6 md:px-10">
        {/* Stylized dotted territory graphic */}
        <div className="relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px]">
          <svg
            viewBox="0 0 960 410"
            className="w-full max-w-[1060px] h-auto select-none pointer-events-none"
            aria-hidden="true"
            role="presentation"
          >
            {/* Subtle coastline contour line along the Rambla Sur */}
            <path
              d="M 80 358 Q 270 320, 480 296 T 870 302"
              fill="none"
              stroke="#DCE3EE"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            {MAP_DOTS.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.x}
                cy={dot.y}
                r={dot.active ? 4.2 : 3.0}
                fill={dot.active ? '#426FCE' : '#D3DCE8'}
                opacity={dot.active ? 0.92 : 0.88}
              />
            ))}
            {/* Subtle concentric pulse rings on key neighborhood points */}
            <circle cx={264} cy={134} r={12} fill="none" stroke="#426FCE" strokeOpacity="0.34" strokeWidth="1.4" />
            <circle cx={544} cy={115} r={13} fill="none" stroke="#426FCE" strokeOpacity="0.34" strokeWidth="1.4" />
            <circle cx={684} cy={153} r={11} fill="none" stroke="#426FCE" strokeOpacity="0.30" strokeWidth="1.4" />
            <circle cx={344} cy={229} r={11} fill="none" stroke="#426FCE" strokeOpacity="0.30" strokeWidth="1.4" />
          </svg>

          {/* Centered Statement Over Map */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-medium leading-[1.08] tracking-[-0.028em] text-[#111111]">
              {map.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[540px] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#444444]">
              {map.supportingText}
            </p>

            <div className="mt-7">
              <PrimaryButton variant="dark" size="md" href={map.ctaHref}>
                {map.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
