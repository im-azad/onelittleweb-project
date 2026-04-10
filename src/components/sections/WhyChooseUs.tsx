"use client";

import { AnimateIn } from "./AnimateIn";
import { ImageWithFallback } from "./ImageWithFallback";

const imgBanner = "/assets/banner.png";
const circleCeck = "/assets/circle-check.svg";
const reasons = [
    "Brilliant Client Service",
    "Flexibility & Adaptability",
    "We make it Personal",
    "We have experts in our team",
];

export function WhyChooseUs() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-[#fdebf0] border border-[#f8becd] rounded-[33px] overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center gap-0">
                        <AnimateIn className="flex-1 p-8 lg:p-14 flex flex-col gap-6">
                            <h2
                                className="font-bold text-black lg:mr-16"
                                style={{
                                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                                }}
                            >
                                Few Reasons Why you Choose us?
                            </h2>
                            <p className="text-black font-semibold text-sm leading-relaxed max-w-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                            </p>

                            <div className="flex flex-col gap-3">
                                {reasons.map((reason, i) => (
                                    <AnimateIn key={reason} delay={i * 0.1}>
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fac4d2] flex-shrink-0">
                                                <ImageWithFallback
                                                    src={circleCeck}
                                                    alt="Property Management Expert"
                                                    className="w-full h-auto object-cover"
                                                />
                                            </span>
                                            <span className="font-bold text-[#1e1e1e]">
                                                {reason}
                                            </span>
                                        </div>
                                    </AnimateIn>
                                ))}
                            </div>

                            <button className="mt-2 self-start cursor-pointer flex items-center gap-2 bg-[#ed3c6a] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#d4335f]   transition-all duration-200">
                                <span> Schedule A Meeting</span>
                                <svg
                                    width="10"
                                    height="9"
                                    viewBox="0 0 10 9"
                                    fill="none"
                                >
                                    <path
                                        d="M1 4.5H9M6 1.5L9 4.5L6 7.5"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </AnimateIn>

                        <AnimateIn
                            delay={0.15}
                            className="flex-1 relative flex items-end justify-center lg:justify-end min-h-[360px] w-full"
                        >
                            <div className="pr-10">
                                <ImageWithFallback
                                    src={imgBanner}
                                    alt="Property Management Expert"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                 
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
