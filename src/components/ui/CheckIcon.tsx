"use client";

 

interface CheckIconProps {
  active?: boolean;
  size?: number;
}

const cricleCheckIcon   = "/assets/circle-check.svg";
const cricleCorssIcon   = "/assets/circle-corss.svg";

export function CheckIcon({ active = true, size = 16 }: CheckIconProps) {
  if (!active) {
    return (
      <img src={cricleCorssIcon} alt="" />
    );
  }
  return (
    <img src={cricleCheckIcon} alt="" />

  );
}
