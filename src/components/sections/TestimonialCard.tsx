"use client";

 
import { ImageWithFallback } from "./ImageWithFallback";

interface TestimonialCardProps {
  name: string;
  review: string;
  avatar: string;
  highlighted?: boolean;
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
  highlighted = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-4 overflow-hidden relative transition-all duration-300 hover:-translate-y-1.5 ${
        highlighted
          ? "bg-white shadow-xl"
          : "bg-[#f6f6f6] border border-[#f6f6f6]"
      }`}
      style={
        highlighted
          ? { boxShadow: "0px 4px 77px rgba(136,136,136,0.41)" }
          : {}
      }
    >
      <div className="flex items-start gap-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="rounded-full object-cover flex-shrink-0"
          width={80}
          height={80}
        />
        <div className="flex flex-col gap-1 pt-2">
          <p className="font-bold text-lg text-black">{name}</p>
          <StarRating />
        </div>
      </div>
      <p className="text-sm text-black leading-relaxed">{review}</p>
    </div>
  );
}
