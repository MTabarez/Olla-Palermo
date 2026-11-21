import { SITE_CONTENT } from '../data/siteContent';

interface FooterProps {
  onOpenCollaborate: (presetTopic?: string) => void;
  onOpenSocialInfo: (network: 'Instagram' | 'Facebook') => void;
}

export function Footer({ onOpenCollaborate, onOpenSocialInfo }: FooterProps) {
  const { brand, footer } = SITE_CONTENT;

  return (
    <footer className="w-full border-t border-[#E8E8E8] bg-white text-[#111111]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-14">
          {/* Column 1 — Brand */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#111111]"
            >
              <span>{brand.name}</span>
            </a>
            <p className="mt-3.5 max-w-[26ch] text-[13px] leading-[1.6] text-[#666666]">
              {brand.tagline}
            </p>
          </div>

          {/* Columns 2 & 3 — Navigation */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#111111]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'action' in link && link.action === 'volunteer' ? (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenCollaborate('Sumarme como voluntario/a en Red Palermo')
                        }
                        className="text-[13px] text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[13px] text-[#666666] hover:text-[#111111] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#111111]">
              CONTACTO
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-[#666666]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCollaborate('Consulta general a Red Palermo')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {brand.email}
                </button>
              </li>
              <li>{brand.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E8E8E8] pt-6 text-[12px] text-[#666666] sm:flex-row">
          <p>{brand.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenSocialInfo('Instagram')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Instagram
            </button>
            <button
              type="button"
              onClick={() => onOpenSocialInfo('Facebook')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
