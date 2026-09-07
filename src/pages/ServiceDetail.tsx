import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import { usePageTitle } from '../hooks/usePageTitle';
import services from '../data/services';
import { useEffect } from 'react';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

function ServiceJsonLd({ service }: { service: typeof services[0] }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'ConstructionBusiness',
      name: 'WSH Bygg',
      telephone: '070-652 99 36',
      email: 'wshbygg@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Alfta',
        addressRegion: 'Hälsingland',
        addressCountry: 'SE',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Alfta' },
      { '@type': 'AdministrativeArea', name: 'Ovanåkers kommun' },
      { '@type': 'AdministrativeArea', name: 'Edsbyn' },
      { '@type': 'AdministrativeArea', name: 'Bollnäs' },
      { '@type': 'AdministrativeArea', name: 'Hälsingland' },
    ],
    url: `https://wshbygg.se/tjanster/${service.slug}`,
    image: `https://wshbygg.se${service.heroImage}`,
  };

  const schemas: object[] = [serviceSchema];

  if (service.faq && service.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://wshbygg.se/' },
      { '@type': 'ListItem', position: 2, name: 'Tjänster', item: 'https://wshbygg.se/tjanster' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://wshbygg.se/tjanster/${service.slug}` },
    ],
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  const seoTitle = service?.seoTitle || `${service?.title} i Alfta, Edsbyn, Bollnäs & Hälsingland | WSH Bygg`;
  const seoDesc = service?.seoDescription || `${service?.shortDescription} WSH Bygg utför ${service?.title?.toLowerCase()} i Alfta, Edsbyn, Bollnäs och hela Hälsingland. Begär kostnadsfri offert!`;

  usePageTitle(
    service ? seoTitle : 'Tjänst hittades inte | WSH Bygg',
    service ? seoDesc : undefined,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!service) return <Navigate to="/tjanster" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>
      <ServiceJsonLd service={service} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: `url(${service.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '140px',
        paddingBottom: '60px',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.82), rgba(15,23,42,0.65))' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <ScrollReveal animation="fade-up">
            <nav aria-label="Brödsmulor" style={{ marginBottom: '24px' }}>
              <ol style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.88rem',
              }}>
                <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Hem</Link></li>
                <li><ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.4)' }} /></li>
                <li><Link to="/tjanster" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Tjänster</Link></li>
                <li><ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.4)' }} /></li>
                <li style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{service.title}</li>
              </ol>
            </nav>
          </ScrollReveal>

          <ScrollReveal animation="blur-in">
            <h1 style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              margin: '0 0 20px 0',
              maxWidth: '700px',
            }}>
              {service.title} i Hälsingland
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{
              color: 'rgba(255,255,255,0.88)',
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 0 32px 0',
            }}>
              {service.heroText}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={250}>
            <Link
              to="/offert"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--color-primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '16px 32px',
                borderRadius: 'var(--border-radius-pill)',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(234,88,12,0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Begär kostnadsfri offert <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {service.highlights && service.highlights.length > 0 && (
        <section style={{ padding: '60px 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={container}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}>
              {service.highlights.map((h, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: '20px 24px',
                    background: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    transition: 'box-shadow 0.25s ease',
                  }}>
                    <CheckCircle size={22} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.96rem',
                      fontWeight: 500,
                      color: 'var(--color-text-dark)',
                      lineHeight: 1.55,
                    }}>
                      {h}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DETAILED CONTENT */}
      <section style={{ padding: '80px 0' }}>
        <div style={container}>
          <div className="service-detail-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'start',
          }}>
            <ScrollReveal animation="fade-right">
              <div>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  {service.sections?.[0]?.heading || `Om vår ${service.title.toLowerCase()}tjänst`}
                </h2>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  margin: '0 0 28px 0',
                  whiteSpace: 'pre-line',
                }}>
                  {service.detailedDescription}
                </p>

                {service.sections?.[0]?.bullets && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {service.sections[0].bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <CheckCircle size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                        <span style={{
                          fontFamily: 'var(--font-family)',
                          fontSize: '0.95rem',
                          color: 'var(--color-text-dark)',
                          lineHeight: 1.6,
                        }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
                border: '3px solid #ffffff',
                aspectRatio: '4/3',
                background: '#0f172a',
              }}>
                <img
                  src={service.image}
                  alt={`${service.title} - WSH Bygg Alfta Hälsingland`}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS */}
      {service.sections && service.sections.length > 1 && (
        <section style={{ padding: '0 0 80px 0' }}>
          <div style={container}>
            {service.sections.slice(1).map((sec, i) => (
              <ScrollReveal key={i} animation="fade-up">
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  padding: 'clamp(28px, 4vw, 48px)',
                  border: '1px solid #e2e8f0',
                  marginBottom: '24px',
                }}>
                  {sec.heading && (
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                      margin: '0 0 14px 0',
                      letterSpacing: '-0.01em',
                    }}>
                      {sec.heading}
                    </h3>
                  )}
                  {sec.text && (
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      {sec.text}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section style={{ padding: '80px 0', background: '#0f172a' }}>
          <div style={container}>
            <FAQAccordion
              items={service.faq}
              title={`Vanliga frågor om ${service.title.toLowerCase()}`}
              subtitle={`Här besvarar vi de vanligaste frågorna om ${service.title.toLowerCase()} i Alfta, Edsbyn, Bollnäs och Hälsingland.`}
              buttonText="Ställ en fråga"
              buttonLink="/kontakt"
              dark
            />
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div style={container}>
          <ScrollReveal animation="fade-up">
            <h2 style={{
              color: 'var(--color-text-dark)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              margin: '0 0 40px 0',
            }}>
              Utforska fler tjänster
            </h2>
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {otherServices.map((s, i) => (
              <ScrollReveal key={s.slug} animation="fade-up" delay={i * 60}>
                <Link
                  to={`/tjanster/${s.slug}`}
                  style={{
                    display: 'block',
                    background: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                >
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#0f172a' }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    />
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      margin: '0 0 8px 0',
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {s.shortDescription.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .service-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
