// ── Clinic configuration (single source of truth — reusable per client) ──

// IMPORTANT: WhatsApp number in international format WITHOUT '+' or spaces.
// Example for India: 91 followed by the 10-digit number.
export const CLINIC = {
  name: 'DR Jaishree.s.Clinic',
  tagline: 'Move better. Live pain-free.',
  phone: '+91 9326383822',
  phoneRaw: '919326383822', // tel: + wa.me
  whatsappNumber: '919326383822',
  email: 'drjaishree@gmail.com',
  address: 'plot 13A,satyakunj society,sector-8, kalamboli,panvel, Maharashtra 410218',
  hours: 'Mon–Sat · 8:00 AM – 8:00 PM',
}

// Build a real, working WhatsApp deep link.
export const waLink = (message = 'Hello! I want to book a physiotherapy appointment.') =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = () => `tel:+${CLINIC.phoneRaw}`
