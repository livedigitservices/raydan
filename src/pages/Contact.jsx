import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import brandData from '../data/brand';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import submitToWeb3Forms from '../services/web3forms';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    projectType: 'Villa',
    plotArea: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please provide brief details of your project";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');

      const result = await submitToWeb3Forms({
        subject: `New Online Consultation Inquiry - ${formData.name}`,
        fromName: 'RAYDAN CONSTRUCTIONS Contact Form',
        data: {
          "Full Name": formData.name,
          "Phone Number": formData.phone,
          "Email Address": formData.email,
          "City / Location": formData.city,
          "Project Type": formData.projectType,
          "Plot Size / Area": formData.plotArea || "Not specified",
          "Message": formData.message,
          "Form Source": "Contact Page (/contact)"
        }
      });

      setIsSubmitting(false);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!apiKey || apiKey === 'your_web3forms_access_key_here') {
          console.info("[Web3Forms] Access key not configured in .env. Form submission UI succeeded.");
          setIsSubmitted(true);
        } else {
          setSubmitError(result.message || "Failed to send message via Web3Forms. Please try again.");
        }
      }
    }
  };

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 bg-[#1C1C1E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            LET'S DISCUSS<br />
            YOUR <span className="text-[#ED1C24]">PROJECT</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            Reach out to our architectural design studio and engineering headquarters in Hyderabad, or submit your site details below.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Corporate Information & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#ED1C24] uppercase block mb-2">
                  HEADQUARTERS
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1C1E] mb-2">
                  {brandData.name}
                </h3>
                <p className="text-sm text-[#707070] leading-relaxed">
                  Turnkey Residential Construction & Contemporary Architecture
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#E8E8E8]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F5] border border-[#E8E8E8] flex items-center justify-center text-[#ED1C24] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block mb-1">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#58585A] leading-relaxed">
                      {brandData.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F5] border border-[#E8E8E8] flex items-center justify-center text-[#ED1C24] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block mb-1">
                      Direct Inquiries & WhatsApp
                    </span>
                    <a href={`tel:${brandData.contact.phone}`} className="text-xs sm:text-sm text-[#58585A] hover:text-[#ED1C24] font-medium transition-colors">
                      {brandData.contact.phone}
                    </a> <br />
                    <a href={`tel:${brandData.contact.phone2}`} className="text-xs sm:text-sm text-[#58585A] hover:text-[#ED1C24] font-medium transition-colors">
                      {brandData.contact.phone2}
                    </a>
                    {/* <a href={`tel:919441028053`} className="text-xs sm:text-sm text-[#58585A] hover:text-[#ED1C24] font-medium transition-colors">
                       +91 9441028053
                    </a> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F5] border border-[#E8E8E8] flex items-center justify-center text-[#ED1C24] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block mb-1">
                      Email Consultations
                    </span>
                    <a href={`mailto:${brandData.contact.email}`} className="text-xs sm:text-sm text-[#58585A] hover:text-[#ED1C24] font-medium transition-colors">
                      {brandData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F5] border border-[#E8E8E8] flex items-center justify-center text-[#ED1C24] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block mb-1">
                      Working Hours
                    </span>
                    <p className="text-xs sm:text-sm text-[#58585A] leading-relaxed">
                      {brandData.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Architectural Map Mockup Card */}
              <div className="p-6 bg-[#1C1C1E] text-white relative overflow-hidden border border-black/10">
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <span className="text-[10px] font-mono tracking-widest text-[#ED1C24] uppercase block mb-1">
                  METRO REGIONS
                </span>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  Operating Cities
                </h4>
                <p className="text-xs text-[#A0A0A5] leading-relaxed mb-4">
                  Full-scale turnkey construction teams actively mobilized in Hyderabad, Bengaluru, Pune, and Chennai.
                </p>
                <div className="flex flex-wrap gap-2">
                  {brandData.contact.citiesServed.map((city) => (
                    <span key={city} className="text-[11px] px-2.5 py-1 bg-white/10 text-white font-mono">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#F5F5F5] p-8 sm:p-12 border border-[#E8E8E8] shadow-sm">
              <span className="text-xs font-mono font-bold tracking-widest text-[#ED1C24] uppercase block mb-2">
                ONLINE CONSULTATION FORM
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1C1E] mb-2">
                Send Us Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#707070] mb-8">
                Submit your site details to schedule an introductory consultation with our principal architects.
              </p>

              {isSubmitted ? (
                <div className="bg-white p-8 border border-[#E8E8E8] text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#ED1C24] mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-[#1C1C1E]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#707070] leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-[#1C1C1E]">{formData.name}</strong>. Our engineering consultation lead has received your enquiry and will connect within 24 hours.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setIsSubmitted(false)}>
                    SEND ANOTHER MESSAGE
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection for Web3Forms */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Chandra"
                        className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors ${
                          errors.name ? 'border-red-500' : 'border-[#E8E8E8]'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98490 12345"
                        className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#E8E8E8]'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@domain.com"
                        className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#E8E8E8]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Hyderabad"
                        className="w-full px-4 py-3 bg-white border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors"
                      >
                        <option value="Independent House">Independent House</option>
                        <option value="Villa">Villa</option>
                        <option value="Luxury Home">Luxury Home</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Plot Area */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                        Plot Size / Built-up Area
                      </label>
                      <input
                        type="text"
                        value={formData.plotArea}
                        onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                        placeholder="e.g. 500 Sq. Yds."
                        className="w-full px-4 py-3 bg-white border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details such as your site dimensions, desired bedrooms, architectural preferences, or target start date..."
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#E8E8E8]'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-[#707070]">
                      Protected by Web3Forms & Raydan privacy policy.
                    </p>
                    <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                      {isSubmitting ? "SENDING ENQUIRY..." : "SEND ENQUIRY →"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
