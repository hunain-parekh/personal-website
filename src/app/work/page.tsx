import type { Metadata } from "next";
import { Page, PageHead, Work, Code, Contact } from "@/components/Portfolio";

export const metadata: Metadata = { title: "Case studies — Hunain Parekh", description: "Four business processes running without people: patient booking, sales conversations, guest admission, and employee performance." };

export default function WorkPage() {
  return <Page><PageHead title="Case studies." intro="Four processes that used to need a person at every step. Each one shows where the work enters, what the system decides, where it writes, and where a human is still involved." /><Work /><Code /><Contact /></Page>;
}
