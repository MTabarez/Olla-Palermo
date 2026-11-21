import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { SITE_CONTENT } from '../../data/siteContent';
import {
  formatUYU,
  resolveDonationSelection,
  type DonationFrequency,
  type DonationResolution,
} from '../../utils/communityLogic';

interface DonationAmountSelectorProps {
  onProceed: (resolution: DonationResolution) => void;
}

export function DonationAmountSelector({ onProceed }: DonationAmountSelectorProps) {
  const { donation } = SITE_CONTENT;
  const [frequency, setFrequency] = useState<DonationFrequency>('una-vez');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(500);
  const [customAmountRaw, setCustomAmountRaw] = useState('');
  const [isMaterialDonation, setIsMaterialDonation] = useState(false);
  const [materialDetails, setMaterialDetails] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSelectPreset = (amount: number) => {
    setIsMaterialDonation(false);
    setSelectedPreset(amount);
    setCustomAmountRaw('');
    setError(null);
  };

  const handleCustomChange = (value: string) => {
    setIsMaterialDonation(false);
    setCustomAmountRaw(value);
    if (value.trim()) {
      setSelectedPreset(null);
    }
    setError(null);
  };

  const handleToggleMaterial = () => {
    setIsMaterialDonation((prev) => !prev);
    setError(null);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const resolution = resolveDonationSelection({
      frequency,
      selectedPreset,
      customAmountRaw,
      isMaterialDonation,
      materialDetails,
    });

    if (!resolution.valid) {
      setError(resolution.error ?? 'Revisá los datos seleccionados.');
      return;
    }

    setError(null);
    onProceed(resolution);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[440px] rounded-2xl bg-white p-6 sm:p-8 text-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
      noValidate
    >
      <div className="text-center">
        <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] text-[#111111]">
          {donation.panelTitle}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.55] text-[#666666]">
          {donation.panelIntro}
        </p>
      </div>

      {/* Segmented frequency control */}
      <div
        className="mt-6 grid grid-cols-2 rounded-lg border border-[#E8E8E8] bg-[#F5F7FA] p-1"
        role="group"
        aria-label="Frecuencia de colaboración"
      >
        <button
          type="button"
          onClick={() => {
            setFrequency('una-vez');
            setIsMaterialDonation(false);
          }}
          aria-pressed={frequency === 'una-vez' && !isMaterialDonation}
          className={`rounded-md py-2 text-[13px] font-medium transition-all cursor-pointer ${
            frequency === 'una-vez' && !isMaterialDonation
              ? 'bg-white text-[#426FCE] shadow-xs ring-1 ring-[#426FCE]/30'
              : 'text-[#666666] hover:text-[#111111]'
          }`}
        >
          Una vez
        </button>
        <button
          type="button"
          onClick={() => {
            setFrequency('mensualmente');
            setIsMaterialDonation(false);
          }}
          aria-pressed={frequency === 'mensualmente' && !isMaterialDonation}
          className={`rounded-md py-2 text-[13px] font-medium transition-all cursor-pointer ${
            frequency === 'mensualmente' && !isMaterialDonation
              ? 'bg-white text-[#426FCE] shadow-xs ring-1 ring-[#426FCE]/30'
              : 'text-[#666666] hover:text-[#111111]'
          }`}
        >
          Mensualmente
        </button>
      </div>

      {/* Amount grid */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {donation.presets.map((amount) => {
          const isSelected =
            !isMaterialDonation && selectedPreset === amount && !customAmountRaw.trim();
          return (
            <button
              key={amount}
              type="button"
              onClick={() => handleSelectPreset(amount)}
              aria-pressed={isSelected}
              className={`rounded-lg border py-2.5 text-[14px] font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#426FCE] bg-[#426FCE]/8 text-[#426FCE]'
                  : 'border-[#E8E8E8] bg-white text-[#111111] hover:border-[#BDBDBD]'
              }`}
            >
              {formatUYU(amount)}
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="mt-3">
        <label htmlFor="custom-donation-amount" className="sr-only">
          {donation.customLabel}
        </label>
        <div
          className={`flex items-center rounded-lg border px-3.5 py-2.5 transition-colors ${
            !isMaterialDonation && customAmountRaw.trim()
              ? 'border-[#426FCE] ring-1 ring-[#426FCE]/20'
              : 'border-[#E8E8E8] focus-within:border-[#426FCE]'
          }`}
        >
          <span className="text-[14px] font-medium text-[#666666] mr-2">$</span>
          <input
            id="custom-donation-amount"
            type="text"
            inputMode="numeric"
            value={customAmountRaw}
            onChange={(e) => handleCustomChange(e.target.value)}
            placeholder={donation.customLabel}
            className="w-full bg-transparent text-[14px] text-[#111111] placeholder:text-[#888888] focus:outline-none"
          />
          <span className="text-[11px] font-medium tracking-[0.04em] text-[#666666] ml-2">
            UYU
          </span>
        </div>
      </div>

      {/* Material / food collaboration toggle */}
      <div className="mt-4">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              checked={isMaterialDonation}
              onChange={handleToggleMaterial}
              className="peer sr-only"
            />
            <span
              className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                isMaterialDonation
                  ? 'border-[#426FCE] bg-[#426FCE] text-white'
                  : 'border-[#CCCCCC] bg-white'
              }`}
              aria-hidden="true"
            >
              {isMaterialDonation && <Check className="h-3 w-3 stroke-[3]" />}
            </span>
          </span>
          <span className="text-[13px] leading-[1.4] text-[#444444]">
            {donation.materialOptionLabel}
          </span>
        </label>

        {isMaterialDonation && (
          <div className="mt-3">
            <label htmlFor="material-donation-details" className="sr-only">
              Detalle de alimentos o materiales
            </label>
            <input
              id="material-donation-details"
              type="text"
              value={materialDetails}
              onChange={(e) => setMaterialDetails(e.target.value)}
              placeholder="Ej.: arroz, aceite, verduras, garrafa o insumos"
              className="w-full rounded-lg border border-[#E8E8E8] bg-[#F5F7FA] px-3.5 py-2.5 text-[13px] text-[#111111] placeholder:text-[#888888] focus:border-[#426FCE] focus:bg-white focus:outline-none"
            />
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-[12px] font-medium text-[#B91C1C]">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-[#426FCE] py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#355BB5] cursor-pointer"
      >
        {donation.submitLabel}
      </button>

      <p className="mt-3 text-center text-[11px] leading-[1.45] text-[#666666]">
        {donation.reassurance}
      </p>
    </form>
  );
}
