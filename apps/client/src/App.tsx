import { Hero } from "./components/Hero";
import { formatCurrency } from "@repo/utils";

const highlights = [
  { title: "Orders", value: 742 },
  { title: "Conversion", value: "4.3%" },
  { title: "Avg. Basket", value: formatCurrency(182) }
];

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10">
      <Hero />
      <div className="mt-10 grid w-full max-w-4xl gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">{item.title}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
