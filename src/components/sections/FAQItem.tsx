"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full">
      <div className="bg-[rgba(191,33,74,0.28)] h-px w-full mb-6" />
      <div className="flex gap-6 items-start w-full">
        <div className="flex flex-col gap-2 flex-1">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-start justify-between w-full text-left gap-6"
          >
            <p className="font-bold text-lg text-black leading-7">{question}</p>
            <span className="flex-shrink-0 w-6 h-6 mt-0.5">
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#ED3C6A" strokeWidth="2" />
                  <path
                    d="M8 12H16"
                    stroke="#ED3C6A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#ED3C6A" strokeWidth="2" />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="#ED3C6A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
          {open && (
            <p className="text-[#606060] text-base leading-6 slide-down">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
