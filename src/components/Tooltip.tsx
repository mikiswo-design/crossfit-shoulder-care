"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";

interface TooltipProps {
  term: string;
  description: string;
}

export function Tooltip({ term, description }: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-orange-200 transition hover:border-orange-400/40 hover:bg-orange-500/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-expanded={open}
        aria-label={`${term}の説明を表示`}
      >
        {term}
        <Info className="h-3.5 w-3.5" />
      </button>

      {open ? (
        <div className="absolute left-0 top-10 z-20 w-72 rounded-2xl border border-orange-400/30 bg-zinc-950/95 p-4 text-left shadow-2xl shadow-orange-950/30 backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-orange-100">{term}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white"
              aria-label="説明を閉じる"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm leading-6 text-zinc-300">{description}</p>
        </div>
      ) : null}
    </span>
  );
}
