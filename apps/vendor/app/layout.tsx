import type { Metadata } from "next";
import "@repo/ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Vendor Console",
  description: "Partner operations console running on shared Next.js monorepo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-portal="vendor" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
          <div className="mx-auto max-w-5xl px-6 py-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
