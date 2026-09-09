import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold tracking-wider uppercase transition-all duration-300 rounded-none group select-none active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-5 py-2.5 gap-2",
    md: "text-xs md:text-sm px-7 py-3.5 gap-3",
    lg: "text-sm md:text-base px-9 py-4 gap-4"
  }[size];

  // Brand Red #ED1C24 with hover #58585A as explicitly mandated in Section 7 & 45
  const variantStyles = {
    primary: "bg-[#ED1C24] text-white hover:bg-[#58585A] shadow-md hover:shadow-lg border border-transparent",
    secondary: "bg-[#58585A] text-white hover:bg-[#ED1C24] shadow-sm",
    dark: "bg-[#1C1C1E] text-white hover:bg-[#ED1C24] border border-white/10",
    outline: "bg-transparent text-[#242424] border border-[#242424] hover:bg-[#ED1C24] hover:border-[#ED1C24] hover:text-white",
    outlineLight: "bg-transparent text-white border border-white/30 hover:border-[#ED1C24] hover:bg-[#ED1C24] hover:text-white",
    ghost: "bg-transparent text-[#242424] hover:text-[#ED1C24] px-0 py-1 gap-2 border-b border-transparent hover:border-[#ED1C24]"
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link 
        to={to} 
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        data-cursor="cta"
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      data-cursor="cta"
      {...props}
    >
      {content}
    </button>
  );
}
