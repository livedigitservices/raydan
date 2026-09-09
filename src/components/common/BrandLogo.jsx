import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo Component for RAYDAN CONSTRUCTIONS
 * Specifications:
 * - RAYDAN wordmark in architectural charcoal (#58585A) or white for dark mode
 * - Red architectural chevron / roofline apex symbol (#ED1C24)
 * - Red "CONSTRUCTIONS" subtitle (#ED1C24)
 * - Proportions strictly maintained with vector precision
 */
export default function BrandLogo({ 
  variant = 'dark', // 'dark' (for light backgrounds) | 'light' (for dark/transparent backgrounds)
  size = 'default', // 'small' | 'default' | 'large'
  className = '',
  asLink = true 
}) {
  const isLight = variant === 'light';
  const wordmarkColor = isLight ? '#FFFFFF' : '#58585A';
  const accentRed = '#ED1C24';

  const sizeClasses = {
    small: 'h-8',
    default: 'h-10 md:h-11',
    large: 'h-12 md:h-14'
  }[size] || 'h-10';

  const logoContent = (
    <div className={`inline-flex items-center gap-3 select-none group transition-opacity duration-300 ${className}`}>
      {/* Official Architectural Icon / Symbol (First Image: Stylized R + Apex) */}
      <div className={`${sizeClasses} aspect-square flex items-center justify-center relative shrink-0`}>
        <img
          src={isLight ? "/raydan-logo-light.png" : "/raydan-logo-transparent.png"}
          alt="RAYDAN Symbol"
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to original image if transparent variant not cached
            e.currentTarget.src = "/raydan-logo.png";
          }}
        />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center text-left leading-none">
        {/* RAYDAN Wordmark */}
        <span 
          style={{ color: wordmarkColor }}
          className="font-heading font-extrabold tracking-[0.14em] text-xl md:text-2xl transition-colors duration-300"
        >
          RAYDAN
        </span>
        {/* Subtitle in Official Red */}
        <span 
          style={{ color: accentRed }}
          className="text-[9px] md:text-[10px] font-bold tracking-[0.28em] uppercase mt-1 transition-all duration-300"
        >
          CONSTRUCTIONS
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link 
        to="/" 
        aria-label="RAYDAN CONSTRUCTIONS Home"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1C24] rounded-sm inline-block"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
