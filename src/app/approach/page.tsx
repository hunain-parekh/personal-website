import type { Metadata } from "next";
import { Page, PageHead, Approach, Processes, Research, Toolbox, Faq, Contact } from "@/components/Portfolio";

export const metadata: Metadata = { title: "How I work — Hunain Parekh", description: "How a business process stops needing people: intake, decide, act, recover. What I automate, what I measure, and the stack behind it." };

export default function ApproachPage() {
  return <Page><PageHead title="How I work." intro="Every process I automate has the same four parts. Get each one right and the handover rate falls. This page shows what breaks at each part, what I build there, and what I am still working out." /><Approach /><Processes /><Research /><Toolbox /><Faq /><Contact /></Page>;
}
