import type { FC } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
import type { BuyerIntelligenceItem } from "@/types/overview";
import { cn } from "@/lib/utils";

interface BuyerIntelligenceTableProps {
  buyers: readonly BuyerIntelligenceItem[];
}

export const BuyerIntelligenceTable: FC<BuyerIntelligenceTableProps> = ({ buyers }) => {
  return (
    <Card className="w-full py-0 gap-0">
      {/* Section Header */}
      <CardHeader className="flex flex-row items-center justify-between gap-4 px-5 py-4 border-b border-border/50">
        <div>
          <CardTitle className="text-sm md:text-base font-bold text-foreground">
            Buyer intelligence
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-0.5">
            Recent buyer activity and engagement signals.
          </CardDescription>
        </div>

        <Link
          href="/?section=buyers"
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "h-auto p-0 gap-1 text-xs font-semibold text-primary"
          )}
        >
          <span>View all buyers</span>
          <ArrowRight className="size-3.5" strokeWidth={2} />
        </Link>
      </CardHeader>

      {/* Table Content */}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border/50 hover:bg-transparent">
              <TableHead className="pl-5 text-xs font-medium text-muted-foreground h-9">Buyer / market</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Recent activity</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Products</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Last shipment</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground h-9">Evidence</TableHead>
              <TableHead className="pr-5 text-right text-xs font-medium text-muted-foreground h-9">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buyers.map((buyer) => (
              <TableRow key={buyer.id} className="hover:bg-muted/40 transition-colors">
                {/* Buyer / Market */}
                <TableCell className="pl-5 py-3 whitespace-nowrap">
                  <Link
                    href={`/?section=buyers&buyerId=${buyer.id}`}
                    className="font-semibold text-primary hover:underline block leading-snug text-xs"
                  >
                    {buyer.buyerName}
                  </Link>
                  <span className="text-[11px] text-muted-foreground block mt-0.5 font-medium">
                    {buyer.country}
                  </span>
                </TableCell>

                {/* Recent activity */}
                <TableCell className="py-3 whitespace-nowrap">
                  <span className="font-medium text-foreground block text-xs">
                    {buyer.recentActivity}
                  </span>
                  <span className="text-[11px] text-muted-foreground block mt-0.5">
                    {buyer.activityDate}
                  </span>
                </TableCell>

                {/* Products */}
                <TableCell className="py-3 whitespace-nowrap">
                  <span className="font-medium text-foreground block text-xs">
                    {buyer.primaryProducts.join(", ")}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium block mt-0.5">
                    +{buyer.additionalProductsCount} more
                  </span>
                </TableCell>

                {/* Last shipment */}
                <TableCell className="py-3 whitespace-nowrap text-muted-foreground font-medium text-xs">
                  {buyer.lastShipmentDate}
                </TableCell>

                {/* Evidence */}
                <TableCell className="py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    {buyer.isVerified && (
                      <Badge variant="success" size="sm" className="gap-1 font-semibold">
                        <Check className="size-3" strokeWidth={2.5} />
                        <span>verified</span>
                      </Badge>
                    )}
                    <Badge variant="info" size="sm" className="font-semibold">
                      {buyer.sourcesCount} sources
                    </Badge>
                  </div>
                  <span className="text-[11px] text-muted-foreground block mt-1 font-normal">
                    {buyer.lastSeenText}
                  </span>
                </TableCell>

                {/* Action Link */}
                <TableCell className="pr-5 py-3 text-right whitespace-nowrap">
                  <Link
                    href={`/?section=buyers&buyerId=${buyer.id}`}
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "h-auto p-0 gap-1 text-xs font-semibold text-primary"
                    )}
                  >
                    <span>Open buyer profile</span>
                    <ArrowRight className="size-3.5" strokeWidth={2} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
