"use client";

import type { FC } from "react";
import { Popover } from "@base-ui/react/popover";
import { Building2, ChevronDown, Store } from "lucide-react";
import type { WorkspaceSummary } from "@/types/navigation";

interface SidebarWorkspaceProps {
  workspace: WorkspaceSummary;
}

export const SidebarWorkspace: FC<SidebarWorkspaceProps> = ({ workspace }) => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className="mt-6 flex min-h-14 w-full items-center gap-2.5 rounded-lg border border-sidebar-border bg-card p-2 text-left text-card-foreground shadow-xs transition-all duration-150 hover:border-sidebar-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label="Open workspace menu"
      >
        <span
          className="grid size-8 shrink-0 place-items-center rounded-full bg-muted/80 text-foreground"
          aria-hidden="true"
        >
          <Store className="size-4" strokeWidth={1.8} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="truncate text-xs font-bold text-foreground">
            {workspace.name}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {workspace.tagline}
          </span>
        </span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.8} aria-hidden="true" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className="z-30" side="bottom" align="start" sideOffset={8}>
          <Popover.Popup className="w-56 rounded-lg border border-border bg-popover p-3 text-popover-foreground shadow-lg">
            <Popover.Title className="text-xs font-bold text-foreground">Workspace</Popover.Title>
            <Popover.Description className="my-1 mb-2.5 text-xs text-muted-foreground">
              Synthetic demo workspace
            </Popover.Description>
            <button
              className="flex w-full items-center gap-2 rounded-md bg-sidebar-accent/60 p-2 text-left text-foreground transition-colors hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              type="button"
              aria-pressed="true"
            >
              <span
                className="grid size-7 shrink-0 place-items-center rounded-md bg-primary/15 text-primary"
                aria-hidden="true"
              >
                <Building2 className="size-4" />
              </span>
              <span className="flex flex-col">
                <strong className="text-xs font-semibold leading-tight">{workspace.name}</strong>
                <small className="text-xs text-muted-foreground leading-tight">{workspace.role}</small>
              </span>
              <span className="ml-auto text-emerald-600 text-sm font-semibold" aria-hidden="true">✓</span>
            </button>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};
