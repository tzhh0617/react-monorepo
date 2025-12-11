import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

const statCards = [
  { title: "Pending orders", value: 12 },
  { title: "Inventory", value: formatCurrency(42000) },
  { title: "Fulfillment SLA", value: "98%" }
];

export const Stats = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {statCards.map((stat) => (
      <Card key={stat.title} className="bg-white/5 text-white">
        <CardHeader>
          <CardTitle className="text-sm text-slate-200">{stat.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">{stat.value}</CardContent>
      </Card>
    ))}
  </div>
);
