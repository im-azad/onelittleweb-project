"use client";

 

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-8 border border-[#FAC4D2] flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      style={{ boxShadow: "0 0 0 transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(237, 60, 106, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 transparent";
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-[#fdebf0] flex items-center justify-center text-[#ed3c6a] flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-[#191d23] font-bold">{title}</h3>
        <p className="text-[#64748b] text-sm leading-relaxed">{description}</p>
      </div>
      <button className="inline-flex items-center justify-center self-start mt-auto px-4 py-2 cursor-pointer border border-[#ed3c6a] text-[#ed3c6a] rounded-full text-sm font-medium hover:bg-[#fdebf0] transition-colors">
        Read More
      </button>
    </div>
  );
}
