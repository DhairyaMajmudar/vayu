import type { FC } from "react";

import type { IconProps } from "./types";

export const LogoIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={`size-6 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path d="M4 10c2-2 8-2 10 0s4 2 6 0" />
    <path d="M6 14c1.5-1.5 6-1.5 7.5 0s3 1.5 4.5 0" />
    <path d="M8 18c1-1 4-1 5 0s2 1 3 0" />
  </svg>
);
