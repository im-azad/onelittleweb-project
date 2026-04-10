"use client";

 
import { AnimateIn } from "./AnimateIn";
import { TestimonialCard } from "./TestimonialCard";

const imgEllipse21 = "/assets/ellipse-21.png";
const imgEllipse22 = "/assets/ellipse-22.png";
const imgEllipse23 = "/assets/ellipse-23.png";

const testimonials = [
  {
    name: "Jenny Wilson",
    avatar: imgEllipse21,
    review:
      "The platform completely changed how I manage my short-term rental portfolio. Guest communication is now instant and effortless — I couldn't imagine going back.",
    highlighted: false,
  },
  {
    name: "Esther Howard",
    avatar: imgEllipse22,
    review:
      "Booking rates went up 40% in the first quarter after switching. The automated pricing and listing optimization is genuinely impressive and easy to use.",
    highlighted: true,
  },
  {
    name: "Robert Fox",
    avatar: imgEllipse23,
    review:
      "I manage 12 properties across three cities and this tool keeps everything organized. The cleaning schedule automation alone saves me hours every week.",
    highlighted: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.12}>
              <TestimonialCard
                name={t.name}
                avatar={t.avatar}
                review={t.review}
                highlighted={t.highlighted}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
