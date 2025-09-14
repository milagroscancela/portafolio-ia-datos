'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [clickEffects, setClickEffects] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleClick = (e: MouseEvent) => {
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickEffects(prev => [...prev, newEffect]);
      
      // Remove effect after animation completes
      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], [tabindex], input, textarea, select')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], [tabindex], input, textarea, select')) {
        setIsHovering(false);
      }
    };

    // Only add event listeners on desktop
    if (isDesktop) {
      document.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('click', handleClick);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      if (isDesktop) {
        document.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('click', handleClick);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [isDesktop]);

  // Don't render on mobile devices
  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`cursor-glow ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      
      {/* Click effects */}
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="click-effect"
          style={{
            left: effect.x - 10,
            top: effect.y - 10,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
