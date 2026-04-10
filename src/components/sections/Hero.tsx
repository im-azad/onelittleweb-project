"use client";

import { Button } from "@/components/ui/button";

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
            <div
                className="absolute left-[6%] top-[24%] w-20 h-20 rounded-xl bg-[#ff5a5f] hidden lg:block"
                style={
                    {
                        transform: "rotate(-30deg)",
                        boxShadow: "inset 0px -2px 6px rgba(0,0,0,0.25)",
                        animation: "floatAnim 4s ease-in-out infinite",
                        animationDelay: "0s",
                        "--rot": "-30deg",
                    } as React.CSSProperties
                }
            />
            <div
                className="absolute right-[16%] top-[30%] w-16 h-16 rounded-xl bg-[#34e0a1] hidden lg:block"
                style={
                    {
                        transform: "rotate(41deg)",
                        boxShadow: "inset 0px -2px 6px rgba(0,0,0,0.25)",
                        animation: "floatAnim 5s ease-in-out infinite",
                        animationDelay: "0.5s",
                        "--rot": "41deg",
                    } as React.CSSProperties
                }
            />
            <div
                className="absolute left-[14%] top-[64%] w-[58px] h-[58px] rounded-xl bg-[#0e214b] hidden lg:block"
                style={
                    {
                        transform: "rotate(-23deg)",
                        boxShadow: "inset 0px -2px 6px rgba(0,0,0,0.25)",
                        animation: "float2Anim 4.5s ease-in-out infinite",
                        animationDelay: "1s",
                        "--rot": "-23deg",
                    } as React.CSSProperties
                }
            />
            <div
                className="absolute right-[7%] top-[58%] w-16 h-16 rounded-xl bg-[#0c3b7c] hidden lg:block"
                style={
                    {
                        transform: "rotate(28deg)",
                        boxShadow: "inset 0px -2px 6px rgba(0,0,0,0.25)",
                        animation: "floatAnim 3.8s ease-in-out infinite",
                        animationDelay: "1.2s",
                        "--rot": "28deg",
                    } as React.CSSProperties
                }
            />

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
                    className="flex flex-wrap gap-3 justify-center fade-slide-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    <Button
                        size="lg"
                        className="gap-2 flex items-center"
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
                    <Button variant="outline" size="lg">
                        Watch Demo
                    </Button>
                </div>

                <div
                    className="flex items-center gap-3 mt-2 fade-slide-up"
                    style={{ animationDelay: "0.45s" }}
                >
                    <div className="flex -space-x-2">
                        {["#fac4d2", "#c7b9da", "#b9d9da"].map((bg, i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white"
                                style={{ backgroundColor: bg }}
                            />
                        ))}
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
