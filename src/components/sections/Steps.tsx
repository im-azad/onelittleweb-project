"use client";

 
import { AnimateIn } from "./AnimateIn";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="8" stroke="#191d23" strokeWidth="2" />
        <path
          d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16"
          stroke="#191d23"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Add/Signup your LMS",
    description:
      "Create your account and connect your existing property management system in just a few clicks.",
  },
  {
    number: "02",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="#191d23" strokeWidth="2" />
        <rect x="22" y="6" width="12" height="12" rx="2" stroke="#191d23" strokeWidth="2" />
        <rect x="6" y="22" width="12" height="12" rx="2" stroke="#191d23" strokeWidth="2" />
        <rect x="22" y="22" width="12" height="12" rx="2" stroke="#191d23" strokeWidth="2" />
      </svg>
    ),
    title: "Setup your CRM Subscribing Tools",
    description:
      "Configure your customer relationship tools and integrate with your preferred booking platforms automatically.",
  },
  {
    number: "03",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M8 20L16 28L32 12"
          stroke="#191d23"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Boost your CPS Revenue",
    description:
      "Watch your revenue grow as our AI optimizes pricing, maximizes occupancy, and streamlines operations.",
  },
];

export function Steps() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <h2
            className="font-bold text-[#191d23]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Getting Started is <span className="text-[#ed3c6a]">Easy</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+38px)] right-[calc(16.67%+38px)] h-0.5 bg-[#ed3c6a] opacity-20" />

          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-[76px] h-[76px] rounded-full border-[5px] border-[#ed3c6a] bg-white flex items-center justify-center z-10">
                    <span
                      className="font-medium text-black"
                      style={{ fontSize: "1.8rem" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="mt-2">{step.icon}</div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#191d23]">{step.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
