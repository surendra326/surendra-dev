'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = '',
  prefix: propPrefix,
  suffix: propSuffix,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse string like "32+" -> target: 32, suffix: "+"
  const strValue = String(value);
  const numericMatch = strValue.match(/[\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  
  // Extract non-numeric parts if prefix/suffix props aren't explicitly passed
  const extractedPrefix = propPrefix ?? (strValue.match(/^[^\d]+/)?.[0] || '');
  const extractedSuffix = propSuffix ?? (strValue.match(/[^\d.]+$/)?.[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Exponential ease-out curve for premium smooth finish
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetNumber, duration]);

  return (
    <span ref={elementRef} className={className}>
      {extractedPrefix}
      {count}
      {extractedSuffix}
    </span>
  );
}
