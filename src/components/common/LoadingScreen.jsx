import React, { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Quick, elegant progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        return prev + 15;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 bg-[#1C1C1E] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-xs text-center px-6">
        <BrandLogo variant="light" size="large" asLink={false} />
        
        {/* Subtle architectural progress indicator */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
          <div
            className="h-full bg-[#ED1C24] transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-48 text-[10px] tracking-[0.2em] uppercase text-[#707070] mt-2 font-mono">
          <span>INITIALIZING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
