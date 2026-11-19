import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ShieldAlert, CheckCircle2, ChevronDown, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GlassCard } from '../components/GlassCard';
import { Reveal } from '../components/Reveal';

const OFFICES = [
  {
    city: 'New York — Global HQ',
    address: '425 Hudson River Plaza, Suite 2800, New York, NY 10014',
    hours: '24/7 Digital & Wire Operations',
    phone: '+1 (212) 555-0184',
  },
  {
    city: 'Frankfurt — EU Corridor Desk',
    address: 'Taunusanlage 18, 60325 Frankfurt am Main, Germany',
    hours: 'Mon–Sat · 07:00–22:00 CET',
    phone: '+49 69 5550 1920',
  },
  {
    city: 'London — UK & FX Settlement',
    address: '22 Bishopsgate, Level 31, London EC2N 4BQ, UK',
    hours: 'Mon–Sat · 07:00–22:00 GMT',
    phone: '+44 20 7946 0842',
  },
  {
    city: 'Miami — Americas & LatAm Desk',
    address: '801 Brickell Avenue, Floor 19, Miami, FL 33131',
    hours: '24/7 Bilingual ES / PT / EN Desk',
    phone: '+1 (305) 555-0197',
  },
];

const FAQS = [
  {
    q: 'Can international residents or global companies open a BlueOcean online account?',
    a: 'Yes. BlueOcean supports U.S. residents, verified international professionals, and multi-entity operating companies across 42+ approved corridors with digital KYC verification.',
  },
  {
    q: 'How fast do international wire transfers and multi-currency payouts settle?',
    a: 'Domestic Fedwire and SEPA Instant settle within seconds to same-day. Cross-border SWIFT GPI transfers across 38 currencies include real-time tracking inside the Customer Portal.',
  },
  {
    q: 'How do I report a lost Titanium card or suspected unauthorized activity?',
    a: 'Freeze your card immediately in one tap inside the Customer Portal, or contact our 24/7 Fraud Operations Desk directly at +1 (800) 555-0199 for instant virtual replacement.',
  },
  {
    q: 'Are deposits protected by FDIC insurance?',
    a: 'Yes. Standard FDIC coverage protects up to $250,000 per depositor directly, with extended pass-through sweep coverage up to $5,000,000 across our U.S. program bank network.',
  },
];

