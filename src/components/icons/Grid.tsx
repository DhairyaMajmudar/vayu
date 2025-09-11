import type { FC } from "react";

import type { IconProps } from "./types";

export const Grid: FC<IconProps> = ({ className }) => (
  <svg
    className={`size-6 ${className}`}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M0 20h40M20 0v40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
