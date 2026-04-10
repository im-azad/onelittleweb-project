"use client";

import { ImageWithFallback } from "./ImageWithFallback";

interface TestimonialCardProps {
  name: string;
  review: string;
  avatar: string;
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1L8.854 4.757L13 5.341L10 8.26L10.708 12.39L7 10.44L3.292 12.39L4 8.26L1 5.341L5.146 4.757L7 1Z"
            fill="#FF9D00"
            stroke="#FF9D00"
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  name,
  review,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl p-6 md:p-8 flex flex-col gap-4 overflow-hidden relative transition-all duration-300 bg-[#f6f6f6] hover:bg-white hover:shadow-xl border border-transparent hover:border-[#f0f0f0] h-full">
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="rounded-full object-cover flex-shrink-0"
          width={60}
          height={60}
        />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-lg text-black">{name}</p>
            <p className="text-sm md:text-base text-[#64748b] leading-relaxed">
              {review}
            </p>
            <StarRating />
          </div>
        </div>
    </div>
  );
}