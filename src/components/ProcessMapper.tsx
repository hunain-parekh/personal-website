"use client";

import { useState, type FormEvent } from "react";
import styles from "./Portfolio.module.css";

type Map = { summary: string; intake: string; decide: string; act: string; recover: string; handover: string };
const STATIONS: [keyof Map, string][] = [["intake", "Intake"], ["decide", "Decide"], ["act", "Act"], ["recover", "Recover"]];

// A visitor describes a process; the result is their process on Hunain's four stations, and one click sends it to him.
export default function ProcessMapper() {
  const [text, setText] = useState("");
  const [state, setState] = useState<"idle" | "working" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [map, setMap] = useState<Map | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("working");
    try {
      const res = await fetch("/api/map", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ process: text }) });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      setMap(body); setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong."); setState("error");
    }
  }

  function sendToHunain() {
    if (!map) return;
    const field = document.querySelector<HTMLTextAreaElement>('#contact textarea[name="message"]');
    if (field) field.value = `My process:\n${text}\n\nMapped:\nIntake: ${map.intake}\nDecide: ${map.decide}\nAct: ${map.act}\nRecover: ${map.recover}\nHandover: ${map.handover}`;
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.mapper}>
      <form onSubmit={onSubmit}>
        <label>Try it with a process your team does by hand<textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} minLength={10} maxLength={2000} required placeholder="Example: Customers call to book a dental appointment. The receptionist checks the calendar, writes the booking in our clinic software, and sends a WhatsApp reminder the day before." /></label>
        <button type="submit" className={styles.lightButton} disabled={state === "working"}>{state === "working" ? "Mapping…" : "Map it onto the four stations"}</button>
        {state === "error" && <p className={styles.formError} role="alert">{error}</p>}
      </form>
      {map && state === "done" && (
        <div className={styles.mapResult} role="status">
          <p className={styles.mapSummary}>{map.summary}</p>
          <div className={styles.loop}>{STATIONS.map(([k, label]) => <div key={k} className={styles.station}><strong>{label}</strong><p>{map[k]}</p></div>)}</div>
          <p className={styles.automated}>{map.handover}</p>
          <button type="button" className={styles.lightButton} onClick={sendToHunain}>Send this to Hunain</button>
        </div>
      )}
    </div>
  );
}