export const ContactPage: React.FC = () => {
  const { pushToast, navigate } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Personal & International Accounts');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError('Please include a brief description of how we can assist you.');
      return;
    }
    setError('');
    const ref = `BO-SUP-${Math.floor(100000 + Math.random() * 899999)}`;
    setTicketId(ref);
    pushToast(`Support inquiry received (${ref})`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <GlassCard className="p-6 sm:p-8 space-y-3.5">
          <p className="text-xs sm:text-sm font-medium text-[#0A5C99] dark:text-[#78C7F6]">
            Contact BlueOcean · 24/7 Global Customer Desk
          </p>
          <h1
            className="font-display font-bold tracking-tight text-[#081A33] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)', textWrap: 'balance' }}
          >
            Direct human specialists across every time zone and language.
          </h1>
          <p className="text-base text-[#3D536E] dark:text-[#B9CBE0] leading-relaxed">
            Reach our banking, international wire, mortgage, or 24/7 security teams in English, German, Russian, Dutch, Spanish, or Portuguese—with zero automated phone mazes.
          </p>
        </GlassCard>
      </motion.section>

      {/* Direct Channels + Secure Message Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Channels */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard className="p-6 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/10 dark:bg-white/10 flex items-center justify-center text-[#0A5C99] dark:text-[#78C7F6] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                  24/7 Global Customer Line
                </h2>
                <p className="font-mono tabular-nums text-sm text-[#0A5C99] dark:text-[#78C7F6] mt-0.5">
                  +1 (800) 555-0184 · Intl +1 (212) 555-0184
                </p>
                <p className="text-xs text-[#5C6F87] dark:text-[#96AFCB] mt-1">
                  Average human answer time under 45 seconds.
                </p>
              </div>
            </div>

            <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0A5C99]/10 dark:bg-white/10 flex items-center justify-center text-[#0A5C99] dark:text-[#78C7F6] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                  Direct Banking Desks
                </h2>
                <p className="font-mono text-xs text-[#2B4361] dark:text-[#C5D6E8] mt-1 space-y-1">
                  <span className="block">support@blueocean.bank</span>
                  <span className="block">treasury@blueocean.bank</span>
                  <span className="block">security@blueocean.bank</span>
                </p>
              </div>
            </div>

            <div className="h-px bg-[#0A2342]/10 dark:bg-white/10" />

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#921B2D]/12 dark:bg-[#921B2D]/25 flex items-center justify-center text-[#921B2D] dark:text-[#F06D80] shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-base font-semibold text-[#0A1D37] dark:text-white">
                  Urgent Card Freeze &amp; Fraud Ops
                </h2>
                <p className="text-xs text-[#4A607A] dark:text-[#A9BED6] mt-1 leading-relaxed">
                  Instantly freeze any Titanium, Oceanic, or Crimson card inside the Customer Portal or dial our emergency security line.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('portal')}
                  className="mt-2.5 text-xs font-semibold text-[#921B2D] dark:text-[#F06D80] hover:underline cursor-pointer"
                >
                  Open Customer Portal Security →
                </button>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Encrypted Message Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white mb-1">
              Send a Secure Message
            </h2>
            <p className="text-sm text-[#4A607A] dark:text-[#A9BED6] mb-6">
              Encrypted delivery directly to the appropriate BlueOcean banking desk.
            </p>

            {ticketId ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A5C99]/12 text-[#0A5C99] dark:text-[#78C7F6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0A1D37] dark:text-white">
                  Message Logged Securely
                </h3>
                <p className="text-sm text-[#435975] dark:text-[#B8CAE0] max-w-md mx-auto">
                  A BlueOcean specialist in {department} will respond to <strong>{email}</strong> within two business hours.
                </p>
                <div className="inline-block px-4 py-2.5 rounded-xl bg-[#0A2342]/6 dark:bg-white/8 font-mono text-sm font-semibold text-[#0A1D37] dark:text-white">
                  Ticket: {ticketId}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setTicketId(null);
                      setMessage('');
                    }}
                    className="px-5 h-10 rounded-xl bg-[#0A5C99] text-white text-xs font-medium cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    Banking Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  >
                    <option>Personal &amp; International Accounts</option>
                    <option>Business Treasury &amp; Multi-Currency FX</option>
                    <option>Titanium, Oceanic &amp; Crimson Cards</option>
                    <option>Mortgages &amp; Lending Desk</option>
                    <option>Private Wealth Advisory</option>
                    <option>Security, FDIC &amp; Fraud Protection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3C5370] dark:text-[#BDD0E4] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how our international banking team can help..."
                    className="w-full p-3.5 rounded-xl bg-white/80 dark:bg-[#061830]/70 border border-[#0A2342]/14 dark:border-white/15 text-sm text-[#0A1D37] dark:text-white focus:outline-none focus:border-[#0A5C99]"
                  />
                </div>

                {error && (
                  <p className="text-xs font-medium text-[#921B2D] dark:text-[#F06D80]">{error}</p>
                )}

                <button
                  type="submit"
                  className="px-6 h-12 rounded-xl bg-[#921B2D] hover:bg-[#A82236] text-white text-sm font-medium transition-colors shadow-lg cursor-pointer"
                >
                  Send Encrypted Inquiry
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </section>

      {/* Regional Global Offices */}
      <Reveal>
        <section className="space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#081A33] dark:text-white">
            International Offices &amp; Settlement Desks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICES.map((office) => (
              <GlassCard key={office.city} className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[#0A5C99] dark:text-[#78C7F6]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <h3 className="font-display text-sm font-semibold text-[#0A1D37] dark:text-white">
                    {office.city}
                  </h3>
                </div>
                <p className="text-xs text-[#4A607A] dark:text-[#A9BED6] leading-relaxed">
                  {office.address}
                </p>
                <div className="pt-1 text-xs font-mono text-[#0A1D37] dark:text-white">
                  {office.phone}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#5C6F87] dark:text-[#96AFCB]">
                  <Clock className="w-3 h-3 shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Interactive FAQ Accordion */}
      <Reveal>
        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="font-display text-2xl font-semibold text-[#0A1D37] dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-[#0A2342]/10 dark:divide-white/10">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="py-3.5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#0A1D37] dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5C6F87] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2.5 text-sm text-[#435A75] dark:text-[#B4C8DE] leading-relaxed pr-6">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );
};
