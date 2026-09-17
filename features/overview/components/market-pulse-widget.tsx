import type { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { MarketPulseItem } from "@/types/overview";
import { cn } from "@/lib/utils";
import { CountryFlag } from "./country-flag";
import { Sparkline } from "./sparkline";

interface MarketPulseWidgetProps {
  items: readonly MarketPulseItem[];
}

export const MarketPulseWidget: FC<MarketPulseWidgetProps> = ({ items }) => {
  return (
    <Card className="w-full py-0 gap-0">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between gap-2 px-5 py-4 border-b border-border/50">
        <CardTitle className="text-sm md:text-base font-bold text-foreground">
          Market pulse
        </CardTitle>
        <Link
          href="/?section=market-discovery"
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "h-auto p-0 gap-1 text-xs font-semibold text-primary"
          )}
        >
          <span>View all</span>
          <ArrowRight className="size-3.5" strokeWidth={2} />
        </Link>
      </CardHeader>

      {/* Table */}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border/50 hover:bg-transparent">
              <TableHead className="pl-5 text-xs font-medium text-muted-foreground h-9">Country</TableHead>
              <TableHead className="text-center text-xs font-medium text-muted-foreground h-9">Opportunity score</TableHead>
              <TableHead className="pr-5 text-right text-xs font-medium text-muted-foreground h-9">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/40 transition-colors">
                {/* Country */}
                <TableCell className="pl-5 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2 font-medium text-foreground text-xs">
                    <CountryFlag countryCode={item.countryCode} />
                    <span>{item.country}</span>
                  </div>
                </TableCell>

                {/* Score */}
                <TableCell className="py-3 text-center font-bold text-foreground text-xs md:text-sm">
                  {item.opportunityScore}
                </TableCell>

                {/* Sparkline Trend */}
                <TableCell className="pr-5 py-3 text-right">
                  <div className="inline-flex justify-end">
                    <Sparkline data={item.trend} width={64} height={18} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
