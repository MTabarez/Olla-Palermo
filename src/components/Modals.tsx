import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { validateContactForm } from '../utils/communityLogic';
import { PrimaryButton } from './ui/PrimaryButton';

export interface EditorialModalContent {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  paragraphs: string[];
  ctaLabel?: string;
  ctaTopic?: string;
}

interface CollaborateModalProps {
  open: boolean;
  initialTopic: string;
  initialSummary?: string;
  onClose: () => void;
}

export function CollaborateModal({
  open,
  initialTopic,
  initialSummary,
  onClose,
}: CollaborateModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setTopic(initialTopic || 'Quiero colaborar con Red Palermo');
    setMessage(
      initialSummary
        ? `Hola, quiero coordinar la siguiente colaboración: ${initialSummary}.`
        : ''
    );
    setErrors({});
    setSubmitted(false);
  }, [open, initialTopic, initialSummary]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateContactForm({ name, contact, topic, message });
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="collaborate-modal-title"
        className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 text-[#111111] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#666666] hover:bg-[#F5F7FA] hover:text-[#111111] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#426FCE]/10 text-[#426FCE]">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3
              id="collaborate-modal-title"
              className="mt-4 text-[22px] font-medium tracking-[-0.015em] text-[#111111]"
            >
              Recibimos tu mensaje
            </h3>
            <p className="mt-2.5 text-[14px] leading-[1.6] text-[#666666]">
              Gracias, <span className="font-medium text-[#111111]">{name}</span>. Te contactaremos para coordinar la colaboración.
            </p>
            {initialSummary && (
              <p className="mt-3 rounded-lg bg-[#F5F7FA] px-4 py-2.5 text-[13px] text-[#444444]">
                {initialSummary}
              </p>
            )}
            <div className="mt-6">
              <PrimaryButton variant="dark" size="md" onClick={onClose}>
                Volver al sitio
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#426FCE]">
              COORDINACIÓN DIRECTA
            </p>
            <h3
              id="collaborate-modal-title"
              className="mt-1.5 text-[24px] font-medium tracking-[-0.02em] text-[#111111]"
            >
              Coordinemos tu colaboración
            </h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-[#666666]">
              Dejanos tus datos y nos ponemos en contacto para acordar horarios, insumos o formas de sumarte en Palermo.
            </p>

            {initialSummary && (
              <div className="mt-4 rounded-lg border border-[#426FCE]/25 bg-[#426FCE]/6 px-4 py-3 text-[13px] font-medium text-[#2A4B94]">
                Selección actual: {initialSummary}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label
                  htmlFor="collab-name"
                  className="block text-[12px] font-medium text-[#333333] mb-1.5"
                >
                  Nombre o colectivo
                </label>
                <input
                  id="collab-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre o el de tu grupo"
                  className="w-full rounded-lg border border-[#E8E8E8] px-3.5 py-2.5 text-[14px] text-[#111111] placeholder:text-[#999999] focus:border-[#426FCE] focus:outline-none"
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="collab-contact"
                  className="block text-[12px] font-medium text-[#333333] mb-1.5"
                >
                  Correo electrónico o teléfono
                </label>
                <input
                  id="collab-contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="ejemplo@correo.com o 099 000 000"
                  className="w-full rounded-lg border border-[#E8E8E8] px-3.5 py-2.5 text-[14px] text-[#111111] placeholder:text-[#999999] focus:border-[#426FCE] focus:outline-none"
                />
                {errors.contact && (
                  <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="collab-topic"
                  className="block text-[12px] font-medium text-[#333333] mb-1.5"
                >
                  Forma de participación
                </label>
                <input
                  id="collab-topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-lg border border-[#E8E8E8] bg-[#F5F7FA] px-3.5 py-2.5 text-[14px] text-[#111111] focus:border-[#426FCE] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="collab-message"
                  className="block text-[12px] font-medium text-[#333333] mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="collab-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos qué días podés acercarte o qué recursos te gustaría aportar"
                  className="w-full rounded-lg border border-[#E8E8E8] px-3.5 py-2.5 text-[14px] text-[#111111] placeholder:text-[#999999] focus:border-[#426FCE] focus:outline-none resize-y"
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-[12px] text-[#B91C1C]">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#426FCE] py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#355BB5] cursor-pointer"
              >
                Enviar y coordinar
              </button>

              <p className="text-center text-[11px] text-[#666666]">
                Te contactaremos para coordinar la colaboración. No solicitamos datos bancarios ni pagos en línea en este sitio.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

interface EditorialModalProps {
  content: EditorialModalContent | null;
  onClose: () => void;
  onCollaborateFromModal: (topic: string) => void;
}

export function EditorialModal({
  content,
  onClose,
  onCollaborateFromModal,
}: EditorialModalProps) {
  useEffect(() => {
    if (!content) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="editorial-modal-title"
        className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-[#111111] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar artículo"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#111111] shadow-sm hover:bg-white transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        {content.image && (
          <div className="h-56 sm:h-64 w-full overflow-hidden bg-[#F5F7FA]">
            <img
              src={content.image}
              alt={content.imageAlt ?? content.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#426FCE]">
            {content.kicker}
          </p>
          <h3
            id="editorial-modal-title"
            className="mt-1.5 text-[24px] sm:text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111]"
          >
            {content.title}
          </h3>
          {content.subtitle && (
            <p className="mt-2 text-[14px] text-[#666666]">{content.subtitle}</p>
          )}

          <div className="mt-5 space-y-4 text-[15px] leading-[1.68] text-[#444444]">
            {content.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#E8E8E8] pt-5">
            <PrimaryButton
              variant="dark"
              size="md"
              onClick={() => {
                const topic = content.ctaTopic ?? content.title;
                onClose();
                onCollaborateFromModal(topic);
              }}
            >
              {content.ctaLabel ?? 'Quiero colaborar'}
            </PrimaryButton>
            <button
              type="button"
              onClick={onClose}
              className="text-[13px] font-medium text-[#666666] hover:text-[#111111] cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
