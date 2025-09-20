'use client';
import CTAButton from './CTAButton';

const phone = process.env.NEXT_PUBLIC_PHONE;

export default function StickyBar() {
  return (
    <div aria-label="Sticky actions" style={barStyle}>
  <CTAButton href="/book" placement="sticky">Book a call</CTAButton>
      {phone ? <a href={`tel:${phone}`} aria-label="Call us" style={phoneBtnStyle}>📞</a> : null}
    </div>
  );
}

const barStyle: React.CSSProperties = {
  position: 'fixed', bottom: 0, left: 0, right: 0,
  display: 'flex', gap: '12px', alignItems: 'center',
  justifyContent: 'space-between', padding: '10px 14px',
  background: '#111', zIndex: 60,
  boxShadow: '0 -6px 16px rgba(0,0,0,.2)'
};

const phoneBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 12px',
  borderRadius: 8,
  background: '#222',
  color: 'white',
  textDecoration: 'none'
};
