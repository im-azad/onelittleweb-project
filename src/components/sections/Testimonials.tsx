"use client";

import { useState, useEffect, useRef } from "react";
import { AnimateIn } from "./AnimateIn";
import { TestimonialCard } from "./TestimonialCard";

const user1 = "/assets/user1.png";
const user2 = "/assets/user2.png";
const user3 = "/assets/user3.png";
const user4 = "/assets/user1.png";
const user5 = "/assets/user2.png";

const testimonials = [
  {
    name: "Jenny Wilson",
    avatar: user1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Esther Howard",
    avatar: user2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Robert Fox",
    avatar: user3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Sarah Johnson",
    avatar: user4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Michael Chen",
    avatar: user5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const SLIDE_DURATION = 4000;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxSlide = testimonials.length - cardsPerView;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, cardsPerView]);

  const cardWidth = containerWidth / cardsPerView;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <h2
            className="font-bold text-[#191d23]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Check Our Clients{" "}
            <span className="text-[#ed3c6a]">Review</span>
          </h2>
          <p className="text-[#64748b] mt-3 max-w-lg mx-auto">
            See what our happy clients have to say about their experience using
            our Airbnb management platform.
          </p>
        </AnimateIn>
      </div>

      <div
        ref={sliderRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex-shrink-0 px-3"
                style={{ width: cardWidth }}
              >
                <div className="h-full">
                  <TestimonialCard name={t.name} avatar={t.avatar} review={t.review} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}