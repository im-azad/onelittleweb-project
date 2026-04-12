"use client";

import { AnimateIn } from "../sections/AnimateIn";

interface SectionTitleProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  maxWidth?: string;
  animate?: boolean;
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  maxWidth = "max-w-xl",
  animate = true,
  className = "",
}: SectionTitleProps) {
  const content = (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="text-[#ed3c6a] font-semibold tracking-widest uppercase text-sm mb-3">
          {label}
        </p>
      )}
      <h2
        className="font-bold text-[#191d23] mb-4"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-[#64748b] ${maxWidth} mx-auto leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );

  if (animate) {
    return <AnimateIn className={align === "center" ? "w-full" : ""}>{content}</AnimateIn>;
  }

  return content;
}
