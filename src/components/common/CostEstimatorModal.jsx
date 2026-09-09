import React, { useState } from 'react';
import { X, Calculator, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function CostEstimatorModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('consultation'); // 'consultation' | 'estimator'
  
  // Estimator state
  const [sqFt, setSqFt] = useState(4500);
  const [packageTier, setPackageTier] = useState('luxury'); // 'premium' | 'luxury' | 'ultra'
  const [projectCategory, setProjectCategory] = useState('Villa');

  // Consultation form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    plotSize: '',
    projectType: 'Villa',
    estimatedBudget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Rate calculator mapping per sq. ft.
  const rates = {
    premium: { base: 2650, label: "Premium Architectural (₹2,650 / sq.ft)" },
    luxury: { base: 3600, label: "Luxury Signature (₹3,600 / sq.ft)" },
    ultra: { base: 4900, label: "Ultra Bespoke Estate (₹4,900 / sq.ft)" }
  };

  const estimatedCost = Math.round((sqFt * rates[packageTier].base) / 100000); // In Lakhs

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-[#1C1C1E]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-white w-full max-w-3xl rounded-none shadow-2xl overflow-hidden border border-[#E8E8E8] relative my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#58585A] hover:text-[#ED1C24] hover:bg-[#F5F5F5] transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#1C1C1E] text-white p-6 md:p-8 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              RAYDAN CONSTRUCTIONS
            </span>
          </div>
          <h3 id="modal-title" className="font-heading font-extrabold text-2xl md:text-3xl text-white">
            LET'S BUILD YOUR DREAM HOME<span className="text-[#ED1C24]">.</span>
          </h3>
          <p className="text-[#A0A0A5] text-sm mt-2 max-w-xl">
            Tell us about your vision, your site and your requirements. Let's explore what we can build together.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex gap-4 mt-6 border-b border-white/15 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('consultation')}
              className={`pb-3 transition-colors uppercase tracking-wider relative ${
                activeTab === 'consultation'
                  ? 'text-white border-b-2 border-[#ED1C24]'
                  : 'text-[#A0A0A5] hover:text-white'
              }`}
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => setActiveTab('estimator')}
              className={`pb-3 transition-colors uppercase tracking-wider flex items-center gap-1.5 relative ${
                activeTab === 'estimator'
                  ? 'text-white border-b-2 border-[#ED1C24]'
                  : 'text-[#A0A0A5] hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#ED1C24]" />
              Instant Cost Estimator
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {activeTab === 'consultation' ? (
            isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#ED1C24] mx-auto" />
                <h4 className="font-heading font-bold text-2xl text-[#1C1C1E]">
                  Consultation Request Received
                </h4>
                <p className="text-[#707070] text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1C1C1E]">{formData.name}</span>. Our Senior Architectural Consultant will review your requirements for {formData.city} and connect with you within 24 hours.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                  >
                    CLOSE WINDOW
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Reddy"
                      className={`w-full px-4 py-3 bg-[#F5F5F5] border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all ${
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
                      className={`w-full px-4 py-3 bg-[#F5F5F5] border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all ${
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
                      placeholder="e.g. vikram@example.com"
                      className={`w-full px-4 py-3 bg-[#F5F5F5] border text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-[#E8E8E8]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad"
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Plot Size */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                      Plot Size (Sq. Yds. / Sq. Ft.)
                    </label>
                    <input
                      type="text"
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      placeholder="e.g. 600 Sq. Yds."
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all"
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
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all"
                    >
                      <option value="Independent House">Independent House</option>
                      <option value="Villa">Villa</option>
                      <option value="Luxury Home">Luxury Home</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all"
                  >
                    <option value="">Select Range</option>
                    <option value="₹1.5 Cr – ₹2.5 Cr">₹1.5 Cr – ₹2.5 Cr</option>
                    <option value="₹2.5 Cr – ₹4.0 Cr">₹2.5 Cr – ₹4.0 Cr</option>
                    <option value="₹4.0 Cr – ₹7.0 Cr">₹4.0 Cr – ₹7.0 Cr</option>
                    <option value="₹7.0 Cr+">₹7.0 Cr+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-1.5">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, specific floor count, architectural style preference, or handover timeline..."
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E8E8E8] text-sm text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#707070]">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full" />
                    <span>Free architectural consultation • No obligation</span>
                  </div>
                  <Button type="submit" variant="primary" size="md">
                    SUBMIT REQUEST
                  </Button>
                </div>
              </form>
            )
          ) : (
            /* Cost Estimator Interactive Tool */
            <div className="space-y-6">
              <div className="bg-[#F5F5F5] p-6 border border-[#E8E8E8]">
                <h4 className="font-heading font-bold text-lg text-[#1C1C1E] mb-4 flex items-center justify-between">
                  <span>Project Parameter Configuration</span>
                  <span className="text-xs font-mono font-normal text-[#58585A] uppercase tracking-wider">
                    Interactive Calculator
                  </span>
                </h4>

                {/* Built-up area slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#58585A]">
                      Built-Up Area: <strong className="text-[#1C1C1E] text-base">{sqFt.toLocaleString()} Sq. Ft.</strong>
                    </span>
                    <span className="text-xs text-[#707070] font-mono">
                      (Approx. {Math.round(sqFt / 9)} Sq. Yds.)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="15000"
                    step="250"
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className="w-full accent-[#ED1C24] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#707070] mt-1">
                    <span>2,000 Sq. Ft.</span>
                    <span>8,000 Sq. Ft.</span>
                    <span>15,000+ Sq. Ft.</span>
                  </div>
                </div>

                {/* Specification tier */}
                <div className="mb-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#58585A] mb-2">
                    Finishing Specification Tier
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(rates).map(([key, info]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPackageTier(key)}
                        className={`p-3 text-left border transition-all ${
                          packageTier === key
                            ? 'border-[#ED1C24] bg-white shadow-sm ring-1 ring-[#ED1C24]'
                            : 'border-[#E8E8E8] bg-white/60 hover:bg-white'
                        }`}
                      >
                        <div className="text-xs font-bold uppercase text-[#1C1C1E]">{key}</div>
                        <div className="text-xs text-[#ED1C24] font-semibold mt-1">₹{info.base} / sq.ft</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Calculation Result Card */}
              <div className="p-6 bg-[#1C1C1E] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED1C24] mb-1">
                    Estimated Construction Budget
                  </div>
                  <div className="font-heading font-extrabold text-3xl md:text-4xl text-white flex items-baseline gap-2">
                    <span>₹{estimatedCost} Lakhs</span>
                    <span className="text-xs font-normal text-[#A0A0A5]">
                      (₹{(estimatedCost / 100).toFixed(2)} Cr approx.)
                    </span>
                  </div>
                  <p className="text-xs text-[#A0A0A5] mt-1">
                    Includes turnkey architectural design, civil superstructure, high-spec MEP, and finishes.
                  </p>
                </div>

                <Button
                  variant="primary"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      plotSize: `${sqFt} Sq. Ft. built-up`,
                      estimatedBudget: `₹${(estimatedCost / 100).toFixed(2)} Cr`
                    }));
                    setActiveTab('consultation');
                  }}
                >
                  DISCUSS THIS ESTIMATE →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
