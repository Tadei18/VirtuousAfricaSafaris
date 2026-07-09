import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { toast } from "@/lib/toast";
import { whatsappUrl, contact } from "@/lib/constants";

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setPending(true);
    try {
      const res = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), source: "chat-launcher" }),
      });
      if (!res.ok) throw new Error("bad response");
      toast("success", "Thanks — a safari planner will pick this up shortly.");
      setMessage("");
      setOpen(false);
    } catch {
      toast("error", "Something went wrong. Try WhatsApp instead?");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[110] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-[color:var(--color-line-strong)] bg-[#12151b] shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:right-6"
            role="dialog"
            aria-label="Chat with a safari planner"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ff6a1a] to-[#ff8a3d] px-5 py-4 text-white">
              <div>
                <p className="font-display text-lg font-bold leading-none">
                  Talk to a planner
                </p>
                <p className="mt-1 text-xs text-white/85">
                  Typically replies within a few hours
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1.5 transition-colors hover:bg-white/20"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={send} className="p-5">
              <label htmlFor="chat-msg" className="text-sm text-[color:var(--color-fog)]">
                What are you dreaming up? Dates, group, what you'd love to see.
              </label>
              <textarea
                id="chat-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="mt-2 w-full resize-none rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3.5 py-3 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#ff6a1a] focus:outline-none"
                placeholder="Two of us, first week of August, hoping for the migration…"
              />
              <button
                type="submit"
                disabled={pending}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6a1a] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#ff8a3d] disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send message"} <Send className="size-4" />
              </button>

              <div className="mt-4 flex items-center gap-3 border-t border-[color:var(--color-line)] pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[color:var(--color-line-strong)] px-4 py-2.5 text-sm font-semibold text-[color:var(--color-bone)] transition-colors hover:border-[#ff6a1a] hover:text-[#ffb056]"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-line-strong)] px-4 py-2.5 text-sm font-semibold text-[color:var(--color-bone)] transition-colors hover:border-[#ff6a1a] hover:text-[#ffb056]"
                >
                  <Phone className="size-4" /> Call
                </a>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with a safari planner"}
        className="group fixed bottom-5 right-4 z-[110] inline-flex items-center gap-2.5 rounded-full bg-[#ff6a1a] px-5 py-4 font-bold text-white shadow-[0_14px_40px_rgba(255,106,26,0.4)] transition-all hover:scale-105 hover:bg-[#ff8a3d] sm:right-6"
      >
        <span className="relative flex size-6 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="size-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <span className="hidden text-sm sm:inline">Plan my safari</span>
      </button>
    </>
  );
}
