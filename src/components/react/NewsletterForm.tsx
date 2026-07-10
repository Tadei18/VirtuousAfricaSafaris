import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "@/lib/toast";

// Lightweight email check — keeps zod out of this per-page footer bundle.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email");
      return;
    }
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      toast("success", "You're on the list — field notes incoming.");
      setEmail("");
    } catch {
      toast("error", "Couldn't sign you up just now. Please try again.");
    } finally {
      setPending(false);
    }
  };

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-[#cfa24a]/15 px-4 py-3 text-sm font-semibold text-[#e8cf94]">
        <Check className="size-4" /> Thanks — check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            aria-invalid={!!error}
            className="w-full rounded-full border border-[color:var(--color-line-strong)] bg-white/5 px-5 py-3.5 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#cfa24a] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#cfa24a] px-6 py-3.5 text-sm font-bold text-[#2a1509] transition-all hover:bg-[#e8cf94] disabled:opacity-60"
        >
          {pending ? "Signing up…" : "Subscribe"}
          <ArrowRight className="size-4" />
        </button>
      </div>
      {error && <p className="mt-2 pl-2 text-xs text-red-400">{error}</p>}
    </form>
  );
}
