import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import brandData from '../../data/brand';

export default function Footer({ onOpenConsultation }) {
  const currentYear = new Date().getFullYear() || 2026;

  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Why Raydan', path: '/why-raydan' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Architectural Design', path: '/services#architectural-design' },
    { name: 'Home Construction', path: '/services#home-construction' },
    { name: 'Turnkey Construction', path: '/services#turnkey-construction' },
    { name: 'Interior Design', path: '/services#interior-design' },
    { name: 'Renovation & Remodeling', path: '/services#renovation-remodeling' },
    { name: 'Landscape & Outdoor', path: '/services#landscape-outdoor' }
  ];

  return (
    <footer className="bg-[#1C1C1E] text-white pt-16 md:pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo variant="light" size="large" />
            <p className="text-[#A0A0A5] text-sm max-w-sm leading-relaxed mt-4">
              {brandData.tagline}
            </p>
            <p className="text-xs text-[#707070] leading-relaxed max-w-sm">
              Creating residences of distinction through architectural rigor, advanced structural engineering, and uncompromising craftsmanship.
            </p>
            
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED1C24] hover:text-white transition-colors"
              >
                <span>REQUEST ARCHITECTURAL CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A0A0A5]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A0A0A5]">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-xs sm:text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
              Contact
            </h3>
            <div className="space-y-3 text-xs text-[#A0A0A5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ED1C24] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{brandData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <a href={`tel:${brandData.contact.phone}`} className="hover:text-white transition-colors">
                  {brandData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <a href={`mailto:${brandData.contact.email}`} className="hover:text-white transition-colors">
                  {brandData.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white mb-2">
                Social
              </h4>
              <div className="flex flex-wrap gap-3">
                {brandData.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#A0A0A5] hover:text-[#ED1C24] transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#707070] gap-4">
          <p>© {currentYear} RAYDAN CONSTRUCTIONS. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-[#ED1C24]">•</span>
            <span>Hyderabad • Bengaluru • Pune • Chennai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
