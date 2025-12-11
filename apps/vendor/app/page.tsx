import { Button, Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { Activity, CheckCheck, Database } from "lucide-react";

const stats = [
  {
    label: "Pending orders",
    value: 14,
    icon: CheckCheck
  },
  {
    label: "Inventory value",
    value: formatCurrency(42000),
    icon: Database
  },
  {
    label: "Fulfillment SLA",
    value: "98%",
    icon: Activity
  }
];

export default function VendorPage() {
  return (
    <section className="space-y-10 text-white">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Vendor</p>
          <h1 className="text-4xl font-semibold">Partner operations console</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Monitor catalog sync, fulfillment and payouts with reusable primitives from `@repo/ui`.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Sync catalog</Button>
          <Button variant="ghost">View logs</Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-white/5 text-white">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-base font-medium text-white/80">{stat.label}</CardTitle>
              <stat.icon className="h-5 w-5 text-white/80" />
            </CardHeader>
            <CardContent className="text-3xl font-semibold">{stat.value}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
