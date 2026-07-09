// ===========================================================================
// POST /api/chat/start — v1 stub. Validates, logs, returns { ok: true }.
//
// PHASE 2 — wiring the chat launcher:
//
// 1. Create a chat session row in the DB (id, created_at, first_message,
//    visitor_meta, status). Return the session id so the client can poll /
//    subscribe for replies.
//
// 2. Notify the team in real time — a WhatsApp Cloud API template message to
//    the business number, or a Slack webhook, containing the first message.
//
// 3. For a live experience, back this with a realtime channel (e.g. Supabase
//    Realtime / Pusher) and add a matching /api/chat/message endpoint.
//
// 4. Rate-limit by IP.
// ===========================================================================

import type { APIRoute } from "astro";
import { chatStartSchema } from "@/lib/schema";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const parsed = chatStartSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ ok: false, error: "Validation failed" }, 400);
  }

  console.log("[chat/start]", new Date().toISOString(), parsed.data);

  // A real implementation returns a session id here.
  return json({ ok: true, sessionId: `stub-${Date.now()}` });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
