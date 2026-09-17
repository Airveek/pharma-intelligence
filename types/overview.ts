export type CountryCode = "ghana" | "kenya" | "nigeria" | "rwanda";

export interface KpiMetricItem {
  id: string;
  title: string;
  value: string | number;
  changeText: string;
  changeType: "positive" | "warning" | "neutral";
  iconName: "accounts" | "signals" | "shipments" | "registrations";
}

export interface PriorityOpportunityItem {
  id: string;
  product: string;
  market: string;
  countryCode: CountryCode;
  signal: string;
  source: string;
  actionType: "urgent" | "default";
  actionLabel: string;
}

export interface BuyerIntelligenceItem {
  id: string;
  buyerName: string;
  country: string;
  countryCode: CountryCode;
  recentActivity: string;
  activityDate: string;
  primaryProducts: string[];
  additionalProductsCount: number;
  lastShipmentDate: string;
  isVerified: boolean;
  sourcesCount: number;
  lastSeenText: string;
}

export interface MarketPulseItem {
  id: string;
  country: string;
  countryCode: CountryCode;
  opportunityScore: number;
  trend: number[];
}

export interface EvidenceCoverageData {
  coveragePercentage: number;
  title: string;
  description: string;
  sources: string[];
  refreshText: string;
}

export interface NextActionItem {
  id: string;
  title: string;
  description: string;
  iconName: "buyers" | "shipments" | "brief";
  href: string;
}
