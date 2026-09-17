import { AppShell } from "@/components/layout/app-shell";
import { AppHeader } from "@/components/layout/header";
import { OverviewView } from "@/features/overview";
import { SIDEBAR_SECTION_IDS, type SidebarSection } from "@/types/navigation";

interface HomeProps {
  searchParams: Promise<{ section?: string | string[] }>;
}

function getSelectedSection(value: string | string[] | undefined): SidebarSection {
  const section = Array.isArray(value) ? value[0] : value;
  return section && (SIDEBAR_SECTION_IDS as readonly string[]).includes(section)
    ? (section as SidebarSection)
    : "overview";
}

export default async function Home({ searchParams }: HomeProps) {
  const { section } = await searchParams;
  const selectedSection = getSelectedSection(section);

  return (
    <AppShell selectedSection={selectedSection}>
      <AppHeader currentSectionTitle="Overview" />
      <OverviewView />
    </AppShell>
  );
}
