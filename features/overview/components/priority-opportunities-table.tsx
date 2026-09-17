import type { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import type { PriorityOpportunityItem } from "@/types/overview";
import { cn } from "@/lib/utils";
import { CountryFlag } from "./country-flag";

interface PriorityOpportunitiesTableProps {
  opportunities: readonly PriorityOpportunityItem[];
}

export const PriorityOpportunitiesTable: FC<PriorityOpportunitiesTableProps> = ({
  opportunities,
}) => {
  return (
    <Card className="w-full py-0 gap-0">
      {/* Section Header */}
      <CardHeader className="flex flex-row items-center justify-between gap-4 px-5 py-4 border-b border-border/50">
        <div>
          <CardTitle className="text-sm md:text-base font-bold text-foreground">
            Priority opportunities
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-0.5">
            Signals worth acting on this week.
          </CardDescription>
        </div>

        <Link
          href="/?section=market-discovery"
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "h-auto p-0 gap-1 text-xs font-semibold text-primary"
          )}
        >
          <span>View all opportunities</span>
          <ArrowRight className="size-3.5" strokeWidth={2} />
        </Link>
      </CardHeader>

      {/* Table Content */}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border/50 hover:bg-transparent">
              <TableHead className="pl-5 text-xs font-medium text-muted-foreground h-9">Product</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Market</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Signal</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Source</TableHead>
              <TableHead className="pr-5 text-right text-xs font-medium text-muted-foreground h-9">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities.map((opp) => (
              <TableRow key={opp.id} className="hover:bg-muted/40 transition-colors">
                {/* Product */}
                <TableCell className="pl-5 py-3 whitespace-nowrap">
                  <Link
                    href={`/?section=market-discovery&product=${encodeURIComponent(opp.product)}`}
                    className="font-semibold text-primary hover:underline text-xs"
                  >
                    {opp.product}
                  </Link>
                </TableCell>

                {/* Market */}
                <TableCell className="py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-foreground font-medium text-xs">
                    <CountryFlag countryCode={opp.countryCode} />
                    <span>{opp.market}</span>
                  </div>
                </TableCell>

                {/* Signal */}
                <TableCell className="py-3 text-foreground font-medium text-xs">
                  {opp.signal}
                </TableCell>

                {/* Source */}
                <TableCell className="py-3 text-muted-foreground whitespace-nowrap font-medium text-xs">
                  {opp.source}
                </TableCell>

                {/* Action */}
                <TableCell className="pr-5 py-3 text-right whitespace-nowrap">
                  {opp.actionType === "urgent" ? (
                    <Badge variant="urgent" size="sm" className="cursor-pointer font-semibold">
                      {opp.actionLabel}
                    </Badge>
                  ) : (
                    <Button variant="outline" size="xs" className="text-xs font-medium text-muted-foreground hover:text-foreground">
                      {opp.actionLabel}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
