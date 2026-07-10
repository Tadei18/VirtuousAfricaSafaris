import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

// Floating action button — opens a WhatsApp chat to the primary number in a
// new tab. Renders as a plain anchor (no client JS needed).
export default function ChatLauncher() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Virtuous Africa Safaris on WhatsApp"
      className="group fixed bottom-5 right-4 z-[110] inline-flex items-center gap-2.5 rounded-full bg-[#3f200f] px-5 py-4 font-bold text-white shadow-[0_14px_40px_rgba(63,32,15,0.45)] transition-all hover:scale-105 hover:bg-[#5c3b26] sm:right-6"
    >
      <MessageCircle className="size-6" />
      <span className="hidden text-sm sm:inline">Plan my safari</span>
    </a>
  );
}
