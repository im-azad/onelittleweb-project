"use client";

import { Button } from "@/components/ui/button";

const particles = [
    { src: "/assets/hero/particle-1.png", className: "left-[25%] top-[20%] ", delay: "0s" },
    { src: "/assets/hero/particle-2.png", className: "right-[18%] top-[22%] ", delay: "0.5s" },
    { src: "/assets/hero/particle-3.png", className: "left-[20%] top-[60%] ", delay: "1s" },
    { src: "/assets/hero/particle-4.png", className: "right-[25%] top-[62%] ", delay: "1.2s" },
];

const ellipses = [
    { src: "/assets/hero/Ellipse 2.svg", className: "left-[50%] top-[15%]", delay: "0.2s" },
    { src: "/assets/hero/Ellipse 3.svg", className: "right-[6%] top-[18%] ", delay: "0.7s" },
    { src: "/assets/hero/Ellipse 4.svg", className: "left-[5%] top-[40%]", delay: "1.1s" },
    { src: "/assets/hero/Ellipse 5.svg", className: "right-[10%] top-[38%]", delay: "0.4s" },
    { src: "/assets/hero/Ellipse 6.svg", className: "left-[15%] top-[72%] ", delay: "1.3s" },
    { src: "/assets/hero/Ellipse 7.svg", className: "right-[50%] top-[85%]", delay: "0.9s" },
    { src: "/assets/hero/Ellipse 8.svg", className: "left-[20%] top-[80%]", delay: "0.6s" },
];

export function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                backgroundSize: "88px 83px",
            }}
        >
            {particles.map((particle, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    key={`particle-${i}`}
                    src={particle.src}
                    alt=""
                    className={`absolute hidden lg:block animate-float-particle ${particle.className}`}
                    style={{ animationDelay: particle.delay }}
                />
            ))}

            {ellipses.map((ellipse, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    key={`ellipse-${i}`}
                    src={ellipse.src}
                    alt=""
                    className={`absolute hidden lg:block animate-float-ellipse ${ellipse.className}`}
                    style={{ animationDelay: ellipse.delay }}
                />
            ))}

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
                <div className="fade-slide-up" style={{ animationDelay: "0s" }}>
                    <span className="inline-block bg-[#fdebf0] text-[#ed3c6a] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        AI-Powered Property Management
                    </span>
                    <h1 className="font-bold text-[#191d23] leading-tight">
                        <span style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
                            Airbnb Assistants For
                            <br />
                            <span className="text-[#ed3c6a]">
                                {" "}
                                Property Management
                            </span>
                        </span>
                    </h1>
                </div>

                <div
                    className="fade-slide-up"
                    style={{ animationDelay: "0.15s" }}
                >
                    <p
                        className="text-[#64748b] leading-relaxed max-w-xl"
                        style={{ fontSize: "clamp(0.9rem, 2vw, 1.125rem)" }}
                    >
                        Manage your Airbnb properties with ease. Our AI-powered
                        assistants handle everything from guest communication to
                        housekeeping scheduling — so you don&apos;t have to.
                    </p>
                </div>

                <div
                    className="flex flex-wrap gap-3 justify-center fade-slide-up mb-3 mt-3"
                    style={{ animationDelay: "0.3s" }}
                >
                    <Button
                        size="lg"
                        className="gap-2 flex items-center cursor-pointer"
                        style={{
                            boxShadow: "0 4px 24px rgba(237,60,106,0.35)",
                        }}
                    >
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
                    </Button>
                    <Button variant="outline" size="lg" className="cursor-pointer">
                        Watch Demo
                    </Button>
                </div>

                <div
                    className="flex items-center gap-3 mt-2 fade-slide-up"
                    style={{ animationDelay: "0.45s" }}
                >
                    <div className="flex -space-x-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/assets/Avatar-group.png" alt="User Avatars" />
                    </div>
                    <p className="text-sm text-[#64748b]">
                        <span className="font-bold text-[#191d23]">2,000+</span>{" "}
                        property managers trust us
                    </p>
                </div>
            </div>
        </section>
    );
}
