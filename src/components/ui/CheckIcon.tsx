"use client";

interface CheckIconProps {
  active?: boolean;
}

export function CheckIcon({ active = true }: CheckIconProps) {
  if (!active) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src="/assets/circle-corss.svg" alt="" />;
  }
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src="/assets/circle-check.svg" alt="" />;
}
