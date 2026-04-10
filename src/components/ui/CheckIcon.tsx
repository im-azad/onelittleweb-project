"use client";

 

interface CheckIconProps {
  active?: boolean;
  size?: number;
}

export function CheckIcon({ active = true, size = 16 }: CheckIconProps) {
  if (!active) {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full bg-[#f7f8f9] flex-shrink-0"
        style={{ width: size + 16, height: size + 16 }}
      >
        <svg width={size} height={size} viewBox="0 0 9 9" fill="none">
          <path
            d="M1.5 4.5L7.5 4.5M1.5 1.5L7.5 7.5"
            stroke="#191D23"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[#fac4d2] flex-shrink-0"
      style={{ width: size + 16, height: size + 16 }}
    >
      <svg width={size} height={size} viewBox="0 0 12 9" fill="none">
        <path
          clipRule="evenodd"
          d="M11.0607 0.93934C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L5.06066 9.06066C4.47487 9.64645 3.52513 9.64645 2.93934 9.06066L0.93934 7.06066C0.353553 6.47487 0.353553 5.52513 0.93934 4.93934C1.52513 4.35355 2.47487 4.35355 3.06066 4.93934L4 5.87868L8.93934 0.93934C9.52513 0.353553 10.4749 0.353553 11.0607 0.93934Z"
          fill="#ED3C6A"
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
}
