import type { FC } from "react";

export const SidebarBrand: FC = () => {
  return (
    <header className="flex items-center gap-3 px-2">
      <div
        className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground text-xl font-bold leading-none shadow-sm select-none"
        aria-hidden="true"
      >
        P
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-tight text-foreground">
          Pharma Intelligence
        </span>
        <span className="text-xs text-muted-foreground">
          Exporter workspace
        </span>
      </div>
    </header>
  );
};
