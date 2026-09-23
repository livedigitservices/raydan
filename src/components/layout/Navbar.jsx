import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // If not homepage, always show solid white navbar for maximum legibility
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Process', path: '/process' },
    { name: 'Why Raydan', path: '/why-raydan' },
    { name: 'Contact', path: '/contact' }
  ];

  // Visual appearance
  const isSolid = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSolid
            ? 'bg-white/95 text-[#242424] backdrop-blur-md border-b border-[#E8E8E8] shadow-sm py-3.5'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0">
            <BrandLogo variant={isSolid ? 'dark' : 'light'} size="default" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && !link.path.includes('#');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#ED1C24]'
                      : isSolid
                      ? 'text-[#58585A] hover:text-[#ED1C24]'
                      : 'text-white/90 hover:text-[#ED1C24]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ED1C24]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
            >
              START YOUR PROJECT
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ED1C24] ${
                isSolid ? 'text-[#1C1C1E] hover:bg-[#F5F5F5]' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
}
