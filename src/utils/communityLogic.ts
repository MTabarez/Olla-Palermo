export type DonationFrequency = 'una-vez' | 'mensualmente';

export interface DonationSelectionState {
  frequency: DonationFrequency;
  selectedPreset: number | null;
  customAmountRaw: string;
  isMaterialDonation: boolean;
  materialDetails: string;
}

export interface DonationResolution {
  valid: boolean;
  error?: string;
  amount: number | null;
  summary: string;
  topic: string;
}

export interface ContactFormInput {
  name: string;
  contact: string;
  topic: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function formatUYU(amount: number): string {
  const rounded = Math.round(amount);
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$${formatted}`;
}

export function parseAmountInput(raw: string): number | null {
  const cleaned = raw.replace(/[^\d]/g, '');
  if (!cleaned) return null;
  const value = Number.parseInt(cleaned, 10);
  if (!Number.isFinite(value) || value <= 0) return null;
  return value;
}

export function resolveDonationSelection(state: DonationSelectionState): DonationResolution {
  if (state.isMaterialDonation) {
    const detail = state.materialDetails.trim();
    const summary = detail
      ? `Colaboración con alimentos o materiales: ${detail}`
      : 'Colaboración con alimentos o materiales';
    return {
      valid: true,
      amount: null,
      summary,
      topic: 'Colaboración con alimentos o materiales',
    };
  }

  const customParsed = state.customAmountRaw.trim()
    ? parseAmountInput(state.customAmountRaw)
    : null;

  if (state.customAmountRaw.trim() && customParsed === null) {
    return {
      valid: false,
      error: 'Ingresá un monto numérico válido mayor a cero.',
      amount: null,
      summary: '',
      topic: 'Colaboración económica',
    };
  }

  const finalAmount = customParsed ?? state.selectedPreset;

  if (finalAmount === null || finalAmount <= 0) {
    return {
      valid: false,
      error: 'Elegí un monto o ingresá otro valor para continuar.',
      amount: null,
      summary: '',
      topic: 'Colaboración económica',
    };
  }

  const freqLabel = state.frequency === 'mensualmente' ? 'Mensualmente' : 'Una vez';
  return {
    valid: true,
    amount: finalAmount,
    summary: `Aporte económico (${freqLabel}) — ${formatUYU(finalAmount)} UYU`,
    topic: `Aporte económico — ${freqLabel} (${formatUYU(finalAmount)})`,
  };
}

export function isValidContactChannel(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (emailRegex.test(trimmed)) return true;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Ingresá tu nombre o el nombre de tu colectivo.';
  }

  if (!isValidContactChannel(input.contact)) {
    errors.contact = 'Ingresá un correo electrónico o un teléfono válido para poder coordinar.';
  }

  if (input.message.trim().length < 8) {
    errors.message = 'Contanos brevemente cómo te gustaría colaborar o participar.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function clampCarouselIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(index, total - 1));
}

export interface InstagramEmbedData {
  type: 'p' | 'reel' | 'tv';
  shortcode: string;
  postUrl: string;
  embedUrl: string;
}

export function parseInstagramEmbedUrl(rawUrl: string): InstagramEmbedData | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.toLowerCase();
    if (host !== 'instagram.com' && host !== 'www.instagram.com' && host !== 'm.instagram.com') {
      return null;
    }

    const match = parsed.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]{5,32})(?:\/|$)/);
    if (!match) return null;

    const type = match[1] as 'p' | 'reel' | 'tv';
    const shortcode = match[2];
    const postUrl = `https://www.instagram.com/${type}/${shortcode}/`;
    const embedUrl = `https://www.instagram.com/${type}/${shortcode}/embed/captioned/`;

    return { type, shortcode, postUrl, embedUrl };
  } catch {
    return null;
  }
}

