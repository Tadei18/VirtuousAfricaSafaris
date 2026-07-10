import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import type { ToastDetail, ToastKind } from "@/lib/toast";

const ICONS: Record<ToastKind, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const ACCENT: Record<ToastKind, string> = {
  success: "text-emerald-400",
  error: "text-red-400",
  info: "text-[#cfa24a]",
};

export default function Toaster() {
  const [toasts, setToasts] = useState<ToastDetail[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ToastDetail>).detail;
      setToasts((prev) => [...prev, detail]);
      window.setTimeout(() => dismiss(detail.id), 5200);
    };
    window.addEventListener("va-toast", handler);
    return () => window.removeEventListener("va-toast", handler);
  }, [dismiss]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-4 z-[120] flex flex-col items-center gap-2 px-4 sm:bottom-6"
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map((t) => {
          const Icon = ICONS[t.kind];
          return (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-2xl border border-[color:var(--color-line-strong)] bg-[#2a1509]/97 px-4 py-3.5 text-sm text-[color:var(--color-bone)] shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur"
            >
              <Icon className={`mt-0.5 size-5 shrink-0 ${ACCENT[t.kind]}`} />
              <p className="flex-1 leading-snug">{t.message}</p>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="shrink-0 rounded-md p-1 text-[color:var(--color-fog)] transition-colors hover:text-white"
              >
                <X className="size-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
