import type { NavItem, WorkspaceSummary } from "@/types/navigation";

export const DEFAULT_WORKSPACE: WorkspaceSummary = {
  name: "Arden Exports",
  role: "Exporter workspace",
  tagline: "Grow markets. Better health.",
  isMock: true,
};

export const PRIMARY_NAV_ITEMS: readonly NavItem[] = [
  { id: "overview", label: "Overview", href: "/", icon: "overview" },
  { id: "market-discovery", label: "Market discovery", href: "/?section=market-discovery", icon: "market" },
  { id: "buyers", label: "Buyers", href: "/?section=buyers", icon: "buyers" },
  { id: "shipments", label: "Shipments", href: "/?section=shipments", icon: "shipments" },
  { id: "contacts", label: "Contacts", href: "/?section=contacts", icon: "contacts" },
  { id: "products-regulatory", label: "Products & regulatory", href: "/?section=products-regulatory", icon: "products" },
  { id: "tender-radar", label: "Tender radar", href: "/?section=tender-radar", icon: "tender" },
  { id: "suppliers", label: "Suppliers", href: "/?section=suppliers", icon: "suppliers" },
] as const;

export const UTILITY_NAV_ITEMS: readonly NavItem[] = [
  { id: "saved-searches", label: "Saved searches", href: "/?section=saved-searches", icon: "saved" },
  { id: "market-briefs", label: "Market briefs", href: "/?section=market-briefs", icon: "briefs" },
] as const;
