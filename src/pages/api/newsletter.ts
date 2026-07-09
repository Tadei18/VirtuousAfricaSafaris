// ===========================================================================
// POST /api/newsletter — v1 stub. Validates email, logs, returns { ok: true }.
//
// PHASE 2 — wiring newsletter signups:
//
// 1. Add the subscriber to a mailing list (Resend Audiences, Buttondown,
//    ConvertKit, etc.). Example with Resend Audiences:
//      await resend.contacts.create({
//        email: data.email,
//        audienceId: import.meta.env.RESEND_AUDIENCE_ID,
//        unsubscribed: false,
//      });
//
// 2. Send a double-opt-in confirmation email with a verification link.
//
// 3. Rate-limit by IP to avoid abuse.
// ===========================================================================

import type { APIRoute } from "astro";
import { newsletterSchema } from "@/lib/schema";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const parsed = newsletterSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ ok: false, error: "Invalid email" }, 400);
  }

  console.log("[newsletter]", new Date().toISOString(), parsed.data.email);

  return json({ ok: true });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
