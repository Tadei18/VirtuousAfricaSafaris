import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { inquiryFormSchema, type InquiryFormValues } from "@/lib/schema";
import { toast } from "@/lib/toast";
import { whatsappUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const INTERESTS = [
  "Big Five", "Great Migration", "Photography focus", "Honeymoon",
  "Family-friendly", "Walking safaris", "Cultural visits", "Birding",
  "Beach extension", "Conservation & rhino",
];
const COUNTRIES = [
  "United States", "United Kingdom", "Germany", "France", "Italy", "Spain",
  "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway",
  "Denmark", "Finland", "Australia", "New Zealand", "Canada", "Brazil",
  "Argentina", "Japan", "India", "Singapore", "United Arab Emirates",
  "Saudi Arabia", "South Africa", "Kenya", "Other",
];
const DURATIONS = [
  { value: "3-5", label: "3–5 days" },
  { value: "6-8", label: "6–8 days" },
  { value: "9-12", label: "9–12 days" },
  { value: "13+", label: "13+ days" },
];
const STYLES = [
  { value: "Budget", label: "Budget", note: "Camping & value stays" },
  { value: "Mid-range", label: "Mid-range", note: "Comfortable lodges & camps" },
  { value: "Luxury", label: "Luxury", note: "Premium camps, flights" },
  { value: "Family", label: "Family", note: "Paced for kids" },
];

const STEP_FIELDS: Record<number, (keyof InquiryFormValues)[]> = {
  0: ["primaryMonth", "alternateMonth", "duration", "adults", "children"],
  1: ["interests"],
  2: ["style", "budgetUsd"],
  3: ["fullName", "email", "country", "phone", "notes"],
};
const STEP_LABELS = ["Dates", "Interests", "Style & budget", "Your details"];

const inputCls =
  "w-full rounded-xl border border-[color:var(--color-line-strong)] bg-[#0c0e12] px-3.5 py-3 text-sm text-[color:var(--color-bone)] placeholder:text-[color:var(--color-fog-2)] focus:border-[#ff6a1a] focus:outline-none";
const labelCls = "text-sm font-semibold text-[color:var(--color-bone)]";
const errCls = "mt-1 text-xs text-red-400";

export default function MultiStepInquiry() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const total = STEP_LABELS.length;

  const {
    register, handleSubmit, trigger, control, watch,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      primaryMonth: "", alternateMonth: "", duration: undefined,
      adults: 2, children: 0, interests: [], style: undefined,
      budgetUsd: 3000, fullName: "", email: "", country: "", phone: "", notes: "",
    },
    mode: "onTouched",
  });

  const budget = watch("budgetUsd");

  const onSubmit = async (values: InquiryFormValues) => {
    setPending(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "contact-form" }),
      });
      if (!res.ok) throw new Error();
      toast("success", "We've got it — expect a tailored itinerary within 24 hours.");
      setSubmitted(true);
    } catch {
      toast("error", "Something went wrong sending that. Please try again or WhatsApp us.");
    } finally {
      setPending(false);
    }
  };

  const nextStep = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(s + 1, total - 1));
    else toast("error", "Please complete the highlighted fields.");
  };

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-[color:var(--color-line)] bg-[#12151b] p-8 text-center sm:p-12">
        <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-[#ff6a1a] text-white">
          <Check className="size-8" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-extrabold text-[color:var(--color-bone)]">
          Your safari brief is in.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[color:var(--color-fog)]">
          A planner is already reading it. You'll have a tailored itinerary and quote
          in your inbox within 24 hours — often much sooner.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] px-6 py-3 text-sm font-bold text-[color:var(--color-bone)] transition-colors hover:border-[#ff6a1a]"
        >
          Prefer to chat now? WhatsApp us
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] border border-[color:var(--color-line)] bg-[#12151b] p-6 sm:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {STEP_LABELS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-1.5">
            <div className={cn("h-1.5 rounded-full transition-colors", i <= step ? "bg-[#ff6a1a]" : "bg-[color:var(--color-line-strong)]")} />
            <span className={cn("hidden text-[11px] font-semibold sm:block", i === step ? "text-[#ffb056]" : "text-[color:var(--color-fog-2)]")}>{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="primaryMonth" className={labelCls}>Ideal travel month</label>
                    <select id="primaryMonth" {...register("primaryMonth")} className={cn(inputCls, "mt-1.5")} defaultValue="">
                      <option value="" disabled>Pick a month</option>
                      {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                    {errors.primaryMonth && <p className={errCls}>{errors.primaryMonth.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="alternateMonth" className={labelCls}>Backup month <span className="font-normal text-[color:var(--color-fog-2)]">(optional)</span></label>
                    <select id="alternateMonth" {...register("alternateMonth")} className={cn(inputCls, "mt-1.5")} defaultValue="">
                      <option value="">No preference</option>
                      {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <span className={labelCls}>How long?</span>
                  <Controller
                    control={control} name="duration"
                    render={({ field }) => (
                      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {DURATIONS.map((d) => (
                          <button key={d.value} type="button" onClick={() => field.onChange(d.value)}
                            className={cn("rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors",
                              field.value === d.value ? "border-[#ff6a1a] bg-[#ff6a1a] text-white" : "border-[color:var(--color-line-strong)] text-[color:var(--color-bone)] hover:border-[#ff6a1a]/50")}>
                            {d.label}
                          </button>
                        ))}
                      </div>
                    )}
                  />
                  {errors.duration && <p className={errCls}>{errors.duration.message}</p>}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="adults" className={labelCls}>Adults</label>
                    <input id="adults" type="number" min={1} max={20} {...register("adults", { valueAsNumber: true })} className={cn(inputCls, "mt-1.5")} />
                    {errors.adults && <p className={errCls}>{errors.adults.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="children" className={labelCls}>Children</label>
                    <input id="children" type="number" min={0} max={20} {...register("children", { valueAsNumber: true })} className={cn(inputCls, "mt-1.5")} />
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <span className={labelCls}>What are you hoping for? Pick any that fit.</span>
                <Controller
                  control={control} name="interests"
                  render={({ field }) => (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {INTERESTS.map((it) => {
                        const active = field.value?.includes(it);
                        return (
                          <button key={it} type="button"
                            onClick={() => field.onChange(active ? field.value.filter((v) => v !== it) : [...(field.value ?? []), it])}
                            aria-pressed={active}
                            className={cn("inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                              active ? "border-[#ff6a1a] bg-[#ff6a1a] text-white" : "border-[color:var(--color-line-strong)] text-[color:var(--color-bone)] hover:border-[#ff6a1a]/50")}>
                            {active && <Check className="size-3.5" />} {it}
                          </button>
                        );
                      })}
                    </div>
                  )}
                />
                {errors.interests && <p className={errCls}>{errors.interests.message as string}</p>}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <span className={labelCls}>Travel style</span>
                  <Controller
                    control={control} name="style"
                    render={({ field }) => (
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {STYLES.map((s) => (
                          <button key={s.value} type="button" onClick={() => field.onChange(s.value)}
                            className={cn("rounded-xl border p-4 text-left transition-colors",
                              field.value === s.value ? "border-[#ff6a1a] bg-[#ff6a1a]/10" : "border-[color:var(--color-line-strong)] hover:border-[#ff6a1a]/50")}>
                            <p className="font-display text-base font-bold text-[color:var(--color-bone)]">{s.label}</p>
                            <p className="text-xs text-[color:var(--color-fog)]">{s.note}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  />
                  {errors.style && <p className={errCls}>{errors.style.message}</p>}
                </div>
                <div>
                  <label htmlFor="budgetUsd" className={labelCls}>
                    Rough budget per person: <span className="text-[#ffb056]">${Number(budget).toLocaleString()}</span>
                  </label>
                  <input id="budgetUsd" type="range" min={500} max={15000} step={100}
                    {...register("budgetUsd", { valueAsNumber: true })}
                    className="mt-3 w-full accent-[#ff6a1a]" />
                  <div className="mt-1 flex justify-between text-xs text-[color:var(--color-fog-2)]">
                    <span>$500</span><span>$15,000+</span>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelCls}>Full name</label>
                    <input id="fullName" {...register("fullName")} className={cn(inputCls, "mt-1.5")} placeholder="Jane Doe" />
                    {errors.fullName && <p className={errCls}>{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Email</label>
                    <input id="email" type="email" {...register("email")} className={cn(inputCls, "mt-1.5")} placeholder="you@email.com" />
                    {errors.email && <p className={errCls}>{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="country" className={labelCls}>Country</label>
                    <select id="country" {...register("country")} className={cn(inputCls, "mt-1.5")} defaultValue="">
                      <option value="" disabled>Where are you based?</option>
                      {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.country && <p className={errCls}>{errors.country.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone / WhatsApp <span className="font-normal text-[color:var(--color-fog-2)]">(optional)</span></label>
                    <input id="phone" {...register("phone")} className={cn(inputCls, "mt-1.5")} placeholder="+1 555 000 0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className={labelCls}>Anything else? <span className="font-normal text-[color:var(--color-fog-2)]">(optional)</span></label>
                  <textarea id="notes" rows={3} {...register("notes")} className={cn(inputCls, "mt-1.5 resize-none")} placeholder="Bucket-list species, mobility needs, celebrating something…" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <button type="button" onClick={() => setStep((s) => Math.max(s - 1, 0))} disabled={step === 0}
            className={cn("inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors",
              step === 0 ? "invisible" : "text-[color:var(--color-fog)] hover:text-[color:var(--color-bone)]")}>
            <ArrowLeft className="size-4" /> Back
          </button>

          {step < total - 1 ? (
            <button type="button" onClick={nextStep}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6a1a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff8a3d]">
              Continue <ArrowRight className="size-4" />
            </button>
          ) : (
            <button type="submit" disabled={pending}
              className="inline-flex items-center gap-2 rounded-full bg-[#ff6a1a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff8a3d] disabled:opacity-60">
              {pending ? "Sending…" : "Send my brief"} <Check className="size-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
