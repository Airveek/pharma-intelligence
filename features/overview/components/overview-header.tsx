"use client";

import type { FC } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OverviewHeaderProps {
  userName?: string;
  onNewSearch?: () => void;
}

export const OverviewHeader: FC<OverviewHeaderProps> = ({
  userName = "Umesh",
  onNewSearch,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Good morning, {userName}
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          Find the next export opportunity with evidence you can trust.
        </p>
      </div>

      <Button
        type="button"
        size="lg"
        onClick={onNewSearch}
        className="font-semibold shadow-xs self-start sm:self-auto gap-1.5"
      >
        <Plus className="size-4 shrink-0" strokeWidth={2.2} />
        <span>New search</span>
      </Button>
    </div>
  );
};
