"use client";

import { useState, type FC } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FilterOption {
  id: string;
  label: string;
}

const FILTER_PILLS: readonly FilterOption[] = [
  { id: "market", label: "Market" },
  { id: "product", label: "Product" },
  { id: "signal", label: "Signal" },
  { id: "evidence", label: "Evidence" },
] as const;

export const OverviewSearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (id: string) => {
    setActiveFilter((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Search Input Box */}
      <div className="group relative flex w-full items-center rounded-lg border border-border/70 bg-card px-3.5 py-1.5 shadow-xs transition-all focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20">
        <Search
          className="size-4.5 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary mr-2.5"
          strokeWidth={2}
        />

        <label htmlFor="global-search" className="sr-only">
          Search medicines, buyers, shipments, contacts
        </label>

        <Input
          id="global-search"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search medicines, buyers, shipments, contacts..."
          className="h-8 border-0 bg-transparent px-0 text-xs md:text-sm shadow-none focus-visible:ring-0 focus-visible:border-0 placeholder:text-muted-foreground"
        />

        <Badge
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex items-center gap-0.5 font-mono text-[10px] text-muted-foreground bg-muted/40 font-normal px-1.5 py-0.5 rounded ml-2 select-none shrink-0"
        >
          <span className="text-xs">⌘</span>K
        </Badge>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTER_PILLS.map((pill) => {
          const isActive = activeFilter === pill.id;
          return (
            <Button
              key={pill.id}
              variant={isActive ? "secondary" : "outline"}
              size="xs"
              onClick={() => toggleFilter(pill.id)}
              className={cn(
                "rounded-full gap-1 text-xs font-medium h-7 px-3",
                isActive
                  ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/15"
                  : "border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              aria-pressed={isActive}
            >
              <span>{pill.label}</span>
              <ChevronDown
                className={cn("size-3 transition-transform", isActive && "rotate-180")}
                strokeWidth={2}
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
