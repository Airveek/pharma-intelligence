import type { FC, ReactNode } from "react";
import { Sidebar } from "./sidebar";
import type { SidebarSection } from "@/types/navigation";

interface AppShellProps {
  selectedSection: SidebarSection;
  children: ReactNode;
}

export const AppShell: FC<AppShellProps> = ({ selectedSection, children }) => {
  return (
    <div className="flex min-h-dvh flex-col md:flex-row bg-background text-foreground">
      <Sidebar selectedSection={selectedSection} />
      <main className="flex-1 min-w-0 min-h-dvh bg-background" aria-labelledby="page-title">
        {children}
      </main>
    </div>
  );
};
