import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * High-Performance Desktop Cursor Animation with GSAP quickSetter.
 * Smoothly follows mouse, expands on interactive elements, and morphs into a
 * luxury "VIEW PROJECT" badge when hovering over portfolio items.
 * Works seamlessly across mouse-enabled displays including touchscreen laptops.
 */
export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only disable if user has strictly coarse pointer (pure phone/tablet without mouse)
    const isCoarseOnly = window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches;
    if (isCoarseOnly) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Use GSAP quickSetter for hardware-accelerated 60/120fps positioning
    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };

    let isMouseMoving = false;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setDotX(mouse.x);
      setDotY(mouse.y);

      if (!isMouseMoving) {
        isMouseMoving = true;
        setIsVisible(true);
      }
    };

    // Smooth ticker loop for ring follower
    const tickerFunc = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.22, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      setRingX(pos.x);
      setRingY(pos.y);
    };

    gsap.ticker.add(tickerFunc);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle mouse leaving and entering viewport
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Event delegation for interactive hover targets
    const onMouseOver = (e) => {
      const projectTarget = e.target.closest('[data-cursor="project"]');
      if (projectTarget) {
        setIsProjectHover(true);
        setIsHovered(true);
        setCursorText('VIEW PROJECT');
        return;
      }

      const ctaTarget = e.target.closest('[data-cursor="cta"], [data-cursor="pointer"], button, a, input, select, textarea');
      if (ctaTarget) {
        setIsProjectHover(false);
        setIsHovered(true);
        setCursorText('');
        return;
      }

      setIsProjectHover(false);
      setIsHovered(false);
      setCursorText('');
    };

    document.addEventListener('mouseover', onMouseOver);

    return () => {
      gsap.ticker.remove(tickerFunc);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'opacity' }}
    >
      {/* Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#ED1C24] pointer-events-none z-[10000]"
        style={{ willChange: 'transform' }}
      />

      {/* Outer Follower Ring / Interactive Badge */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-[width,height,margin,background-color,border-color,transform] duration-300 ease-out border ${
          isProjectHover
            ? 'w-24 h-24 -ml-12 -mt-12 bg-[#ED1C24] border-[#ED1C24] text-white shadow-2xl scale-100'
            : isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 bg-[#ED1C24]/15 border-[#ED1C24] scale-110'
            : 'w-10 h-10 -ml-5 -mt-5 bg-transparent border-[#ED1C24]/60'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isProjectHover && (
          <span className="text-[9px] font-heading font-extrabold tracking-[0.16em] text-center uppercase text-white px-2 select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
