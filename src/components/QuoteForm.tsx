import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.background = '#ffffff';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.15)';
}

function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.background = '#fafafa';
  e.currentTarget.style.boxShadow = 'none';
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function QuoteForm({
  title = 'Fyll i dina uppgifter',
  subtitle,
  onSuccess,
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: service.trim() || undefined,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Något gick fel. Försök igen.');
      }

      const data = await res.json();
      if (!data?.success) {
        throw new Error(data?.error || 'Något gick fel. Försök igen.');
      }

      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Något gick fel. Försök igen.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setMessage('');
    setSubmitted(false);
    setError('');
  };

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: 'clamp(24px, 4vw, 40px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#16a34a',
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h3
            style={{
              color: 'var(--color-text-dark)',
              fontWeight: 800,
              fontSize: '1.4rem',
              margin: '0 0 10px 0',
            }}
          >
            Tack för din förfrågan{name ? `, ${name}` : ''}!
          </h3>
          <p
            style={{
              color: 'var(--color-gray-600)',
              fontSize: '1rem',
              lineHeight: 1.6,
              maxWidth: '440px',
              margin: '0 auto 24px auto',
            }}
          >
            Vi har tagit emot ditt ärende och återkommer med ett specificerat prisförslag eller kontaktar dig inom 24 timmar.
          </p>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '12px 24px',
              background: 'transparent',
              border: '2px solid var(--color-primary)',
              borderRadius: '10px',
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            Skicka en ny förfrågan
          </button>
        </div>
      ) : (
        <>
          {title && (
            <h2
              style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: '1.4rem',
                margin: '0 0 8px 0',
              }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              style={{
                color: 'var(--color-gray-600)',
                fontSize: '0.95rem',
                margin: '0 0 24px 0',
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </p>
          )}
          {!subtitle && <div style={{ height: '16px' }} />}

          {error && (
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '16px',
                color: '#dc2626',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
              }}
            >
              Namn *
            </label>
            <input
              type="text"
              placeholder="Ditt för- och efternamn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              onFocus={focusInput}
              onBlur={blurInput}
              required
              disabled={loading}
            />

            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
              }}
            >
              E-postadress *
            </label>
            <input
              type="email"
              placeholder="din.epost@doman.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={focusInput}
              onBlur={blurInput}
              required
              disabled={loading}
            />

            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
              }}
            >
              Telefonnummer *
            </label>
            <input
              type="tel"
              placeholder="07X-XXX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
              onFocus={focusInput}
              onBlur={blurInput}
              required
              disabled={loading}
            />

            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
              }}
            >
              Typ av tjänst
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={focusInput}
              onBlur={blurInput}
              disabled={loading}
            >
              <option value="">Välj tjänst...</option>
              <option value="Nybyggnation">Nybyggnation</option>
              <option value="Renovering">Renovering</option>
              <option value="Tillbyggnad">Tillbyggnad</option>
              <option value="Takbyte">Takbyte</option>
              <option value="Gjutningar & Grund">Gjutningar & Grund</option>
              <option value="Garage">Garage</option>
              <option value="Annat projekt">Annat projekt</option>
            </select>

            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
              }}
            >
              Projektbeskrivning *
            </label>
            <textarea
              rows={5}
              placeholder="Beskriv ditt projekt så detaljerat du kan (t.ex. yta i kvm, adress, önskad starttid)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: 'vertical', marginBottom: '24px' }}
              onFocus={focusInput}
              onBlur={blurInput}
              required
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: loading ? '#9ca3af' : 'var(--color-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                opacity: loading ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = 'var(--color-primary-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> SKICKAR...
                </>
              ) : (
                <>
                  <Send size={18} /> SKICKA OFFERTFÖRFRÅGAN
                </>
              )}
            </button>
          </form>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </>
      )}
    </div>
  );
}
