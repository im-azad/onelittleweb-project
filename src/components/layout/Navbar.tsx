"use client";

import React, { useState, useEffect } from "react";

const imgLogo = "/logo.png";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks.map((link) => link.href.slice(1));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" },
        );

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
                scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
            }`}
        >
            <div className="w-full shadow-[0_4px_62px_0_rgba(250,196,210,0.63)]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-22">
                    <a
                        href="#home"
                        className="flex items-center gap-2 flex-shrink-0 hover:cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgLogo} alt="Logo" className="w-auto" />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => {
                            const sectionId = item.href.slice(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) =>
                                        handleNavClick(e, item.href)
                                    }
                                    className={`relative text-sm font-medium transition-colors duration-200 hover:cursor-pointer group ${
                                        isActive
                                            ? "text-[#ED3C6A] hover:text-[#d4335f]"
                                            : "text-[#1E1E1E] hover:text-[#ED3C6A]"
                                    }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-0.5 bg-[#ED3C6A] transition-all duration-300 ${
                                            isActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center">
                        <button className="bg-[#ed3c6a] text-white text-sm font-bold px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-[#d4335f] hover:cursor-pointer flex items-center gap-2">
                            <span>Schedule A Meeting</span>
                            <svg
                                width="10"
                                height="9"
                                viewBox="0 0 10 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.59269 5.09269H7.21304L4.32071 7.98502C4.08956 8.21617 4.08956 8.59549 4.32071 8.82664C4.55186 9.05779 4.92525 9.05779 5.1564 8.82664L9.06223 4.92081C9.29338 4.68966 9.29338 4.31627 9.06223 4.08512L5.16233 0.173362C4.93118 -0.0577873 4.55779 -0.0577873 4.32664 0.173362C4.09549 0.404511 4.09549 0.777906 4.32664 1.00906L7.21304 3.90731H0.59269C0.266711 3.90731 0 4.17402 0 4.5C0 4.82598 0.266711 5.09269 0.59269 5.09269Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ED3C6A]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            {menuOpen ? (
                                <path
                                    d="M6 6L18 18M6 18L18 6"
                                    stroke="#191d23"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            ) : (
                                <path
                                    d="M3 6H21M3 12H21M3 18H21"
                                    stroke="#191d23"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg transition-all duration-300 ${
                    menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                {navLinks.map((item) => {
                    const sectionId = item.href.slice(1);
                    const isActive = activeSection === sectionId;
                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`relative text-sm font-medium py-2 transition-colors ${
                                isActive ? "text-[#ED3C6A]" : "text-[#1E1E1E]"
                            }`}
                        >
                            {item.label}
                            {isActive && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#ED3C6A]" />
                            )}
                        </a>
                    );
                })}
                <button className="bg-[#ed3c6a] flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-lg mt-2 transition-all   hover:bg-[#d4335f]">
                    <span> Schedule A Meeting</span>
                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                        <path
                            d="M1 4.5H9M6 1.5L9 4.5L6 7.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
