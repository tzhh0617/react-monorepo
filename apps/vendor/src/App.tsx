import { Stats } from "./components/Stats";
import { Button } from "@repo/ui";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10 text-white">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Vendor</p>
      <h1 className="mt-2 text-4xl font-semibold">Partner Ops Console</h1>
      <p className="mt-4 max-w-2xl text-center text-slate-200">
        Manage catalog sync, inventory allocation and order fulfillment with a Vite + Tailwind surface that
        reuses shared UI primitives.
      </p>
      <div className="mt-6 flex gap-4">
        <Button variant="secondary">Sync catalog</Button>
        <Button variant="ghost">View logs</Button>
      </div>
      <div className="mt-10 w-full max-w-5xl">
        <Stats />
      </div>
    </div>
  );
}

export default App;
