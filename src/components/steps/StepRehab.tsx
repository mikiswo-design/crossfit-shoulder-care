import { ExternalLink, Move3D, Shield, TrendingDown } from "lucide-react";
import type { DiagnosisSuggestion, RehabCategory, RehabPlan } from "@/lib/types";

interface RehabBundle {
  diagnosis: Omit<DiagnosisSuggestion, "confidence" | "whyItFits">;
  plan: RehabPlan;
}

interface StepRehabProps {
  bundles: RehabBundle[];
}

const categoryMeta: Record<RehabCategory, { label: string; icon: typeof Move3D; color: string }> = {
  mobility: { label: "Mobility", icon: Move3D, color: "border-sky-400/30 bg-sky-500/10 text-sky-100" },
  stability: { label: "Stability", icon: Shield, color: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100" },
  scaling: { label: "Scaling Strategy", icon: TrendingDown, color: "border-amber-400/30 bg-amber-500/10 text-amber-100" },
};

export function StepRehab({ bundles }: StepRehabProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Step 3</p>
          <h2 className="mt-2 text-2xl font-bold text-white">パーソナライズされた運動療法の提案</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300">
            ここでは「可動域を作る → 安定させる → 痛みを避けて継続する」の順で、CrossFitに戻りやすい処方箋へ落とし込みます。
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm leading-6 text-zinc-300">
          <p className="font-semibold text-white">処方の原則</p>
          <p>痛みが 0〜2/10 に収まり、翌日増悪しない負荷を上限にします。3/10を超えるなら可動域か負荷を下げます。</p>
        </div>
      </div>

      <div className="space-y-8">
        {bundles.map(({ diagnosis, plan }) => {
          const sections: Array<[RehabCategory, RehabPlan[RehabCategory]]> = [
            ["mobility", plan.mobility],
            ["stability", plan.stability],
            ["scaling", plan.scaling],
          ];

          return (
            <article key={diagnosis.key} className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5 sm:p-6">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm text-orange-200">処方対象</p>
                  <h3 className="text-2xl font-bold text-white">{diagnosis.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300">{diagnosis.plainLanguage}</p>
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-3">
                {sections.map(([category, items]) => {
                  const meta = categoryMeta[category];
                  const Icon = meta.icon;

                  return (
                    <div key={category} className="space-y-4">
                      <div className={`rounded-2xl border px-4 py-3 ${meta.color}`}>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Icon className="h-4 w-4" />
                          {meta.label}
                        </div>
                      </div>

                      {items.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                              <div className="mb-1 text-2xl">{item.emoji}</div>
                              <h4 className="font-semibold text-white">{item.title}</h4>
                              <p className="mt-1 text-sm leading-6 text-orange-100">{item.subtitle}</p>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm leading-6 text-zinc-300">
                            {item.howTo.map((step, index) => (
                              <p key={step}>
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-zinc-100">
                                  {index + 1}
                                </span>
                                {step}
                              </p>
                            ))}
                          </div>

                          <div className="mt-4 grid gap-3">
                            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3 text-sm text-zinc-200">
                              <p className="font-semibold text-white">処方量</p>
                              <p className="mt-1">{item.dosage}</p>
                            </div>
                            <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-3 text-sm text-amber-100">
                              <p className="font-semibold">注意点</p>
                              <p className="mt-1 leading-6">{item.caution}</p>
                            </div>
                          </div>

                          {item.video ? (
                            <a
                              href={item.video.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-sky-400/20 bg-sky-500/5 px-4 py-3 text-sm text-sky-100 transition hover:border-sky-300/40"
                            >
                              <span>動画: {item.video.title}</span>
                              <ExternalLink className="h-4 w-4 shrink-0" />
                            </a>
                          ) : null}

                          <div className="mt-4 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">参考文献</p>
                            {item.evidence.map((reference) => (
                              <a
                                key={reference.url}
                                href={reference.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-orange-400/40 hover:text-white"
                              >
                                <span>{reference.label}</span>
                                <ExternalLink className="mt-1 h-4 w-4 shrink-0" />
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
