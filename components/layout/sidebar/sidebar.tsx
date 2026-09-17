"use client";

import { useState, type FC } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import { DEFAULT_WORKSPACE, PRIMARY_NAV_ITEMS, UTILITY_NAV_ITEMS } from "@/lib/constants";
import type { SidebarSection } from "@/types/navigation";
import { SidebarBrand } from "./sidebar-brand";
import { SidebarWorkspace } from "./sidebar-workspace";
import { SidebarNav } from "./sidebar-nav";
import { SidebarStatus } from "./sidebar-status";

interface SidebarProps {
  selectedSection: SidebarSection;
}

export const Sidebar: FC<SidebarProps> = ({ selectedSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex w-sidebar min-h-dvh flex-col border-r border-sidebar-border bg-sidebar p-3 shrink-0"
        aria-label="Primary navigation"
      >
        <SidebarBrand />
        <SidebarWorkspace workspace={DEFAULT_WORKSPACE} />
        <SidebarNav
          primaryItems={PRIMARY_NAV_ITEMS}
          utilityItems={UTILITY_NAV_ITEMS}
          selectedSection={selectedSection}
        />
        <SidebarStatus />
      </aside>

      {/* Mobile Sidebar Trigger & Drawer */}
      <div className="block md:hidden border-b border-sidebar-border bg-sidebar p-3">
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-semibold text-card-foreground shadow-xs transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Open navigation"
          >
            <Menu className="size-5" strokeWidth={2} />
            <span>Menu</span>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-40 min-h-dvh bg-black/40 backdrop-blur-xs transition-opacity duration-150" />
            <Dialog.Popup className="fixed inset-y-0 left-0 z-50 flex w-sidebar max-w-xs min-h-dvh flex-col overflow-y-auto bg-sidebar p-3 shadow-xl transition-transform duration-200">
              <Dialog.Title className="sr-only">Pharma Intelligence navigation</Dialog.Title>
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Navigation</span>
                <Dialog.Close
                  className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Close navigation"
                >
                  <X className="size-4" strokeWidth={2} />
                </Dialog.Close>
              </div>
              <SidebarBrand />
              <SidebarWorkspace workspace={DEFAULT_WORKSPACE} />
              <SidebarNav
                primaryItems={PRIMARY_NAV_ITEMS}
                utilityItems={UTILITY_NAV_ITEMS}
                selectedSection={selectedSection}
                onNavigate={() => setMobileOpen(false)}
              />
              <SidebarStatus />
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};
