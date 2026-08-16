import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

interface ReferenceItem {
  id: string;
  image: string;
  alt: string;
}

const references: ReferenceItem[] = [
  {
    id: '1',
    image: '/service-smahusbyggnation.webp',
    alt: 'Småhusbyggnation i Uppland',
  },
  {
    id: '2',
    image: '/portfolio-extension.webp',
    alt: 'Tillbyggnad på villa',
  },
  {
    id: '3',
    image: '/gallery-deck.webp',
    alt: 'Platsbyggt trädäck och altan',
  },
  {
    id: '4',
    image: '/gallery-kitchen.webp',
    alt: 'Köksrenovering och finsnickeri',
  },
  {
    id: '5',
    image: '/gallery-bathroom.webp',
    alt: 'Badrumsrenovering',
  },
  {
    id: '6',
    image: '/portfolio-facade.webp',
    alt: 'Fasadbyte och panelarbete',
  },
];

export default function ProjectsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = references.length;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + total) % total));
  }, [total]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % total));
  }, [total]);

  // Lightbox keyboard navigation & body lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section
      id="projekt"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(234, 88, 12, 0.03) 0%, transparent 65%), #f8fafc',
        padding: 'clamp(58px, 7.5vw, 92px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
        }}
      >
        {/* Clean Authentic Split-Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px',
        }}>
          <div>
            <ScrollReveal animation="fade-right">
              <span style={{
                color: 'var(--color-primary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}>
                Utförda projekt
              </span>
              <h2
                style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Ett urval av våra referenser
              </h2>
            </ScrollReveal>
          </div>

          <div style={{ maxWidth: '400px' }}>
            <ScrollReveal animation="fade-left" delay={100}>
              <p
                style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Ett urval av våra utförda byggprojekt och renoveringar. Klicka på valfri bild för fullskärmsvy.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 6-Image Dynamic Ratio Collage Grid */}
        <div
          className="collage-grid"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {references.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={item.id}
                className={`collage-item collage-item-${idx + 1} ${isHovered ? 'hovered' : ''} ${isAnyHovered && !isHovered ? 'dimmed' : ''}`}
                onClick={() => setLightboxIndex(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Visa referensbild ${idx + 1}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="collage-card-img"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <ScrollReveal animation="fade-up" delay={100}>
            <Button variant="primary" href="/offert" size="md">
              Begär offert för ditt projekt
            </Button>
          </ScrollReveal>
        </div>
      </div>

      {/* Lightbox Modal via Portal directly to body */}
      {lightboxIndex !== null && typeof document !== 'undefined' && createPortal(
        <div
          className="ref-modal-backdrop"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="ref-modal-close"
            aria-label="Stäng"
          >
            <X size={24} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="ref-modal-arrow prev"
            aria-label="Föregående bild"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="ref-modal-arrow next"
            aria-label="Nästa bild"
          >
            <ChevronRight size={30} />
          </button>

          {/* Modal Image Wrapper */}
          <div
            className="ref-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={references[lightboxIndex].image}
              alt={references[lightboxIndex].alt}
              className="ref-modal-img"
            />
            <div className="ref-modal-counter">
              {lightboxIndex + 1} / {total}
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        /* Desktop Dynamic Ratio 2-Row Collage */
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 250px;
          gap: 20px;
        }

        .collage-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #e2e8f0;
          border: 1px solid rgba(15, 23, 42, 0.08);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease, opacity 0.3s ease;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.02);
        }

        /* Row 1: 5 cols (Wide) + 4 cols (Med) + 3 cols (Compact) */
        .collage-item-1 {
          grid-column: span 5;
        }

        .collage-item-2 {
          grid-column: span 4;
        }

        .collage-item-3 {
          grid-column: span 3;
        }

        /* Row 2: 3 cols (Compact) + 4 cols (Med) + 5 cols (Wide) */
        .collage-item-4 {
          grid-column: span 3;
        }

        .collage-item-5 {
          grid-column: span 4;
        }

        .collage-item-6 {
          grid-column: span 5;
        }

        .collage-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .collage-item.hovered {
          transform: translateY(-5px);
          border-color: rgba(234, 88, 12, 0.35);
          box-shadow: 0 20px 40px -8px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(234, 88, 12, 0.2);
          z-index: 2;
        }

        .collage-item.hovered .collage-card-img {
          transform: scale(1.035);
        }

        .collage-item.dimmed {
          opacity: 0.76;
        }

        /* Lightbox Modal (Directly on body) */
        .ref-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 15, 29, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          margin: 0;
          box-sizing: border-box;
          animation: modalFadeIn 0.2s ease;
        }

        .ref-modal-dialog {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: modalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000000;
        }

        .ref-modal-img {
          max-width: 88vw;
          max-height: 80vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .ref-modal-counter {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 14px;
          letter-spacing: 0.05em;
        }

        .ref-modal-close {
          position: fixed;
          top: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000001;
          transition: all 0.2s ease;
        }

        .ref-modal-close:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.06);
        }

        .ref-modal-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000001;
          transition: all 0.2s ease;
        }

        .ref-modal-arrow:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.08);
        }

        .ref-modal-arrow.prev {
          left: 24px;
        }

        .ref-modal-arrow.next {
          right: 24px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Tablet & Mobile Fallbacks (Simple, non-messy) */
        @media (max-width: 900px) {
          .collage-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: unset;
            gap: 16px;
          }
          .collage-item-1,
          .collage-item-2,
          .collage-item-3,
          .collage-item-4,
          .collage-item-5,
          .collage-item-6 {
            grid-column: span 1 !important;
            aspect-ratio: 4 / 3;
          }
        }

        @media (max-width: 580px) {
          .collage-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .collage-item {
            aspect-ratio: 4 / 3;
          }
          .ref-modal-close {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
          .ref-modal-img {
            max-width: 92vw;
            max-height: 70vh;
          }
        }
      `}</style>
    </section>
  );
}
