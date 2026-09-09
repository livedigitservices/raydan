import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'left', // 'left' | 'center'
  theme = 'light', // 'light' | 'dark'
  className = '',
  action
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {/* Eyebrow Label */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-[#ED1C24] inline-block shrink-0 rounded-full" />
          <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase ${isDark ? 'text-[#E8E8E8]' : 'text-[#58585A]'}`}>
            {eyebrow}
          </span>
        </div>
      )}

      {/* Main Large Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
        <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] ${
          isDark ? 'text-white' : 'text-[#1C1C1E]'
        }`}>
          {title}
          <span className="text-[#ED1C24]">.</span>
        </h2>

        {action && (
          <div className="shrink-0 mt-4 md:mt-0">
            {action}
          </div>
        )}
      </div>

      {/* Optional Description */}
      {description && (
        <p className={`mt-5 text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
          isDark ? 'text-[#A0A0A5]' : 'text-[#707070]'
        }`}>
          {description}
        </p>
      )}

      {/* Subtle brand red accent rule */}
      <div className={`mt-6 h-[2px] w-14 bg-[#ED1C24] ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
