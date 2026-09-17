import type { FC } from "react";
import type { CountryCode } from "@/types/overview";
import { cn } from "@/lib/utils";

interface CountryFlagProps {
  countryCode: CountryCode;
  className?: string;
}

export const CountryFlag: FC<CountryFlagProps> = ({ countryCode, className }) => {
  switch (countryCode) {
    case "ghana":
      return (
        <svg
          viewBox="0 0 36 24"
          className={cn("h-3.5 w-5 rounded-xs shrink-0 shadow-xs border border-border/40", className)}
          aria-hidden="true"
        >
          {/* Ghana Flag: Red, Yellow with Black Star, Green */}
          <rect width="36" height="8" fill="#CE1126" />
          <rect y="8" width="36" height="8" fill="#FCD116" />
          <rect y="16" width="36" height="8" fill="#006B3F" />
          {/* Black star in center */}
          <polygon
            points="18,8.8 19.2,12.2 22.8,12.2 19.9,14.3 21,17.7 18,15.6 15,17.7 16.1,14.3 13.2,12.2 16.8,12.2"
            fill="#000000"
          />
        </svg>
      );

    case "kenya":
      return (
        <svg
          viewBox="0 0 36 24"
          className={cn("h-3.5 w-5 rounded-xs shrink-0 shadow-xs border border-border/40", className)}
          aria-hidden="true"
        >
          {/* Kenya Flag: Black, White border, Red, White border, Green */}
          <rect width="36" height="7" fill="#000000" />
          <rect y="7" width="36" height="1.5" fill="#FFFFFF" />
          <rect y="8.5" width="36" height="7" fill="#922529" />
          <rect y="15.5" width="36" height="1.5" fill="#FFFFFF" />
          <rect y="17" width="36" height="7" fill="#006600" />
          {/* Maasai shield */}
          <ellipse cx="18" cy="12" rx="3.5" ry="6" fill="#922529" stroke="#FFFFFF" strokeWidth="0.6" />
          <circle cx="18" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case "nigeria":
      return (
        <svg
          viewBox="0 0 36 24"
          className={cn("h-3.5 w-5 rounded-xs shrink-0 shadow-xs border border-border/40", className)}
          aria-hidden="true"
        >
          {/* Nigeria Flag: Green, White, Green */}
          <rect width="12" height="24" fill="#008751" />
          <rect x="12" width="12" height="24" fill="#FFFFFF" />
          <rect x="24" width="12" height="24" fill="#008751" />
        </svg>
      );

    case "rwanda":
      return (
        <svg
          viewBox="0 0 36 24"
          className={cn("h-3.5 w-5 rounded-xs shrink-0 shadow-xs border border-border/40", className)}
          aria-hidden="true"
        >
          {/* Rwanda Flag: Blue (double), Yellow, Green */}
          <rect width="36" height="12" fill="#00A1DE" />
          <rect y="12" width="36" height="6" fill="#FAD201" />
          <rect y="18" width="36" height="6" fill="#20603D" />
          {/* Sun emblem */}
          <circle cx="28" cy="6" r="2.5" fill="#FAD201" />
        </svg>
      );

    default:
      return null;
  }
};
