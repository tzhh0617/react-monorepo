import * as React from "react";
import { cn } from "@repo/utils";

export interface SidebarItem {
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string;
  active?: boolean;
}

interface AdminLayoutProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ title, subtitle, actions, sidebarItems, children }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Workspace</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">Control center</p>
        </div>
        <nav className="mt-6 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition",
                item.active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <span className="flex items-center gap-2">
                {item.icon ? <item.icon className="h-4 w-4" /> : null}
                {item.label}
              </span>
              {item.badge ? (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>
      </aside>
      <section className="space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dashboard</p>
            <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
            {subtitle ? <p className="mt-2 text-slate-500">{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </header>
        <div>{children}</div>
      </section>
    </div>
  );
};
