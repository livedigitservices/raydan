import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, Mail, ArrowRight } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import Button from '../common/Button';
import brandData from '../../data/brand';
import gsap from 'gsap';

export default function MobileMenu({ isOpen, onClose, onOpenConsultation }) {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Why Raydan', path: '/why-raydan' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Animate drawer open with GSAP
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: '0%', duration: 0.45, ease: 'power3.out' }
      );
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, delay: 0.15, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-50 bg-[#1C1C1E] text-white flex flex-col justify-between p-6 md:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <BrandLogo variant="light" size="default" onClick={onClose} />
        <button
          onClick={onClose}
          className="p-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="my-auto py-8 flex flex-col space-y-4">
        {navLinks.map((link, idx) => {
          const isActive = location.pathname === link.path;
          return (
            <div 
              key={link.name} 
              ref={(el) => (linksRef.current[idx] = el)}
            >
              <Link
                to={link.path}
                onClick={onClose}
                className={`font-heading font-extrabold text-2xl sm:text-3xl tracking-tight transition-all duration-300 flex items-center justify-between py-1 group ${
                  isActive ? 'text-[#ED1C24] pl-3 border-l-2 border-[#ED1C24]' : 'text-white hover:text-[#ED1C24]'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ED1C24]" />
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Drawer Footer Actions */}
      <div className="border-t border-white/10 pt-6 space-y-5">
        <Button
          variant="primary"
          size="lg"
          className="w-full justify-center"
          onClick={() => {
            onClose();
            if (onOpenConsultation) onOpenConsultation();
          }}
        >
          START YOUR PROJECT →
        </Button>

        <div className="grid grid-cols-1 gap-2 text-xs text-[#A0A0A5]">
          <a href={`tel:${brandData.contact.phone}`} className="flex items-center gap-2 hover:text-[#ED1C24] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span>{brandData.contact.phone}</span>
          </a>
          <a href={`mailto:${brandData.contact.email}`} className="flex items-center gap-2 hover:text-[#ED1C24] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span>{brandData.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
