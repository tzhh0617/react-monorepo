import { Button, Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { BadgeCheck, Users } from "lucide-react";

const metrics = [
  { label: "Vendors onboarded", value: 42, icon: BadgeCheck },
  { label: "Active clients", value: 128, icon: Users },
  { label: "Monthly revenue", value: formatCurrency(185000) }
];

export default function Page() {
  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Monorepo</p>
          <h1 className="text-3xl font-semibold">Admin Control Center</h1>
        </div>
        <Button size="lg">Create Workspace</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">
              {metric.icon ? (
                <metric.icon className="mr-2 inline h-6 w-6 text-primary" />
              ) : null}
              {metric.value}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
