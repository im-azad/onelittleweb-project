"use client";

 

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`inline-block text-[#ed3c6a] text-sm font-semibold tracking-widest uppercase mb-2 ${className}`}>
      {children}
    </span>
  );
}
