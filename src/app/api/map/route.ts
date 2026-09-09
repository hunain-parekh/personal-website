import { NextRequest, NextResponse } from "next/server";

// Maps a process a visitor does by hand onto Hunain's four stations. Gemini over plain fetch, no SDK.
const MODEL = "gemini-flash-latest";
const SYSTEM = `You are the process-mapping assistant on the website of Hunain Parekh, an AI process automation engineer.
A visitor describes a business process their team currently does by hand. Map it onto Hunain's four stations:
- intake: where the work arrives (phone, WhatsApp, email, form, another system) and what an agent must understand from it.
- decide: what the model decides, what a fixed rule decides, and the exact condition under which a human must be asked.
- act: which systems get written to (calendar, CRM, clinic system, spreadsheet, ticketing) and what the write is.
- recover: what can fail (a sync, a missing record, a conflicting update) and how the system retries or reports it.
Then give "handover": one sentence stating when a person still steps in, and "summary": one plain sentence describing the automated process from the visitor's point of view.
Rules: be concrete and specific to what they wrote; never invent numbers or promise results; keep every field under 45 words; write in plain English, no bullet points, no markdown. If the input is not a business process, set every field to a short sentence explaining you can only map a process, and summary to "Describe a process your team does by hand and I will map it."`;

const schema = {
  type: "OBJECT",
  properties: { summary: { type: "STRING" }, intake: { type: "STRING" }, decide: { type: "STRING" }, act: { type: "STRING" }, recover: { type: "STRING" }, handover: { type: "STRING" } },
  required: ["summary", "intake", "decide", "act", "recover", "handover"],
};

// ponytail: in-memory per-IP limit, resets on cold start; move to a KV counter if abuse shows up.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now(), recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  hits.set(ip, [...recent, now]);
  return recent.length >= 8;
}

export async function POST(req: NextRequest) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "The mapper is not configured." }, { status: 500 });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Try again in a minute." }, { status: 429 });

  const body = await req.json().catch(() => ({}));
  const process_ = typeof body.process === "string" ? body.process.trim() : "";
  if (process_.length < 10 || process_.length > 2000) return NextResponse.json({ error: "Describe the process in a few sentences." }, { status: 400 });

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [{ role: "user", parts: [{ text: process_ }] }],
      generationConfig: { responseMimeType: "application/json", responseSchema: schema, temperature: 0.4, maxOutputTokens: 1024 },
    }),
  });
  if (!res.ok) {
    console.error("Gemini error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "The mapper is busy. Try again in a moment." }, { status: 502 });
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  try {
    return NextResponse.json(JSON.parse(text));
  } catch {
    return NextResponse.json({ error: "The mapper returned something unreadable. Try rephrasing." }, { status: 502 });
  }
}
