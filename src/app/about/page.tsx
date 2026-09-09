import type { Metadata } from "next";
import { Page, Journey, Recognition, Cta } from "@/components/Portfolio";

export const metadata: Metadata = { title: "Journey — Hunain Parekh", description: "How I learned the way businesses run before automating one, and what other people decided about the work along the way." };

export default function AboutPage() {
  return <Page><Journey /><Recognition /><Cta /></Page>;
}
