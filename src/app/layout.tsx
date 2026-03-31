import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hunain Parekh — Senior Software Engineer",
  description:
    "Portfolio of Hunain Parekh, a Senior Software Engineer specializing in MERN stack development with experience across multiple languages and frameworks.",
  keywords: [
    "Hunain Parekh",
    "Software Engineer",
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Hunain Parekh — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in MERN stack. Building robust, scalable applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
