import { Brain, ExternalLink, Gauge, Sparkles } from "lucide-react";
import { tooltips } from "@/data/tooltips";
import { Tooltip } from "@/components/Tooltip";
import type { DiagnosisSuggestion } from "@/lib/types";

const confidenceStyle = {
  high: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  medium: "border-amber-400/30 bg-amber-500/10 text-amber-200",
  low: "border-zinc-500/30 bg-zinc-500/10 text-zinc-200",
} as const;

interface StepDiagnosisProps {
  diagnoses: DiagnosisSuggestion[];
}

export function StepDiagnosis({ diagnoses }: StepDiagnosisProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Step 2</p>
          <h2 className="mt-2 text-2xl font-bold text-white">診断ロジックと専門用語の翻訳</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300">
            確定診断ではありませんが、CrossFitの動作特性と肩の負荷パターンから、考えやすい原因を3つに絞って表示します。
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm leading-6 text-zinc-300">
          <p className="font-semibold text-white">海外 × 日本の視点を統合</p>
          <p>
            海外のパワー重視スタイルでは「強度が位置制御を追い越す」問題が起こりやすく、日本では「胸郭の硬さで overhead が作りづらい」パターンも目立ちます。
          </p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {diagnoses.map((diagnosis, index) => (
          <article
            key={diagnosis.key}
            className="rounded-3xl border border-white/10 bg-zinc-950/60 p-5 shadow-lg shadow-black/20"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">候補 {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{diagnosis.title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-100">{diagnosis.plainLanguage}</p>
              </div>
              <span
                className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${confidenceStyle[diagnosis.confidence]}`}
              >
                <Gauge className="mr-1 h-3.5 w-3.5" />
                {diagnosis.confidence}
              </span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {diagnosis.tags.map((tag) => (
                <Tooltip key={tag} term={tag} description={tooltips[tag] ?? "用語解説は準備中です。"} />
              ))}
            </div>

            <div className="rounded-2xl border border-orange-400/20 bg-orange-500/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange-200">
                <Sparkles className="h-4 w-4" />
                なぜこの動作でそこが痛むのか
              </div>
              <p className="text-sm leading-7 text-zinc-200">{diagnosis.whyItFits}</p>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold text-white">柔軟性の観点</p>
                <p className="text-sm leading-6 text-zinc-300">{diagnosis.mechanism.mobility}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold text-white">安定性の観点</p>
                <p className="text-sm leading-6 text-zinc-300">{diagnosis.mechanism.stability}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold text-white">筋出力バランスの観点</p>
                <p className="text-sm leading-6 text-zinc-300">{diagnosis.mechanism.forceBalance}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/80 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-100">
                <Brain className="h-4 w-4 text-orange-300" />
                参考リンク
              </div>
              <div className="space-y-2">
                {diagnosis.evidence.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300 transition hover:border-orange-400/40 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
