import type { Metadata } from "next";
import { Page, PageHead, Work, Code, Cta } from "@/components/Portfolio";

export const metadata: Metadata = { title: "Case studies — Hunain Parekh", description: "Four business processes running without people: patient booking, sales conversations, guest admission, and employee performance." };

export default function WorkPage() {
  return <Page><PageHead title={<>Four processes,<br />running without people.</>} intro="Each one used to need a person at every step. The green line on every case says where a human is still involved, and the numbers say how much runs without one." /><Work bare /><Code /><Cta /></Page>;
}
