// Tiny event-based toast system. Any island can fire a toast without sharing a
// React root — the single <Toaster> island (mounted in BaseLayout) listens on
// the window for `va-toast` events and renders the stack.

export type ToastKind = "success" | "error" | "info";

export interface ToastDetail {
  id: string;
  kind: ToastKind;
  message: string;
}

export function toast(kind: ToastKind, message: string) {
  if (typeof window === "undefined") return;
  const detail: ToastDetail = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    kind,
    message,
  };
  window.dispatchEvent(new CustomEvent<ToastDetail>("va-toast", { detail }));
}
