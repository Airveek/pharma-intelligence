import type { FC } from "react";
import { cn } from "@/lib/utils";

interface SparklineProps {
  data: readonly number[];
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Sparkline: FC<SparklineProps> = ({
  data,
  color = "#10b981", // Emerald/green
  className,
  width = 72,
  height = 20,
}) => {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;
  const effectiveHeight = height - padding * 2;

  const points = data.map((val, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - padding - ((val - min) / range) * effectiveHeight;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

  // Unique ID for SVG gradient definition
  const gradientId = `sparkline-grad-${points.length}-${min}-${max}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("overflow-visible shrink-0", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      {/* Soft gradient fill under curve */}
      <path d={areaD} fill={`url(#${gradientId})`} />
      {/* Trend line */}
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
