"use client";

import type { FC } from "react";
import Link from "next/link";
import {
  Bookmark,
  Building2,
  ClipboardList,
  ContactRound,
  FileText,
  Home,
  Search,
  Target,
  Truck,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { NavItem, NavItemIcon, SidebarSection } from "@/types/navigation";

const iconMap: Record<NavItemIcon, LucideIcon> = {
  overview: Home,
  market: Search,
  buyers: UsersRound,
  shipments: Truck,
  contacts: ContactRound,
  products: FileText,
  tender: Target,
  suppliers: Building2,
  saved: Bookmark,
  briefs: ClipboardList,
};

interface SidebarNavProps {
  primaryItems: readonly NavItem[];
  utilityItems: readonly NavItem[];
  selectedSection: SidebarSection;
  onNavigate?: () => void;
}

export const SidebarNav: FC<SidebarNavProps> = ({
  primaryItems,
  utilityItems,
  selectedSection,
  onNavigate,
}) => {
  return (
    <nav className="mt-6" aria-label="Primary navigation">
      <ul className="space-y-1">
        {primaryItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            selected={selectedSection === item.id}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
      <Separator className="my-4 bg-sidebar-border" />
      <ul className="space-y-1">
        {utilityItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            selected={selectedSection === item.id}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};

interface SidebarNavItemProps {
  item: NavItem;
  selected: boolean;
  onNavigate?: () => void;
}

const SidebarNavItem: FC<SidebarNavItemProps> = ({ item, selected, onNavigate }) => {
  const Icon = iconMap[item.icon];

  return (
    <li>
      <Link
        className={cn(
          "flex min-h-11 items-center gap-4 rounded-md px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          selected
            ? "bg-sidebar-accent text-primary font-semibold [&>svg]:text-primary"
            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-primary [&>svg]:text-muted-foreground hover:[&>svg]:text-primary"
        )}
        href={item.href}
        aria-current={selected ? "page" : undefined}
        onClick={onNavigate}
      >
        <Icon className="size-5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
        <span>{item.label}</span>
      </Link>
    </li>
  );
};
