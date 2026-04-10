"use client";

import { AnimateIn } from "./AnimateIn";
import { ImageWithFallback } from "./ImageWithFallback";

const imgSmilingMaleOfficeWorker1 = "/assets/smiling-male-office-worker.png";

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
                        <AnimateIn className="flex-1 p-8 lg:p-12 flex flex-col gap-6">
                            <h2
                                className="font-bold text-black"
                                style={{
                                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                                }}
                            >
                                Few Reasons Why you{" "}
                                <span className="text-[#ed3c6a]">
                                    Choose us?
                                </span>
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
                                                <svg
                                                    width="12"
                                                    height="9"
                                                    viewBox="0 0 12 9"
                                                    fill="none"
                                                >
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M11.06 0.94a1.5 1.5 0 010 2.12L5.06 9.06a1.5 1.5 0 01-2.12 0L.94 7.06a1.5 1.5 0 012.12-2.12L4 5.88l4.94-4.94a1.5 1.5 0 012.12 0z"
                                                        fill="#ED3C6A"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="font-bold text-[#1e1e1e]">
                                                {reason}
                                            </span>
                                        </div>
                                    </AnimateIn>
                                ))}
                            </div>

                            <button className="mt-2 self-start bg-[#ed3c6a] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#d4335f]   transition-all duration-200">
                                Schedule A Meeting
                            </button>
                        </AnimateIn>

                        <AnimateIn
                            delay={0.15}
                            className="flex-1 relative flex items-end justify-center lg:justify-end min-h-[360px] w-full"
                        >
                            <div className="absolute bottom-0 right-0 left-0 flex justify-center">
                                <div
                                    className="w-[90%] h-[260px] bg-[#fac4d2] rounded-[168px]"
                                    style={{
                                        boxShadow:
                                            "inset 3px -5px 4px rgba(0,0,0,0.07)",
                                    }}
                                />
                            </div>

                            <div
                                className="relative z-10 w-[280px] lg:w-[340px] transition-transform duration-400 hover:scale-102"
                                style={{ transform: "scale(1)" }}
                            >
                                <ImageWithFallback
                                    src={imgSmilingMaleOfficeWorker1}
                                    alt="Property Management Expert"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div
                                className="absolute top-6 right-8 bg-white rounded-[17px] shadow-xl p-4 z-20 hidden lg:block"
                                style={{
                                    boxShadow:
                                        "29px 21px 38.6px rgba(191,33,74,0.28)",
                                }}
                            >
                                <div className="flex gap-2 mb-2">
                                    <div className="w-12 h-12 bg-[#ff5a5f] rounded" />
                                    <div className="w-12 h-12 bg-[#0e214b] rounded" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-12 h-12 bg-[#0c3b7c] rounded" />
                                    <div className="w-12 h-12 bg-[#34e0a1] rounded" />
                                </div>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
