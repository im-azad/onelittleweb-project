"use client";

import { AnimateIn } from "./AnimateIn";
import { SectionTitle } from "../ui/SectionTitle";
const imgImage1= "/assets/tools/1.png";
const imgImage2 = "/assets/tools/2.png";
const imgImage3 = "/assets/tools/3.png";
const imgImage4 = "/assets/tools/4.png";
const imgImage5 = "/assets/tools/5.png";


const tools = [
  { image: imgImage1 },
  { image: imgImage2 },
  { image: imgImage3 },
  { image: imgImage4 },
  { image: imgImage5 },
  { image: imgImage1 },
  { image: imgImage2 },
  { image: imgImage3 },
  { image: imgImage4 },

];

export function Tools() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <SectionTitle
            title={<><span className="text-[#191d23]">Our</span> <span className="text-[#ed3c6a]">Tools</span></>}
            description="We integrate seamlessly with the industry's leading property management tools and platforms."
            maxWidth="max-w-lg"
          />
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <AnimateIn key={i} delay={i * 0.05}>
              <div
                className="flex items-center justify-center w-[350px] h-[100px] gap-2 bg-white border border-gray-100 rounded-xl p-5 shadow-sm cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                {<img src={tool.image} alt="Tool" className="object-contain" />}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
