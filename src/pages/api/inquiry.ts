// ===========================================================================
// POST /api/inquiry  — v1 stub. Validates with zod, logs, returns { ok: true }.
//
// PHASE 2 — wiring this up for production:
//
// 1. Persist the inquiry to a database (Supabase or Neon recommended):
//      - Columns: id, created_at, payload jsonb, source, status (new|read|won|lost).
//
// 2. Email notification via Resend (RESEND_API_KEY):
//      import { Resend } from "resend";
//      const resend = new Resend(import.meta.env.RESEND_API_KEY);
//      await resend.emails.send({
//        from: "inquiries@virtuousafricasafaris.com",
//        to: import.meta.env.OWNER_NOTIFICATION_EMAIL,
//        subject: `New inquiry — ${data.fullName ?? data.name}`,
//        text: JSON.stringify(data, null, 2),
//      });
//
// 3. WhatsApp notification via the WhatsApp Cloud API (WHATSAPP_TOKEN /
//    WHATSAPP_PHONE_NUMBER_ID) to the business number — use a pre-approved
//    template message so it can be sent outside the 24h session window.
//
// 4. (Optional) Confirmation email to the inquirer with a copy + expected
//    response time.
//
// 5. Rate-limit by IP (e.g. @upstash/ratelimit) to prevent spam.
// ===========================================================================

import type { APIRoute } from "astro";
import { inquiryApiSchema } from "@/lib/schema";

// On-demand route (needs the node adapter) so the POST handler can run.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const parsed = inquiryApiSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      400
    );
  }

  // v1 stub: log to server console. Production replaces this with persist + notify.
  console.log("[inquiry]", new Date().toISOString(), parsed.data);

  return json({ ok: true });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
