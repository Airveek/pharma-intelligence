import type { FC } from "react";
import Link from "next/link";
import {
  CheckSquare,
  ChevronRight,
  FileText,
  Radio,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NextActionItem } from "@/types/overview";

interface NextActionsWidgetProps {
  actions: readonly NextActionItem[];
}

const actionIcons: Record<NextActionItem["iconName"], LucideIcon> = {
  buyers: UsersRound,
  shipments: Radio,
  brief: FileText,
};

export const NextActionsWidget: FC<NextActionsWidgetProps> = ({ actions }) => {
  return (
    <Card className="w-full py-0 gap-0">
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-2 px-5 py-4 border-b border-border/50">
        <CheckSquare className="size-4 text-muted-foreground" strokeWidth={2} />
        <CardTitle className="text-sm md:text-base font-bold text-foreground">
          Next actions
        </CardTitle>
      </CardHeader>

      {/* Action Items */}
      <CardContent className="px-5 py-2">
        <ul className="divide-y divide-border/40" role="list">
          {actions.map((action) => {
            const Icon = actionIcons[action.iconName];

            return (
              <li key={action.id}>
                <Link
                  href={action.href}
                  className="group flex items-center justify-between gap-3 py-3 transition-colors hover:bg-muted/30 -mx-2 px-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 shadow-xs transition-transform group-hover:scale-105"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={1.8} />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                        {action.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground mt-0.5">
                        {action.description}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};
