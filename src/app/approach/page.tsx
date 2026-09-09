import type { Metadata } from "next";
import { Page, PageHead, Approach, Processes, Research, Toolbox, Faq, Cta } from "@/components/Portfolio";

export const metadata: Metadata = { title: "How I work — Hunain Parekh", description: "How a business process stops needing people: intake, decide, act, recover. What I automate, what I measure, and the stack behind it." };

export default function ApproachPage() {
  return <Page><PageHead title={<>How a process<br />stops needing people.</>} intro="The same four parts, whatever the process is. Below: where people get stuck at each one, what I build there, which processes fit the pattern, and what I am still working out." /><Approach bare /><Processes /><Research /><Toolbox /><Faq /><Cta /></Page>;
}
