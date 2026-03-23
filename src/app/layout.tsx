import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LockScreen from "@/components/LockScreen";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GCT Integrated Digital Solutions Proposal | MVNE",
  description:
    "Combined proposal for GCT covering DBOT, CXG, TeSIM, Cyber Insurance, Bitdefender, Xanite, and PersAIc.",
  keywords: [
    "GCT",
    "MVNE",
    "DSG",
    "DBOT",
    "CXG",
    "TeSIM",
    "Cyber Insurance",
    "Bitdefender",
    "Xanite",
    "PersAIc",
    "MVNO",
  ],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className={`${inter.className} antialiased min-h-full`}>
        <LockScreen>{children}</LockScreen>
      </body>
    </html>
  );
}
