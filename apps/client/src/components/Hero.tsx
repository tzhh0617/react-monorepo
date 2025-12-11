import { Button } from "@repo/ui";

export const Hero = () => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Client</p>
    <h1 className="mt-2 text-4xl font-semibold text-slate-900">Unified shopping experience</h1>
    <p className="mt-4 text-lg text-slate-600">
      React + Vite + Tailwind powered storefront consuming the shared UI kit in this monorepo.
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <Button>Browse catalog</Button>
      <Button variant="outline">Request demo</Button>
    </div>
  </div>
);
