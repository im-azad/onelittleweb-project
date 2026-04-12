"use client";

const airbnbLogo = "/assets/brand/airbnb.png";
const bookingLogo = "/assets/brand/booking.png";
const vrboLogo = "/assets/brand/vrbo.png";
const tripAdvisorLogo = "/assets/brand/tripadvisor.png";
const agodaLogo = "/assets/brand/agoda.png";
const expediaLogo = "/assets/brand/expedia.png";
const hometogoLogo = "/assets/brand/hometogo.png";

const logos = [
    { logo: airbnbLogo },
    { logo: bookingLogo },
    { logo: vrboLogo },
    { logo: tripAdvisorLogo },
    { logo: expediaLogo },
    { logo: agodaLogo },
    { logo: hometogoLogo },
];

export function Partners() {
    return (
        <section className="bg-[#f6f6f6] py-10 overflow-hidden">
            <div className="relative">
                <div
                    className="flex items-center gap-15 animate-scroll"
                    style={{
                        width: "max-content",
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <img
                            key={i}
                            src={logo.logo}
                            alt="Logo"
                            className="object-contain h-8 w-auto mx-12 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
