import React, { useEffect, useRef, useState } from 'react';
import statsData from '../../data/stats';

function AnimatedCounter({ endValue, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = endValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <span className="tabular-nums">
      {count}
      <span className="text-[#ED1C24]">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-[#F5F5F5] border-y border-[#E8E8E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start border-l-2 border-[#ED1C24] pl-6 py-2 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              {/* Number with Brand Red Accent */}
              <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1E] tracking-tight leading-none mb-3">
                <AnimatedCounter
                  endValue={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Stat Label */}
              <div className="font-heading font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[#1C1C1E] mb-1">
                {stat.label}
              </div>

              {/* Subtle Description */}
              <p className="text-xs text-[#707070] leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
