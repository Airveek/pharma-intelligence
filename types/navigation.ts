export const SIDEBAR_SECTION_IDS = [
  "overview",
  "market-discovery",
  "buyers",
  "shipments",
  "contacts",
  "products-regulatory",
  "tender-radar",
  "suppliers",
  "saved-searches",
  "market-briefs",
] as const;

export type SidebarSection = (typeof SIDEBAR_SECTION_IDS)[number];

export type NavItemIcon =
  | "overview"
  | "market"
  | "buyers"
  | "shipments"
  | "contacts"
  | "products"
  | "tender"
  | "suppliers"
  | "saved"
  | "briefs";

export interface NavItem {
  id: SidebarSection;
  label: string;
  href: string;
  icon: NavItemIcon;
}

export interface WorkspaceSummary {
  name: string;
  role: string;
  tagline: string;
  isMock: boolean;
}
