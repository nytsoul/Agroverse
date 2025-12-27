import { useEffect, useState } from "react";
import { Mic, X } from "lucide-react";

// Simple floating widget that embeds an ElevenLabs Talk-To agent
// Uses VITE_ELEVENLABS_AGENT_URL if provided, else falls back to the given link
const VoiceBotWidget = () => {
  const fallbackUrl = "https://elevenlabs.io/app/talk-to?agent_id=agent_9001kb5caygye9qanf9635kfa1dz";
  const agentUrl = (import.meta as any).env?.VITE_ELEVENLABS_AGENT_URL || fallbackUrl;

  const [open, setOpen] = useState<boolean>(() => {
    try {
      return localStorage.getItem("voicebot:open") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("voicebot:open", open ? "1" : "0");
    } catch {
      // ignore storage errors
    }
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-50 select-none">
      {open ? (
        <div className="w-[320px] h-[520px] sm:w-[360px] sm:h-[560px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Voice Assistant</span>
            </div>
            <button
              aria-label="Close voice assistant"
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <iframe
            src={agentUrl}
            title="AI Voice Assistant"
            className="w-full h-[calc(100%-40px)]"
            allow="microphone; autoplay; clipboard-write; encrypted-media"
            allowFullScreen
            style={{ border: "0" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          <Mic className="w-5 h-5" />
          <span className="font-semibold">Talk to AI</span>
        </button>
      )}
    </div>
  );
};

export default VoiceBotWidget;
