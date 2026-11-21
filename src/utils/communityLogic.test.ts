import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatUYU,
  parseAmountInput,
  resolveDonationSelection,
  isValidContactChannel,
  validateContactForm,
  clampCarouselIndex,
  parseInstagramEmbedUrl,
} from './communityLogic';

test('formatUYU formats Uruguayan pesos with dot thousand separator', () => {
  assert.equal(formatUYU(200), '$200');
  assert.equal(formatUYU(1000), '$1.000');
  assert.equal(formatUYU(2500), '$2.500');
});

test('parseAmountInput parses numeric strings and rejects invalid values', () => {
  assert.equal(parseAmountInput('1.500'), 1500);
  assert.equal(parseAmountInput('$ 750'), 750);
  assert.equal(parseAmountInput('0'), null);
  assert.equal(parseAmountInput('abc'), null);
});

test('resolveDonationSelection handles preset amount and frequency', () => {
  const result = resolveDonationSelection({
    frequency: 'mensualmente',
    selectedPreset: 1000,
    customAmountRaw: '',
    isMaterialDonation: false,
    materialDetails: '',
  });
  assert.equal(result.valid, true);
  assert.equal(result.amount, 1000);
  assert.match(result.summary, /Mensualmente/);
  assert.match(result.summary, /\$1\.000/);
});

test('resolveDonationSelection prefers custom amount over preset and rejects invalid custom input', () => {
  const customOk = resolveDonationSelection({
    frequency: 'una-vez',
    selectedPreset: 500,
    customAmountRaw: '1500',
    isMaterialDonation: false,
    materialDetails: '',
  });
  assert.equal(customOk.valid, true);
  assert.equal(customOk.amount, 1500);

  const customBad = resolveDonationSelection({
    frequency: 'una-vez',
    selectedPreset: 500,
    customAmountRaw: '---',
    isMaterialDonation: false,
    materialDetails: '',
  });
  assert.equal(customBad.valid, false);
  assert.ok(customBad.error);
});

test('resolveDonationSelection handles material collaboration mode without monetary amount', () => {
  const result = resolveDonationSelection({
    frequency: 'una-vez',
    selectedPreset: null,
    customAmountRaw: '',
    isMaterialDonation: true,
    materialDetails: 'Arroz y aceite',
  });
  assert.equal(result.valid, true);
  assert.equal(result.amount, null);
  assert.match(result.summary, /Arroz y aceite/);
});

test('isValidContactChannel validates emails and Uruguayan phones', () => {
  assert.equal(isValidContactChannel('vecina@palermo.uy'), true);
  assert.equal(isValidContactChannel('099 123 456'), true);
  assert.equal(isValidContactChannel('12345'), false);
  assert.equal(isValidContactChannel(''), false);
});

test('validateContactForm returns field-level errors for missing fields and passes valid payload', () => {
  const empty = validateContactForm({
    name: '',
    contact: 'invalido',
    topic: 'Olla popular',
    message: 'Hola',
  });
  assert.equal(empty.valid, false);
  assert.ok(empty.errors.name);
  assert.ok(empty.errors.contact);
  assert.ok(empty.errors.message);

  const ok = validateContactForm({
    name: 'Sofía Martínez',
    contact: 'sofia@ejemplo.uy',
    topic: 'Sumate a la olla',
    message: 'Me gustaría sumarme a colaborar en la próxima jornada en Palermo.',
  });
  assert.equal(ok.valid, true);
  assert.deepEqual(ok.errors, {});
});

test('clampCarouselIndex bounds index safely', () => {
  assert.equal(clampCarouselIndex(-2, 4), 0);
  assert.equal(clampCarouselIndex(2, 4), 2);
  assert.equal(clampCarouselIndex(9, 4), 3);
  assert.equal(clampCarouselIndex(1, 0), 0);
});

test('parseInstagramEmbedUrl converts valid post and reel links and rejects non-Instagram URLs', () => {
  const post = parseInstagramEmbedUrl('https://www.instagram.com/p/C9AbCdEf123/?utm_source=ig_web_copy_link');
  assert.deepEqual(post, {
    type: 'p',
    shortcode: 'C9AbCdEf123',
    postUrl: 'https://www.instagram.com/p/C9AbCdEf123/',
    embedUrl: 'https://www.instagram.com/p/C9AbCdEf123/embed/captioned/',
  });

  const reel = parseInstagramEmbedUrl('https://instagram.com/reel/XyZ_9876543/');
  assert.equal(reel?.embedUrl, 'https://www.instagram.com/reel/XyZ_9876543/embed/captioned/');

  assert.equal(parseInstagramEmbedUrl('https://example.com/p/C9AbCdEf123/'), null);
  assert.equal(parseInstagramEmbedUrl('https://www.instagram.com/redpalermo/'), null);
  assert.equal(parseInstagramEmbedUrl('not-a-url'), null);
});

