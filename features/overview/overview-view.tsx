import type { FC } from "react";
import {
  BUYER_INTELLIGENCE,
  EVIDENCE_COVERAGE_DATA,
  MARKET_PULSE_ITEMS,
  NEXT_ACTIONS,
  OVERVIEW_KPIS,
  PRIORITY_OPPORTUNITIES,
} from "@/lib/data/overview-data";
import { BuyerIntelligenceTable } from "./components/buyer-intelligence-table";
import { EvidenceCoverageWidget } from "./components/evidence-coverage-widget";
import { KpiMetricGrid } from "./components/kpi-metric-card";
import { MarketPulseWidget } from "./components/market-pulse-widget";
import { NextActionsWidget } from "./components/next-actions-widget";
import { OverviewHeader } from "./components/overview-header";
import { OverviewSearchBar } from "./components/overview-search-bar";
import { PriorityOpportunitiesTable } from "./components/priority-opportunities-table";

export const OverviewView: FC = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-4 sm:px-6 md:px-8 py-6">
      {/* 1. Page Greeting & CTA */}
      <OverviewHeader userName="Umesh" />

      {/* 2. Global Search & Filter Pills */}
      <OverviewSearchBar />

      {/* 3. 4-Card Summary KPI Grid */}
      <KpiMetricGrid metrics={OVERVIEW_KPIS} />

      {/* 4. Two-Column Dashboard Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start w-full">
        {/* Left Column: Priority Opportunities & Buyer Intelligence */}
        <div className="lg:col-span-8 flex flex-col gap-5 min-w-0">
          <PriorityOpportunitiesTable opportunities={PRIORITY_OPPORTUNITIES} />
          <BuyerIntelligenceTable buyers={BUYER_INTELLIGENCE} />
        </div>

        {/* Right Column: Market Pulse, Evidence Coverage, Next Actions */}
        <div className="lg:col-span-4 flex flex-col gap-5 min-w-0">
          <MarketPulseWidget items={MARKET_PULSE_ITEMS} />
          <EvidenceCoverageWidget data={EVIDENCE_COVERAGE_DATA} />
          <NextActionsWidget actions={NEXT_ACTIONS} />
        </div>
      </div>
    </div>
  );
};
