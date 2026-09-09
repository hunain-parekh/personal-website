import type { Metadata } from "next";
import { Page, PageHead, About, Journey, Recognition, Contact } from "@/components/Portfolio";

export const metadata: Metadata = { title: "Journey — Hunain Parekh", description: "How I learned the way businesses run before automating one, and what other people decided about the work along the way." };

export default function AboutPage() {
  return <Page><PageHead title="The journey." intro="I learned how businesses run before I automated one. Each role added another layer of the work companies do by hand." /><About /><Journey /><Recognition /><Contact /></Page>;
}
