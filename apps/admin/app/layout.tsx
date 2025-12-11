import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Monorepo powered admin control center"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
