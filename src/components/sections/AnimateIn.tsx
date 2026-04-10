"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({
  children,
  delay = 0,
  threshold = 0.12,
  className = "",
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, handleIntersect]);

  const animationStyle: React.CSSProperties = {
    animation: visible ? `fadeSlideUpAnim 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both` : undefined,
    opacity: visible ? undefined : 0,
    transform: visible ? undefined : "translateY(28px)",
    ...style,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
