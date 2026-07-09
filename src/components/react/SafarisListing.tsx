import { useEffect, useMemo, useState, useCallback } from "react";
import {
  ArrowUpDown,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Sparkles,
  Users,
  Star,
  X,
  Telescope,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { cn, formatUsd } from "@/lib/utils";
import type { Tour } from "@/types";

type FilterState = {
  durations: string[];
  styles: string[];
  destinations: string[];
  months: string[];
  sort: string;
};

const DURATIONS = ["3-5", "6-8", "9-12", "13+"] as const;
const STYLES = ["Budget", "Mid-range", "Luxury", "Family"] as const;
const DESTINATIONS = [
  { slug: "maasai-mara", label: "Maasai Mara" },
  { slug: "amboseli", label: "Amboseli" },
  { slug: "tsavo", label: "Tsavo" },
  { slug: "samburu", label: "Samburu" },
  { slug: "lake-nakuru", label: "Lake Nakuru" },
  { slug: "lake-naivasha", label: "Lake Naivasha" },
  { slug: "ol-pejeta", label: "Ol Pejeta" },
  { slug: "aberdare", label: "Aberdare" },
  { slug: "diani-beach", label: "Diani Beach" },
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "shortest", label: "Shortest" },
  { value: "longest", label: "Longest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

function readInitial(): FilterState {
  const sp = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const parseList = (k: string) => sp.get(k)?.split(",").filter(Boolean) ?? [];

  // Deep-link support from the quick-match form (when / days / style).
  const days = sp.get("days");
  const style = sp.get("style");
  const when = sp.get("when");
  const whenMap: Record<string, string[]> = {
    "jan-mar": ["Jan", "Feb", "Mar"],
    "apr-jun": ["Apr", "May", "Jun"],
    "jul-sep": ["Jul", "Aug", "Sep"],
    "oct-dec": ["Oct", "Nov", "Dec"],
  };

  return {
    durations: days ? [days] : parseList("durations"),
    styles: style ? [style] : parseList("styles"),
    destinations: parseList("destinations"),
    months: when ? whenMap[when] ?? [] : parseList("months"),
    sort: sp.get("sort") ?? "recommended",
  };
}

function syncUrl(state: FilterState) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams();
  if (state.durations.length) params.set("durations", state.durations.join(","));
  if (state.styles.length) params.set("styles", state.styles.join(","));
  if (state.destinations.length) params.set("destinations", state.destinations.join(","));
  if (state.months.length) params.set("months", state.months.join(","));
  if (state.sort && state.sort !== "recommended") params.set("sort", state.sort);
  const qs = params.toString();
  window.history.replaceState({}, "", `/safaris${qs ? `?${qs}` : ""}`);
}

function inDurationBucket(days: number, bucket: string) {
  if (bucket === "3-5") return days >= 3 && days <= 5;
  if (bucket === "6-8") return days >= 6 && days <= 8;
  if (bucket === "9-12") return days >= 9 && days <= 12;
  if (bucket === "13+") return days >= 13;
  return true;
}

function applyFilters(list: Tour[], f: FilterState): Tour[] {
  let out = list.filter((t) => {
    if (f.durations.length && !f.durations.some((d) => inDurationBucket(t.durationDays, d))) return false;
    if (f.styles.length && !f.styles.includes(t.style)) return false;
    if (f.destinations.length && !t.destinations.some((d) => f.destinations.includes(d))) return false;
    if (f.months.length && !t.bestMonths.some((m) => f.months.includes(m))) return false;
    return true;
  });
  switch (f.sort) {
    case "shortest": out = [...out].sort((a, b) => a.durationDays - b.durationDays); break;
    case "longest": out = [...out].sort((a, b) => b.durationDays - a.durationDays); break;
    case "price-asc": out = [...out].sort((a, b) => a.priceFromUsd - b.priceFromUsd); break;
    case "price-desc": out = [...out].sort((a, b) => b.priceFromUsd - a.priceFromUsd); break;
  }
  return out;
}

export default function SafarisListing({ tours }: { tours: Tour[] }) {
  const [state, setState] = useState<FilterState>(() => ({
    durations: [], styles: [], destinations: [], months: [], sort: "recommended",
  }));
  const [moreOpen, setMoreOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // Hydrate from URL after mount (avoids SSR/client mismatch).
  useEffect(() => {
    setState(readInitial());
    setReady(true);
  }, []);

  const update = useCallback((next: Partial<FilterState>) => {
    setState((prev) => {
      const merged = { ...prev, ...next };
      syncUrl(merged);
      return merged;
    });
  }, []);

  const reset = useCallback(() => {
    const cleared: FilterState = { durations: [], styles: [], destinations: [], months: [], sort: "recommended" };
    setState(cleared);
    syncUrl(cleared);
  }, []);

  const toggleIn = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const results = useMemo(() => applyFilters(tours, state), [tours, state]);
  const activeCount =
    state.durations.length + state.styles.length + state.destinations.length + state.months.length;
  const hasFilters = activeCount > 0;

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[72px] z-40 border-y border-[color:var(--color-line)] bg-[#0c0e12]/92 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-5 py-4 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <ChipGroup
              label="Duration" icon={Clock}
              options={DURATIONS.map((d) => ({ value: d, label: `${d} days` }))}
              selected={state.durations}
              onToggle={(v) => update({ durations: toggleIn(state.durations, v) })}
            />
            <ChipGroup
              label="Style" icon={Sparkles}
              options={STYLES.map((s) => ({ value: s, label: s }))}
              selected={state.styles}
              onToggle={(v) => update({ styles: toggleIn(state.styles, v) })}
            />
            <div className="ml-auto flex items-center gap-3">
              {hasFilters && (
                <button
                  type="button" onClick={reset}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-line-strong)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-fog)] transition-colors hover:border-red-400 hover:text-red-400"
                >
                  <X className="size-3" /> Clear all
                </button>
              )}
              <label className="inline-flex items-center gap-1.5 text-xs">
                <span className="inline-flex items-center gap-1.5 text-[color:var(--color-fog)]">
                  <ArrowUpDown className="size-3.5 text-[#ff6a1a]" /> Sort
                </span>
                <select
                  value={state.sort}
                  onChange={(e) => update({ sort: e.target.value })}
                  className="h-9 rounded-full border border-[color:var(--color-line-strong)] bg-[#12151b] px-3 text-xs text-[color:var(--color-bone)] focus:border-[#ff6a1a] focus:outline-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button" onClick={() => setMoreOpen((v) => !v)} aria-expanded={moreOpen}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] px-4 py-2 text-xs font-semibold text-[color:var(--color-bone)] transition-colors",
                moreOpen ? "bg-[#1a1e26]" : "hover:bg-[#12151b]"
              )}
            >
              <ChevronDown className={cn("size-3.5 transition-transform", moreOpen && "rotate-180")} />
              More filters · destinations &amp; month
            </button>

            {moreOpen && (
              <div className="mt-4 flex flex-col gap-4 border-t border-[color:var(--color-line)] pt-4">
                <ChipGroup
                  label="Destination" icon={MapPin}
                  options={DESTINATIONS.map((d) => ({ value: d.slug, label: d.label }))}
                  selected={state.destinations}
                  onToggle={(v) => update({ destinations: toggleIn(state.destinations, v) })}
                />
                <ChipGroup
                  label="Month" icon={Calendar}
                  options={MONTHS.map((m) => ({ value: m, label: m }))}
                  selected={state.months}
                  onToggle={(v) => update({ months: toggleIn(state.months, v) })}
                />
              </div>
            )}
          </div>

          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-bone)]">
            {results.length} {results.length === 1 ? "safari" : "safaris"} matching
            {hasFilters && (
              <span className="rounded-full bg-[#ff6a1a] px-2 py-0.5 text-[10px] font-bold text-white">
                {activeCount} active
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10">
        {results.length === 0 ? (
          <Empty />
        ) : (
          <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", !ready && "opacity-0")}>
            {results.map((t) => <Card key={t.slug} tour={t} />)}
          </div>
        )}
      </div>
    </div>
  );
}

