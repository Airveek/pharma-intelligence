"use client";

import type { FC } from "react";
import Link from "next/link";
import { Bell, CircleHelp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  currentSectionTitle?: string;
}

export const AppHeader: FC<AppHeaderProps> = ({
  currentSectionTitle = "Overview",
}) => {
  return (
    <header className="sticky top-0 z-20 flex h-14 w-full shrink-0 items-center justify-between border-b border-border/60 bg-background/95 px-4 sm:px-6 md:px-8 backdrop-blur-sm">
      {/* Left: Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList className="text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground/40" />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-foreground">
              {currentSectionTitle}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Right Actions: Help, Alerts, Avatar */}
      <div className="flex items-center gap-3">
        {/* Help Link */}
        <Link
          href="#help"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "hidden sm:inline-flex gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground h-8 px-2.5"
          )}
        >
          <CircleHelp className="size-4" strokeWidth={1.8} />
          <span>Help</span>
        </Link>

        {/* Alerts Button with Badge */}
        <Button
          variant="ghost"
          size="sm"
          className="relative inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground h-8 px-2.5"
          aria-label="Alerts, 3 unread"
        >
          <Bell className="size-4" strokeWidth={1.8} />
          <span>Alerts</span>
          <Badge
            variant="urgent"
            size="sm"
            className="h-4 min-w-4 px-1 text-[10px] font-bold leading-none select-none rounded-full"
          >
            3
          </Badge>
        </Button>

        {/* User Profile Avatar */}
        <Avatar size="sm" className="cursor-pointer ring-1 ring-primary/25 transition-transform hover:scale-105">
          <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
            UR
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
