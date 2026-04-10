"use client";

 
import { CheckIcon } from "@/components/ui/CheckIcon";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  tier: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export function PricingCard({
  tier,
  description,
  price,
  period,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col gap-10 p-6 rounded-xl flex-1 transition-all duration-300 hover:-translate-y-1.5 ${
        highlighted
          ? "bg-[#ed3c6a] text-white"
          : "bg-white border border-[#fac4d2]"
      }`}
      style={
        highlighted
          ? { boxShadow: "0 20px 60px rgba(237,60,106,0.35)", transform: "scale(1.02)" }
          : {}
      }
      onMouseEnter={(e) => {
        if (!highlighted) {
          e.currentTarget.style.transform = "translateY(-6px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!highlighted) {
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3
            className={`font-bold text-xl ${
              highlighted ? "text-white" : "text-[#191d23]"
            }`}
          >
            {tier}
          </h3>
          <p
            className={`text-sm leading-tight ${
              highlighted ? "text-[#f7f8f9]" : "text-[#64748b]"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span
            className={`font-semibold text-5xl ${
              highlighted ? "text-white" : "text-[#191d23]"
            }`}
          >
            {price}
          </span>
          <span
            className={`text-sm ${
              highlighted ? "text-[#f7f8f9]" : "text-[#4b5768]"
            }`}
          >
            {period}
          </span>
        </div>
        <button
          className={`w-full h-11 rounded font-semibold text-sm transition-all duration-200 hover:opacity-90 ${
            highlighted
              ? "bg-white text-[#ed3c6a]"
              : "border-[1.5px] border-[#ed3c6a] text-[#ed3c6a] bg-transparent hover:bg-[#fdebf0]"
          }`}
        >
          Get Started Now
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4">
            <CheckIcon active={f.included} />
            <span
              className={`text-sm font-medium ${
                f.included
                  ? highlighted
                    ? "text-white"
                    : "text-[#191d23]"
                  : highlighted
                  ? "text-white opacity-60"
                  : "text-[#a0abbb]"
              }`}
            >
              {f.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
