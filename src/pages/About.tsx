import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const accentLine: React.CSSProperties = {
  display: 'block',
  width: '60px',
  height: '3px',
  background: 'var(--color-primary)',
  borderRadius: '2px',
  margin: '14px auto 0',
};

const teamMembers = [
  {
    role: 'Ägare & Grundare',
    name: 'Viktor Johannesson',
    photo: '',
  },
];

export default function About() {
  usePageTitle(
    'Om JH Huskvalitet AB | Vår Historia och Vision',
    'Läs om JH Huskvalitet AB. Vi är ditt lokala företag i Uppland med omnejd för mark, bygg och tomtanläggning.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/hero-main.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Om JH Huskvalitet AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', margin: '0 auto', maxWidth: '600px' }}>
                Med passion för kvalitet och hantverk med Uppland som hemmaplan.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '960px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left: Logo */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
              }}>
                <img
                  src={images.about.hero.url}
                  alt={images.about.hero.alt}
                  style={{
                    width: '200px',
                    height: 'auto',
                    maxHeight: '170px',
                    objectFit: 'contain',
                    backgroundColor: 'transparent',
                    padding: '0',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Om JH Huskvalitet AB
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    JH Huskvalitet AB erbjuder byggtjänster med fokus på kvalitet, noggrannhet och hållbara lösningar. Vi hjälper dig från idé till färdigt resultat med trygghet, struktur och yrkesstolthet i varje steg.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Kvalitet, noggrannhet och hållbara lösningar
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Vi utför ett brett utbud av bygg och entreprenadtjänster med utgångspunkt i Uppland. Oavsett om det gäller renovering, tillbyggnad, anläggning eller nybyggnation ser vi till att projektet genomförs smidigt och med högsta standard.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Under ett och samma tak levererar vi helhetslösningar anpassade efter dina behov och önskemål. För oss är inget projekt för litet eller för stort!
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(234, 88, 12, 0.05)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Att få förtroendet att förverkliga våra kunders drömmar och idéer genom personligt engagemang och yrkesstolt hantverk är vad som driver oss varje dag."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Viktor Johannesson, Ägare och Grundare
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>




      {/* ── SECTION D: OWNER PROFILE ──────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '90px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
                letterSpacing: '-0.03em',
                margin: '0 0 12px 0',
              }}>
                Grundare & Ägare
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto',
              }}>
                JH Huskvalitet AB grundades och drivs av Viktor Johannesson med passion för byggkvalitet och personlig service.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            maxWidth: '380px',
            margin: '0 auto',
          }}>
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="slide-up-fade" delay={100}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.07)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  textAlign: 'center',
                }}>
                  <div style={{ padding: '32px 28px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(234, 88, 12, 0.1)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      margin: '0 auto 16px auto',
                    }}>
                      V
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: '1.3rem',
                      margin: '0 0 6px 0',
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        .about-hero-img-wrap:hover .about-hero-img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid > *:first-child {
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
