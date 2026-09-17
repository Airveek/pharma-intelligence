import type { FC } from "react";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { EvidenceCoverageData } from "@/types/overview";

interface EvidenceCoverageWidgetProps {
  data: EvidenceCoverageData;
}

export const EvidenceCoverageWidget: FC<EvidenceCoverageWidgetProps> = ({ data }) => {
  const radius = 26;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (data.coveragePercentage / 100) * circumference;

  return (
    <Card className="w-full py-0 gap-0">
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-1.5 px-5 py-4 border-b border-border/50">
        <CardTitle className="text-sm md:text-base font-bold text-foreground">
          Evidence coverage
        </CardTitle>

        <Tooltip>
          <TooltipTrigger
            className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded-full"
            aria-label="More information on evidence coverage"
          >
            <Info className="size-3.5" strokeWidth={2} />
          </TooltipTrigger>
          <TooltipContent side="top">
            Percentage of buyer claims verified by official regulatory sources and tenders.
          </TooltipContent>
        </Tooltip>
      </CardHeader>

      {/* Metric Gauge & Description */}
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          {/* Circular Progress Gauge */}
          <div className="relative grid size-16 shrink-0 place-items-center">
            <svg
              height={radius * 2 + 10}
              width={radius * 2 + 10}
              className="-rotate-90"
              aria-hidden="true"
            >
              {/* Background track */}
              <circle
                stroke="currentColor"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius + 5}
                cy={radius + 5}
                className="text-muted/60"
              />
              {/* Progress stroke */}
              <circle
                stroke="currentColor"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius + 5}
                cy={radius + 5}
                className="text-teal-600 dark:text-teal-400 transition-all duration-700 ease-out"
              />
            </svg>
            <span className="absolute text-sm font-bold tracking-tight text-foreground">
              {data.coveragePercentage}%
            </span>
          </div>

          {/* Text Description */}
          <div className="flex flex-col">
            <span className="text-xs font-bold text-foreground leading-tight">
              {data.title}
            </span>
            <span className="text-[11px] text-muted-foreground leading-snug mt-1">
              {data.description}
            </span>
          </div>
        </div>

        {/* Source Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {data.sources.map((source) => (
            <Badge
              key={source}
              variant="muted"
              size="sm"
              className="font-medium"
            >
              {source}
            </Badge>
          ))}
        </div>

        {/* Timestamp */}
        <div className="text-right text-[11px] text-muted-foreground mt-4 pt-2.5 border-t border-border/40">
          {data.refreshText}
        </div>
      </CardContent>
    </Card>
  );
};
