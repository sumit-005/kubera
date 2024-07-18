import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers/providers";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  preload: true, // Preload the font
  fallback: ["sans-serif"], // Fallback fonts
  display: "swap", // Specify the font-display
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Kubera",
  description: "Mangage you money with Kubera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-background text-foreground">
        <Providers>
          <Toaster />
          <ThemeToggle />
          <main className="min-h-screen p-4 lg:w-1/2 lg:mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
