import type { FC } from "react";

export const SidebarStatus: FC = () => {
  return (
    <footer className="mt-auto pt-6 px-2">
      <p className="flex items-center gap-2 text-xs font-semibold text-foreground">
        <span className="size-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" aria-hidden="true" />
        Data refreshed today
      </p>
      <span className="block pl-4 text-xs text-muted-foreground">
        Last updated 12 Apr 2024, 08:32
      </span>
    </footer>
  );
};
