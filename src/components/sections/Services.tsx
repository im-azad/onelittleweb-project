"use client";

 
import { AnimateIn } from "./AnimateIn";
import { ServiceCard } from "./ServiceCard";

const imgImage11 = "/assets/property-listings.png";
const imgImage12 = "/assets/guest-booking.png";
const imgImage13 = "/assets/house-cleaning.png";
const imgImage14 = "/assets/airbnb-advisor.png";
const imgImage15 = "/assets/track-report.png";
const imgImage1 = "/assets/guest-feedback.png";

function PropertyIcon() {
  return <img src={imgImage11} alt="Property Listings" className="w-8 h-8 object-contain" />;
}
function GuestIcon() {
  return <img src={imgImage12} alt="Guest Booking" className="w-8 h-8 object-contain" />;
}
function CleaningIcon() {
  return <img src={imgImage13} alt="House Cleaning" className="w-8 h-8 object-contain" />;
}
function AdvisorIcon() {
  return <img src={imgImage14} alt="Airbnb Advisor" className="w-8 h-8 object-contain" />;
}
function ReportIcon() {
  return <img src={imgImage15} alt="Track & Report" className="w-8 h-8 object-contain" />;
}
function FeedbackIcon() {
  return <img src={imgImage1} alt="Guest Feedback" className="w-8 h-8 object-contain" />;
}

const services = [
  {
    icon: <PropertyIcon />,
    title: "Automated Property Listings",
    description:
      "Automatically sync and update your property listings across all major platforms to maximize visibility and bookings.",
  },
  {
    icon: <GuestIcon />,
    title: "Optimal Customer Booking",
    description:
      "Streamline your booking process with intelligent automation that handles guest inquiries and confirmations 24/7.",
  },
  {
    icon: <CleaningIcon />,
    title: "Optimal House Cleaning",
    description:
      "Schedule and coordinate cleaning crews efficiently between guest stays with automated notifications and checklists.",
  },
  {
    icon: <AdvisorIcon />,
    title: "Airbnb Beach Advisor",
    description:
      "Get expert advice on beach property optimization, seasonal pricing strategies, and local regulation compliance.",
  },
  {
    icon: <ReportIcon />,
    title: "Track & Report Analysis",
    description:
      "Monitor performance metrics, revenue trends, and occupancy rates with detailed analytics dashboards.",
  },
  {
    icon: <FeedbackIcon />,
    title: "Guest Report & Feedback",
    description:
      "Automate guest review collection and respond to feedback with AI-powered reply suggestions to maintain high ratings.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <p className="text-[#ed3c6a] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Service
          </p>
          <h2
            className="font-bold text-[#191d23] mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Everything You Need to{" "}
            <span className="text-[#ed3c6a]">Manage Properties</span>
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto leading-relaxed">
            Our comprehensive suite of tools helps property managers automate
            routine tasks, delight guests, and grow their business.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.08} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
