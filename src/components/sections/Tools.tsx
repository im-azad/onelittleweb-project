"use client";

 
import { AnimateIn } from "./AnimateIn";

const tools = [
  { name: "RealSuite",     color: "#e63946", bg: "#fff0f0", initial: "R"  },
  { name: "WheelHouse",   color: "#0077b6", bg: "#e8f4fd", initial: "W"  },
  { name: "Beyond Pricing",color: "#2d6a4f", bg: "#d8f3dc", initial: "BP" },
  { name: "Hostfully",    color: "#6a0572", bg: "#f3e5f5", initial: "H"  },
  { name: "Guesty",       color: "#0096c7", bg: "#e0f4fd", initial: "G"  },
  { name: "Lodgify",      color: "#e76f51", bg: "#fdebd0", initial: "L"  },
  { name: "Pricelabs",    color: "#c0392b", bg: "#fdecea", initial: "PL" },
  { name: "Tokeet",       color: "#1a5276", bg: "#d6eaf8", initial: "T"  },
  { name: "iGMS",         color: "#117a65", bg: "#d5f5e3", initial: "iG" },
  { name: "Smoobu",       color: "#6c3483", bg: "#f5eef8", initial: "S"  },
];

export function Tools() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <h2
            className="font-bold text-[#191d23] mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Our <span className="text-[#ed3c6a]">Tools</span>
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto">
            We integrate seamlessly with the industry&apos;s leading property
            management tools and platforms.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool, i) => (
            <AnimateIn key={tool.name} delay={i * 0.05}>
              <div
                className="flex items-center justify-center gap-2 bg-white border border-gray-100 rounded-xl py-4 px-3 shadow-sm cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs flex-shrink-0"
                  style={{ backgroundColor: tool.bg, color: tool.color }}
                >
                  {tool.initial}
                </span>
                <span className="font-semibold text-sm text-[#191d23] truncate">
                  {tool.name}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
