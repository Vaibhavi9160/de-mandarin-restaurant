import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reservation submission
    setTimeout(() => {
      const randomRef = 'DM-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppConfirm = () => {
    const text = encodeURIComponent(
      `Hello De Mandarin Resto Cafe, I would like to confirm my table reservation request (${bookingRef}).\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nPhone: ${formData.phone}`
    );
    window.open(`https://wa.me/919778699399?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-[#0c0d0e] border-t border-[#1e2026] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
            <span>Table Enquiries & Bookings</span>
            <span className="w-5 h-[1.5px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Reserve Your Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a09b90] max-w-xl mx-auto">
            Planning a highway stopover, birthday celebration, or weekend family dinner? Request your table in advance.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-[#141518] border border-[#23252d] p-6 sm:p-10 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Your Name *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white placeholder-[#68645c] focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="e.g. 097786 99399"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white placeholder-[#68645c] focus:outline-none focus:border-[#c5a059] transition-colors tabular-nums"
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8a857a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors scheme-dark"
                    />
                  </div>
                </div>

                {/* Time & Guests */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#8a857a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      >
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:30">07:30 PM</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="21:30">09:30 PM</option>
                        <option value="22:30">10:30 PM (Late)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="res-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#8a857a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="res-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Guests</option>
                        <option value="3-4">3–4 Guests</option>
                        <option value="5-8">5–8 Guests</option>
                        <option value="9+">9+ Large Group</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="res-message" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                  Special Request or Occasion (Optional)
                </label>
                <textarea
                  id="res-message"
                  rows={3}
                  placeholder="e.g. Highway travel stopover, anniversary dinner, outdoor seating preferred..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#191b20] border border-[#282a33] text-sm text-white placeholder-[#68645c] focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                />
              </div>

              {/* Mandatory Note */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#181a1f] border border-[#262831] text-xs text-[#a09a8e]">
                <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong>Please Note:</strong> Reservation requests are subject to restaurant confirmation. For immediate seating or short-notice highway arrivals, please call directly.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#e4c278] via-[#d4af37] to-[#b38827] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#d4af37]/20 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Request a Reservation'}</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-[#9d978a]">
                  <span>Prefer calling?</span>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="text-[#d4af37] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </form>
          ) : (
            /* Successful Submission View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Request Received
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#a49f94] max-w-md mx-auto mt-2">
                  Your reservation request has been registered under reference code{' '}
                  <span className="font-mono font-bold text-[#d4af37] bg-[#1a1c22] px-2 py-0.5 rounded border border-[#2b2d35]">
                    {bookingRef}
                  </span>.
                </p>
                <p className="text-xs text-[#8c887f] mt-1">
                  Our front desk at De Mandarin Resto Cafe will review table availability and confirm shortly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleWhatsAppConfirm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify via WhatsApp</span>
                </button>

                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#ece7df] bg-[#1c1e23] hover:bg-[#252830] border border-[#2f323c] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#8c887f] hover:text-white underline mt-2 sm:mt-0"
                >
                  Make another request
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
