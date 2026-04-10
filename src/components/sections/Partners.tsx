"use client";

 
import { AnimateIn } from "./AnimateIn";
import svgPaths from "@/lib/svg-paths";

function AirbnbLogo() {
  return (
    <svg width="110" height="34" viewBox="0 0 110.274 34.2228" fill="none">
      <path d={svgPaths.p1c3cb980} fill="#FF5A5F" />
    </svg>
  );
}

function BookingLogo() {
  return (
    <svg viewBox="0 0 95.35 22.21" width="110" height="28" fill="none">
      <path d={svgPaths.pfbf7b80} fill="#273B7D" />
      <path d={svgPaths.p2f63f600} fill="#499FDD" />
      <path d={svgPaths.p2a7a1ec0} fill="#273B7D" />
      <path d={svgPaths.p40fd660} fill="#273B7D" />
      <path d={svgPaths.p2ff16d00} fill="#273B7D" />
      <path d={svgPaths.p2ec43700} fill="#273B7D" />
      <path d={svgPaths.p3b500200} fill="#273B7D" />
    </svg>
  );
}

function ExpediaLogo() {
  return (
    <svg viewBox="0 0 53.91 21.75" width="80" height="28" fill="none">
      <path d={svgPaths.p326d1480} fill="#499FDD" />
      <path d={svgPaths.p3f564300} fill="#273B7D" />
    </svg>
  );
}

function TripAdvisorLogo() {
  return (
    <svg viewBox="0 0 168.044 21.642" width="130" height="28" fill="none">
      <path d={svgPaths.p3657ca00} fill="#273B7D" />
      <path d={svgPaths.p24800300} fill="#499FDD" />
      <path d={svgPaths.p255ca780} fill="#499FDD" />
    </svg>
  );
}

const logos = [
  { key: "airbnb", el: <AirbnbLogo /> },
  { key: "booking", el: <BookingLogo /> },
  { key: "expedia", el: <ExpediaLogo /> },
  { key: "tripadvisor", el: <TripAdvisorLogo /> },
];

export function Partners() {
  return (
    <section className="bg-[#f6f6f6] py-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
          {logos.map((logo) => (
            <div
              key={logo.key}
              className="flex items-center transition-all duration-250 hover:opacity-100"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.55,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.55";
              }}
            >
              {logo.el}
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
