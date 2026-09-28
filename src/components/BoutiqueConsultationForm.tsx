import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

interface ConsultationFormProps {
  initialService?: string;
}

export const BoutiqueConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = 'Unstitched Suit',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Madhav Boutique,\n\nI would like to submit an enquiry:\n• Name: ${formData.name || 'Visitor'}\n• Phone: ${formData.phone || 'N/A'}\n• Interested in: ${formData.service}\n• Preferred Date: ${formData.date || 'Flexible'}\n• Note: ${formData.message || 'I would like to discuss collections and stitching.'}`;
    window.open(`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8F1DC]/80 backdrop-blur-[2px] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF5] rounded-3xl p-8 sm:p-12 border border-[#123D2A]/10 shadow-lg relative overflow-hidden">
          {/* Subtle top gold accent hairline */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123D2A] via-[#C9A24A] to-[#123D2A]" />

          {/* Form Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
                PERSONAL STYLING & APPOINTMENT
              </span>
              <span className="w-5 h-[1px] bg-[#C9A24A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#123D2A] font-medium leading-tight mb-2">
              Let’s Create Your Perfect Look
            </h2>
            <p className="text-sm text-[#1E241F]/70 font-light">
              Reach out for custom stitching inquiries, bulk fabric sourcing, or to schedule a one-on-one boutique consultation in Prem Nagar.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#123D2A] text-[#C9A24A] flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-2">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-[#1E241F]/80 max-w-md mx-auto mb-6 font-light">
                We have received your enquiry. Our boutique styling team in Roorkee will connect with you via phone or WhatsApp shortly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-xs font-semibold px-6 py-3 rounded-sm flex items-center gap-2 shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] fill-current" />
                  <span>Send Directly on WhatsApp (8074462177)</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#123D2A] px-4 py-2 hover:underline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                    Your Full Name <span className="text-[#A52A3A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] placeholder-[#1E241F]/40 focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                    Phone / WhatsApp Number <span className="text-[#A52A3A]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] placeholder-[#1E241F]/40 focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                    Email Address <span className="text-xs text-[#1E241F]/50 lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] placeholder-[#1E241F]/40 focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all"
                  />
                </div>

                {/* What are you looking for? */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all"
                  >
                    <option value="Unstitched Suit">Unstitched Suit Collection</option>
                    <option value="Premium Fabric">Premium Fabric Yardage (Silk/Cotton/Linen)</option>
                    <option value="Custom Stitching">Custom Stitching & Tailoring</option>
                    <option value="Festive Collection">Festive & Wedding Collection</option>
                    <option value="Bridal Trousseau">Bridal & Occasion Trousseau</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                  Preferred Visit or Consultation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-2">
                  Your Message or Outfit Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details like preferred colors, occasion date, or specific neckline styles you like..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F1DC]/50 border border-[#123D2A]/15 text-sm text-[#1E241F] placeholder-[#1E241F]/40 focus:outline-hidden focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-sm font-semibold px-9 py-3.5 rounded-sm transition-all shadow-md flex items-center justify-center gap-2 border border-[#C9A24A]/40"
                >
                  <Send className="w-4 h-4 text-[#C9A24A]" />
                  <span>Send Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="text-xs font-semibold text-[#123D2A] hover:text-[#C9A24A] flex items-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] fill-current" />
                  <span>Or message us immediately on WhatsApp (8074462177)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
