"use client";

 

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelLeft?: string;
  labelRight?: string;
}

export function Toggle({ checked, onChange, labelLeft, labelRight }: ToggleProps) {
  return (
    <div className="flex items-center gap-4">
      {labelLeft && (
        <span className="text-[#191d23] text-base font-normal">{labelLeft}</span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
          checked ? "bg-[#ed3c6a]" : "bg-[rgba(4,9,33,0.32)]"
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow transition-transform duration-250 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {labelRight && (
        <span className="text-[#191d23] text-base font-normal">{labelRight}</span>
      )}
    </div>
  );
}
