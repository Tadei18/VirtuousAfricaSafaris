import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send, X, MessageCircle } from "lucide-react";
import { toast } from "@/lib/toast";
import { whatsappUrl } from "@/lib/constants";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const GROUPS = ["Just me", "2 people", "3–4 people", "5–6 people", "7+ / group"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  tourSlug: string;
  tourTitle: string;
  priceFromUsd: number;
}

function useInquiry(tourSlug: string, tourTitle: string) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (form: HTMLFormElement) => {
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    if (!EMAIL_RE.test(email)) {
      toast("error", "Please enter a valid email so we can reply.");
      return;
    }
    setPending(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email,
          month: data.get("month"),
          group: data.get("group"),
          notes: data.get("notes"),
          tourSlug,
          tourTitle,
          source: "tour-sidebar",
        }),
      });
      if (!res.ok) throw new Error();
      toast("success", "Sent! We'll email a tailored version of this trip within 24 hours.");
      setDone(true);
    } catch {
      toast("error", "Couldn't send just now. Try WhatsApp instead?");
    } finally {
      setPending(false);
    }
  };

  return { pending, done, submit };
}

function Fields() {
  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="iq-name" className="sr-only">Your name</label>
        <input id="iq-name" name="name" required placeholder="Your name"
          className="w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3.5 py-2.5 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#ff6a1a] focus:outline-none" />
      </div>
      <div>
        <label htmlFor="iq-email" className="sr-only">Email</label>
        <input id="iq-email" name="email" type="email" required placeholder="you@email.com"
          className="w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3.5 py-2.5 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#ff6a1a] focus:outline-none" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="iq-month" className="sr-only">Travel month</label>
          <select id="iq-month" name="month" defaultValue=""
            className="w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3 py-2.5 text-sm text-[color:var(--color-bone)] focus:border-[#ff6a1a] focus:outline-none">
            <option value="" disabled>Month</option>
            {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="iq-group" className="sr-only">Group size</label>
          <select id="iq-group" name="group" defaultValue=""
            className="w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3 py-2.5 text-sm text-[color:var(--color-bone)] focus:border-[#ff6a1a] focus:outline-none">
            <option value="" disabled>Group</option>
            {GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="iq-notes" className="sr-only">Anything else</label>
        <textarea id="iq-notes" name="notes" rows={2} placeholder="Anything we should know? (optional)"
          className="w-full resize-none rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3.5 py-2.5 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#ff6a1a] focus:outline-none" />
      </div>
    </div>
  );
}

export default function InquirySidebar({ tourSlug, tourTitle, priceFromUsd }: Props) {
  const desktop = useInquiry(tourSlug, tourTitle);
  const mobile = useInquiry(tourSlug, tourTitle);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      {/* Desktop sticky card */}
      <div className="hidden lg:block">
        <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[#12151b] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <p className="text-xs uppercase tracking-wider text-[color:var(--color-fog-2)]">From</p>
          <p className="font-display text-3xl font-extrabold text-[color:var(--color-bone)]">
            ${priceFromUsd.toLocaleString()}
            <span className="text-sm font-medium text-[color:var(--color-fog)]"> / person</span>
          </p>
          <p className="mt-1 text-sm text-[color:var(--color-fog)]">Private trip · fully tailored to your dates</p>

          {desktop.done ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-[#ff6a1a]/10 p-6 text-center">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ff6a1a] text-white"><Check className="size-6" /></span>
              <p className="font-display text-lg font-bold text-[color:var(--color-bone)]">Inquiry received</p>
              <p className="text-sm text-[color:var(--color-fog)]">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              className="mt-6"
              onSubmit={(e) => { e.preventDefault(); desktop.submit(e.currentTarget); }}
            >
              <Fields />
              <button type="submit" disabled={desktop.pending}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6a1a] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff8a3d] disabled:opacity-60">
                {desktop.pending ? "Sending…" : "Request this safari"} <Send className="size-4" />
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[color:var(--color-line-strong)] px-5 py-3 text-sm font-semibold text-[color:var(--color-bone)] transition-colors hover:border-[#ff6a1a]">
                <MessageCircle className="size-4" /> Ask on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-[color:var(--color-fog-2)]">No deposit to inquire · free cancellation windows apply</p>
            </form>
          )}
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-[95] border-t border-[color:var(--color-line)] bg-[#0c0e12]/95 p-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[color:var(--color-fog-2)]">From</p>
            <p className="font-display text-xl font-extrabold leading-none text-[color:var(--color-bone)]">${priceFromUsd.toLocaleString()}</p>
          </div>
          <button type="button" onClick={() => setSheetOpen(true)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ff6a1a] px-5 py-3 text-sm font-bold text-white">
            Enquire now
          </button>
        </div>
      </div>

      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[145] flex items-end bg-[#0c0e12]/70 backdrop-blur-sm lg:hidden"
            onClick={() => setSheetOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-t-[1.75rem] border-t border-[color:var(--color-line-strong)] bg-[#12151b] p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog" aria-label="Inquire about this safari"
            >
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[color:var(--color-line-strong)]" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-[color:var(--color-bone)]">{tourTitle}</p>
                  <p className="text-sm text-[color:var(--color-fog)]">From ${priceFromUsd.toLocaleString()} / person</p>
                </div>
                <button type="button" onClick={() => setSheetOpen(false)} aria-label="Close"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-bone)]">
                  <X className="size-4" />
                </button>
              </div>

              {mobile.done ? (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-[#ff6a1a]/10 p-6 text-center">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ff6a1a] text-white"><Check className="size-6" /></span>
                  <p className="font-display text-lg font-bold text-[color:var(--color-bone)]">Inquiry received</p>
                  <p className="text-sm text-[color:var(--color-fog)]">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form className="mt-5" onSubmit={(e) => { e.preventDefault(); mobile.submit(e.currentTarget); }}>
                  <Fields />
                  <button type="submit" disabled={mobile.pending}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6a1a] px-5 py-3.5 text-sm font-bold text-white disabled:opacity-60">
                    {mobile.pending ? "Sending…" : "Request this safari"} <Send className="size-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
