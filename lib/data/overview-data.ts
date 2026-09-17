import type {
  BuyerIntelligenceItem,
  EvidenceCoverageData,
  KpiMetricItem,
  MarketPulseItem,
  NextActionItem,
  PriorityOpportunityItem,
} from "@/types/overview";

export const OVERVIEW_KPIS: readonly KpiMetricItem[] = [
  {
    id: "priority-accounts",
    title: "Priority accounts",
    value: 42,
    changeText: "↑ 12% vs last month",
    changeType: "positive",
    iconName: "accounts",
  },
  {
    id: "buyer-signals",
    title: "Buyer signals",
    value: 18,
    changeText: "↑ 50% vs last month",
    changeType: "positive",
    iconName: "signals",
  },
  {
    id: "shipment-patterns",
    title: "Shipment patterns",
    value: 12,
    changeText: "↑ 33% vs last month",
    changeType: "positive",
    iconName: "shipments",
  },
  {
    id: "expiring-registrations",
    title: "Expiring registrations",
    value: 6,
    changeText: "↑ 200% vs last month",
    changeType: "warning",
    iconName: "registrations",
  },
] as const;

export const PRIORITY_OPPORTUNITIES: readonly PriorityOpportunityItem[] = [
  {
    id: "opp-1",
    product: "Metformin 500mg",
    market: "Ghana",
    countryCode: "ghana",
    signal: "3 registered products expire within 12 months",
    source: "Ghana FDA",
    actionType: "urgent",
    actionLabel: "Act this week",
  },
  {
    id: "opp-2",
    product: "Artemisinin combination",
    market: "Kenya",
    countryCode: "kenya",
    signal: "Tender activity rising",
    source: "KEMSA",
    actionType: "default",
    actionLabel: "View details",
  },
  {
    id: "opp-3",
    product: "Amoxicillin 500mg",
    market: "Nigeria",
    countryCode: "nigeria",
    signal: "Import demand up 24%",
    source: "NAFDAC + trade data",
    actionType: "default",
    actionLabel: "View details",
  },
] as const;

export const BUYER_INTELLIGENCE: readonly BuyerIntelligenceItem[] = [
  {
    id: "buyer-1",
    buyerName: "Ghana Health Service",
    country: "Ghana",
    countryCode: "ghana",
    recentActivity: "New tender published",
    activityDate: "12 Apr 2024",
    primaryProducts: ["Metformin", "Amlodipine"],
    additionalProductsCount: 3,
    lastShipmentDate: "Mar 2024",
    isVerified: true,
    sourcesCount: 3,
    lastSeenText: "last seen 2h ago",
  },
  {
    id: "buyer-2",
    buyerName: "KEMSA",
    country: "Kenya",
    countryCode: "kenya",
    recentActivity: "Tender activity rising",
    activityDate: "10 Apr 2024",
    primaryProducts: ["ACT", "Amoxicillin"],
    additionalProductsCount: 5,
    lastShipmentDate: "Feb 2024",
    isVerified: true,
    sourcesCount: 4,
    lastSeenText: "last seen 4h ago",
  },
  {
    id: "buyer-3",
    buyerName: "Medline Africa",
    country: "Kenya",
    countryCode: "kenya",
    recentActivity: "Increased imports",
    activityDate: "08 Apr 2024",
    primaryProducts: ["Metformin", "Losartan"],
    additionalProductsCount: 2,
    lastShipmentDate: "Feb 2024",
    isVerified: true,
    sourcesCount: 3,
    lastSeenText: "last seen 1d ago",
  },
] as const;

export const MARKET_PULSE_ITEMS: readonly MarketPulseItem[] = [
  {
    id: "market-ghana",
    country: "Ghana",
    countryCode: "ghana",
    opportunityScore: 82,
    trend: [64, 67, 70, 72, 75, 78, 82],
  },
  {
    id: "market-kenya",
    country: "Kenya",
    countryCode: "kenya",
    opportunityScore: 74,
    trend: [61, 63, 65, 66, 69, 71, 74],
  },
  {
    id: "market-nigeria",
    country: "Nigeria",
    countryCode: "nigeria",
    opportunityScore: 69,
    trend: [58, 60, 62, 63, 65, 67, 69],
  },
  {
    id: "market-rwanda",
    country: "Rwanda",
    countryCode: "rwanda",
    opportunityScore: 61,
    trend: [51, 53, 54, 56, 58, 59, 61],
  },
] as const;

export const EVIDENCE_COVERAGE_DATA: EvidenceCoverageData = {
  coveragePercentage: 91,
  title: "claims backed by sources",
  description: "Across buyers, shipments, regulatory data and tenders.",
  sources: ["Ghana FDA", "GHANEPS", "Customs data", "Company websites"],
  refreshText: "Refreshed today",
};

export const NEXT_ACTIONS: readonly NextActionItem[] = [
  {
    id: "action-buyers",
    title: "View buyers",
    description: "Explore 42 priority accounts",
    iconName: "buyers",
    href: "/?section=buyers",
  },
  {
    id: "action-shipments",
    title: "Track shipments",
    description: "Find new demand signals",
    iconName: "shipments",
    href: "/?section=shipments",
  },
  {
    id: "action-brief",
    title: "Build market brief",
    description: "Create a country or product brief",
    iconName: "brief",
    href: "/?section=market-briefs",
  },
] as const;
