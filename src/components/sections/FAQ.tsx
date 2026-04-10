"use client";

import { AnimateIn } from "./AnimateIn";
import { FAQItem } from "./FAQItem";
import { ImageWithFallback } from "./ImageWithFallback";

const imgAvatar = "/assets/Avatar-group.png";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        defaultOpen: true,
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments.",
        defaultOpen: false,
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel your subscription at any time with no penalties. Your account will remain active until the end of your current billing period.",
        defaultOpen: false,
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add custom fields to your invoices including company name, VAT number, address and other billing information needed for your records.",
        defaultOpen: false,
    },
    {
        question: "How does billing work?",
        answer: "We bill monthly or annually depending on your plan. All major credit cards are accepted and you'll receive a receipt via email after each successful payment.",
        defaultOpen: false,
    },
    {
        question: "How do I change my account email?",
        answer: "You can change your account email from the Account Settings page. You'll need to verify your new email address before the change takes effect.",
        defaultOpen: false,
    },
];

export function FAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-[#f9fafb] rounded-2xl p-8 lg:p-16 mb-5">
                    <AnimateIn className="text-center mb-12">
                        <h2
                            className="font-semibold text-[#101828] tracking-tight mb-4"
                            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                        >
                            Frequently asked{" "}
                            <span className="text-[#ed3c6a]">questions</span>
                        </h2>
                        <p className="text-black text-lg leading-loose max-w-lg mx-auto">
                            Everything you need to know about the product and
                            billing.
                        </p>
                    </AnimateIn>

                    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                        {faqs.map((faq, i) => (
                            <AnimateIn key={i} delay={i * 0.06}>
                                <FAQItem
                                    question={faq.question}
                                    answer={faq.answer}
                                    defaultOpen={faq.defaultOpen}
                                />
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <AnimateIn delay={0.1} className="mt-16">
                    <div className="bg-[#F9FAFB] rounded-2xl p-8 flex flex-col items-center gap-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center -space-x-3">
                          <ImageWithFallback
                              src={imgAvatar}
                              alt="Team member"
                              className="w-full h-full object-cover rounded-full"
                          />
         
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-[#101828] text-xl mb-2">
                                Still have Questions?
                            </p>
                            <p className="text-[#9c9c9c] text-lg">
                                Can&apos;t find the answer you&apos;re looking
                                for? Please chat to our friendly team.
                            </p>
                        </div>
                        <button className="bg-[#ed3c6a] text-white font-medium px-[18px] py-[10px] rounded-lg hover:bg-[#d4335f]  transition-all duration-200 shadow-sm">
                            Get in touch
                        </button>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
