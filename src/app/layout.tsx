import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Hunain Parekh — AI process automation engineer",
  description:
    "I automate whole business processes with AI: bookings, sales conversations, employee performance, admission. A person steps in only on exceptions.",
  keywords: [
    "Hunain Parekh",
    "Senior AI Engineer",
    "Conversational AI",
    "Voice Agents",
    "AI Integrations",
    "Portfolio",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Hunain Parekh — AI process automation engineer",
    description:
      "Business processes that run themselves. A person steps in only when the system asks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
