import { Button, Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import { ShoppingBag, Sparkles, Truck } from "lucide-react";

const perks = [
  {
    label: "Next-day delivery regions",
    value: "18",
    icon: Truck
  },
  {
    label: "Avg. cart value",
    value: formatCurrency(186),
    icon: ShoppingBag
  },
  {
    label: "Launch campaigns",
    value: "4 running",
    icon: Sparkles
  }
];

export default function ClientPage() {
  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Client</p>
          <h1 className="text-4xl font-semibold">Unified shopping experience</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Showcase storefront modules composed from our shared UI library.
          </p>
        </div>
        <div className="flex gap-3">
          <Button size="lg">Browse catalog</Button>
          <Button size="lg" variant="outline">
            Request demo
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {perks.map((perk) => (
          <Card key={perk.label}>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                {perk.label}
              </CardTitle>
              <perk.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent className="text-3xl font-semibold">{perk.value}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
