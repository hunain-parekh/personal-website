"use client";

import { useState, type FormEvent } from "react";
import styles from "./Portfolio.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") return <div className={styles.formDone} role="status"><strong>Sent.</strong> I read every message myself and reply within a day.</div>;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>Your name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Your email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      <label>The process you do by hand<textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Where the work comes in, what a person does with it, and where it ends up." /></label>
      {status === "error" && <p className={styles.formError} role="alert">{error}</p>}
      <button type="submit" className={styles.lightButton} disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send it over"}</button>
    </form>
  );
}
