"use client";

import React, { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { PricingCard } from "./PricingCard";
import { Toggle } from "./Toggle";

const baseFeatures = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const freePlan = {
  tier: "Freebie",
  description: "Ideal for individuals who need quick access to basic features.",
  features: baseFeatures.map((text, i) => ({ text, included: i < 2 })),
};

const proPlan = {
  tier: "Professional",
  description:
    "Ideal for individuals who need advanced features and tools for client work.",
  features: baseFeatures.map((text, i) => ({ text, included: i < 6 })),
};

const entPlan = {
  tier: "Enterprise",
  description:
    "Ideal for businesses who need personalized services and security for large teams.",
  features: baseFeatures.map((text) => ({ text, included: true })),
};

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  const prices = {
    free: "$0",
    pro: yearly ? "$19" : "$25",
    ent: yearly ? "$75" : "$100",
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-10">
          <h2
            className="font-bold text-[#191d23] mb-2"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Airbnb Assistant{" "}
            <span className="text-[#ed3c6a]">Pricing</span>
          </h2>
          <p className="text-[#191d23] text-lg">
            Choose a plan that&apos;s right for you
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-4 relative">
            <Toggle
              checked={yearly}
              onChange={setYearly}
              labelLeft="Pay Monthly"
              labelRight="Pay Yearly"
            />
            {yearly && (
              <span className="ml-2 text-[#ed3c6a] font-medium text-sm whitespace-nowrap">
                Save 25%
              </span>
            )}
          </div>
        </AnimateIn>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <AnimateIn delay={0} className="flex flex-1">
            <PricingCard
              tier={freePlan.tier}
              description={freePlan.description}
              price={prices.free}
              period="/ Month"
              features={freePlan.features}
              highlighted={false}
            />
          </AnimateIn>
          <AnimateIn delay={0.1} className="flex flex-1">
            <PricingCard
              tier={proPlan.tier}
              description={proPlan.description}
              price={prices.pro}
              period="/ Month"
              features={proPlan.features}
              highlighted={true}
            />
          </AnimateIn>
          <AnimateIn delay={0.2} className="flex flex-1">
            <PricingCard
              tier={entPlan.tier}
              description={entPlan.description}
              price={prices.ent}
              period="/ Month"
              features={entPlan.features}
              highlighted={false}
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
