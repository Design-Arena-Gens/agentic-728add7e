import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Agentic Greeting",
  description: "A friendly interactive greeting page."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${firaCode.className}`}>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
