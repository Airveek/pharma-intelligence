import type { FC } from "react";
import { Activity, AlertTriangle, Package, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { KpiMetricItem } from "@/types/overview";
import { cn } from "@/lib/utils";

interface KpiMetricCardProps {
  item: KpiMetricItem;
}

interface IconConfig {
  icon: LucideIcon;
  containerClass: string;
}

const iconConfigs: Record<KpiMetricItem["iconName"], IconConfig> = {
  accounts: {
    icon: Users,
    containerClass: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
  },
  signals: {
    icon: Activity,
    containerClass: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
  },
  shipments: {
    icon: Package,
    containerClass: "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400",
  },
  registrations: {
    icon: AlertTriangle,
    containerClass: "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400",
  },
};

export const KpiMetricCard: FC<KpiMetricCardProps> = ({ item }) => {
  const config = iconConfigs[item.iconName];
  const Icon = config.icon;
  const isWarning = item.changeType === "warning";

  return (
    <Card className="hover:shadow-sm transition-all duration-150 py-3.5">
      <CardContent className="flex items-start justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Metric Icon */}
          <div
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-lg shadow-xs",
              config.containerClass
            )}
            aria-hidden="true"
          >
            <Icon className="size-4.5" strokeWidth={1.8} />
          </div>

          {/* Metric Value & Label */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-foreground leading-none">
              {item.value}
            </span>
            <span className="text-xs font-medium text-muted-foreground mt-1.5">
              {item.title}
            </span>
          </div>
        </div>

        {/* Metric Trend */}
        <div className="text-right">
          <span
            className={cn(
              "text-xs font-semibold block leading-tight",
              isWarning
                ? "text-rose-600 dark:text-rose-400"
                : "text-emerald-600 dark:text-emerald-400"
            )}
          >
            {item.changeText.split(" vs ")[0]}
          </span>
          <span className="text-[11px] text-muted-foreground block leading-tight mt-0.5">
            vs last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

interface KpiMetricGridProps {
  metrics: readonly KpiMetricItem[];
}

export const KpiMetricGrid: FC<KpiMetricGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {metrics.map((metric) => (
        <KpiMetricCard key={metric.id} item={metric} />
      ))}
    </div>
  );
};