const styleTone: Record<string, string> = {
  Budget: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  "Mid-range": "bg-sky-500/15 text-sky-300 border-sky-400/30",
  Luxury: "bg-[#ff6a1a]/15 text-[#ffb056] border-[#ff6a1a]/40",
  Family: "bg-violet-500/15 text-violet-300 border-violet-400/30",
};

function Card({ tour }: { tour: Tour }) {
  return (
    <a
      href={`/safaris/${tour.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[color:var(--color-line)] bg-[#12151b] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ff6a1a]/40 hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.heroImage} alt={tour.title} loading="lazy" decoding="async"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/10 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className={cn("rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur", styleTone[tour.style])}>
            {tour.style}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-xs font-semibold text-white/90">
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-[#ffb056]" /> {tour.durationDays} days</span>
          <span className="inline-flex items-center gap-1.5"><Users className="size-3.5 text-[#ffb056]" /> Max {tour.groupSizeMax}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex items-center gap-1.5 text-sm">
          <Star className="size-3.5 fill-[#e8b04b] text-[#e8b04b]" />
          <span className="font-semibold text-[color:var(--color-bone)]">{tour.rating.toFixed(1)}</span>
          <span className="text-[color:var(--color-fog)]">({tour.reviewCount})</span>
        </span>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-[color:var(--color-bone)] transition-colors group-hover:text-[#ff6a1a]">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[color:var(--color-fog)]">{tour.shortDescription}</p>
        <div className="mt-5 flex items-end justify-between border-t border-[color:var(--color-line)] pt-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[color:var(--color-fog-2)]">From</span>
            <p className="font-display text-2xl font-extrabold text-[color:var(--color-bone)]">
              {formatUsd(tour.priceFromUsd)}<span className="text-xs font-medium text-[color:var(--color-fog)]"> / pp</span>
            </p>
          </div>
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#ff6a1a]/10 text-[#ff6a1a] transition-all group-hover:bg-[#ff6a1a] group-hover:text-white">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function Empty() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-[1.5rem] border border-dashed border-[color:var(--color-line-strong)] bg-[#12151b] p-10 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-[#ff6a1a]/12 text-[#ff6a1a]">
        <Telescope className="size-6" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-bold text-[color:var(--color-bone)]">No safaris match those filters — yet.</h2>
        <p className="mt-2 text-sm text-[color:var(--color-fog)]">
          Let's build you a custom one instead. Tell us your dates and what you came to see.
        </p>
      </div>
      <a href="/contact" className="rounded-full bg-[#ff6a1a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff8a3d]">
        Plan a custom safari
      </a>
    </div>
  );
}

function ChipGroup({
  label, icon: Icon, options, selected, onToggle,
}: {
  label: string; icon: LucideIcon;
  options: { value: string; label: string }[];
  selected: string[]; onToggle: (value: string) => void;
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="mr-1 text-xs font-semibold text-[color:var(--color-fog)]">
        <span className="inline-flex items-center gap-1.5"><Icon className="size-3.5 text-[#ff6a1a]" /> {label}</span>
      </legend>
      {options.map((o) => {
        const active = selected.includes(o.value);
        return (
          <button
            key={o.value} type="button" onClick={() => onToggle(o.value)} aria-pressed={active}
            className={cn(
              "inline-flex h-8 items-center gap-1 rounded-full border px-3 text-xs font-semibold transition-all hover:scale-[1.03]",
              active
                ? "border-[#ff6a1a] bg-[#ff6a1a] text-white"
                : "border-[color:var(--color-line-strong)] text-[color:var(--color-bone)] hover:border-[#ff6a1a]/50"
            )}
          >
            {active && <Check className="size-3" />}
            {o.label}
          </button>
        );
      })}
    </fieldset>
  );
}
