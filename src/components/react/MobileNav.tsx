import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, whatsappUrl } from "@/lib/constants";
import logo from "@/assets/virtuous-africa-logo.png";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-bone)] transition-colors hover:border-[#cfa24a]"
      >
        <Menu className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[130] bg-[#2a1509]/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-[color:var(--color-line)] bg-[#2a1509] p-6 shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              <div className="flex items-center justify-between">
                <img
                  src={logo.src}
                  alt="Virtuous Africa Safaris"
                  className="va-logo-light h-8 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-bone)]"
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center justify-between border-b border-[color:var(--color-line)] py-4 font-display text-2xl font-bold text-[color:var(--color-bone)] transition-colors hover:text-[#cfa24a]"
                    >
                      {link.label}
                      <ArrowUpRight className="size-5 text-[color:var(--color-fog-2)]" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#cfa24a] px-6 py-3.5 font-bold text-[#2a1509] transition-colors hover:bg-[#e8cf94]"
                >
                  Plan your safari
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-line-strong)] px-6 py-3.5 font-semibold text-[color:var(--color-bone)]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
