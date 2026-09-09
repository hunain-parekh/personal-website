import type { Metadata } from "next";
import { Page, PageHead, Journey, Recognition, Cta } from "@/components/Portfolio";

export const metadata: Metadata = { title: "Journey — Hunain Parekh", description: "How I learned the way businesses run before automating one, and what other people decided about the work along the way." };

export default function AboutPage() {
  return <Page><PageHead title={<>Five roles.<br />One thread.</>} intro="I learned how businesses run before I automated one. Each role taught me another layer of the work companies do by hand, and that is how I know where the person is hiding in a process, and what it takes to remove them safely." /><Journey bare /><Recognition /><Cta /></Page>;
}
