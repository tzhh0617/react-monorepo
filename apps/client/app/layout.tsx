import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Experience",
  description: "Customer facing storefront powered by Next.js monorepo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
