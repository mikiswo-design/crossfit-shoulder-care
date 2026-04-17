import { Activity, BadgeAlert, CircleHelp, MoveRight, ShieldPlus, Siren, Waves } from "lucide-react";
import type { PainLocation, PainTrigger, RedFlagKey, ScreeningAnswers } from "@/lib/types";

const triggerOptions: Array<{ value: PainTrigger; label: string; emoji: string; detail: string }> = [
  { value: "snatch_ohs", label: "スナッチ / OHS", emoji: "🏋️", detail: "キャッチ、受け、深い overhead squat" },
  { value: "butterfly_pullup", label: "バタフライプルアップ", emoji: "🦋", detail: "kipping / butterfly / bar gymnastics" },
  { value: "hspu", label: "HSPU", emoji: "🤸", detail: "壁倒立、strict / kipping HSPU" },
  { value: "bench_press", label: "ベンチプレス", emoji: "🛏️", detail: "底での張り、押し返しで痛む" },
  { value: "dips", label: "ディップス", emoji: "⬇️", detail: "深いボトム、support hold で不快" },
  { value: "other_overhead", label: "その他の overhead", emoji: "📦", detail: "push press / jerk / wall walk など" },
];

const locationOptions: Array<{ value: PainLocation; label: string; detail: string }> = [
  { value: "anterior", label: "前方", detail: "前肩、鎖骨の下、二頭筋の溝あたり" },
  { value: "lateral", label: "外側", detail: "肩の横〜上腕外側にズーンと響く" },
  { value: "posterior", label: "後方", detail: "肩の後ろ、キャッチや高挙上で詰まる" },
  { value: "deep", label: "深部", detail: "関節の奥で引っかかる・抜けそう" },
];

const redFlagOptions: Array<{ value: RedFlagKey; label: string }> = [
  { value: "nightPain", label: "夜間痛がある" },
  { value: "weakness", label: "腕に力が入らない" },
  { value: "numbness", label: "しびれがある" },
];

interface StepScreeningProps {
  answers: ScreeningAnswers;
  onChange: (next: ScreeningAnswers) => void;
  onSubmit: () => void;
  validationError: string | null;
}

export function StepScreening({
  answers,
  onChange,
  onSubmit,
  validationError,
}: StepScreeningProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Step 1</p>
          <h2 className="mt-2 text-2xl font-bold text-white">ユーザー・スクリーニング</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-sm text-zinc-300">
          <CircleHelp className="h-4 w-4 text-orange-300" />
          選択式UIで30秒セルフチェック
        </div>
      </div>

      <div className="grid gap-6">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-100">
            <Activity className="h-4 w-4 text-orange-300" />
            痛みのトリガーとなる動作
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {triggerOptions.map((option) => {
              const active = answers.trigger === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange({ ...answers, trigger: option.value })}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-orange-400/40 bg-orange-500/10"
                      : "border-white/10 bg-zinc-950/50 hover:border-white/20"
                  }`}
                >
                  <div className="mb-2 text-2xl">{option.emoji}</div>
                  <p className="font-semibold text-white">{option.label}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{option.detail}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-100">
            <Waves className="h-4 w-4 text-orange-300" />
            痛みの部位
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {locationOptions.map((option) => {
              const active = answers.location === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange({ ...answers, location: option.value })}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-orange-400/40 bg-orange-500/10"
                      : "border-white/10 bg-zinc-950/50 hover:border-white/20"
                  }`}
                >
                  <p className="font-semibold text-white">{option.label}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{option.detail}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <BadgeAlert className="h-4 w-4 text-rose-300" />
              レッドフラッグ（警告）チェック
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {redFlagOptions.map((option) => {
                const active = answers.redFlags.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      const exists = answers.redFlags.includes(option.value);
                      onChange({
                        ...answers,
                        redFlags: exists
                          ? answers.redFlags.filter((flag) => flag !== option.value)
                          : [...answers.redFlags, option.value],
                      });
                    }}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-rose-400/40 bg-rose-500/10 text-white"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                    }`}
                  >
                    <p className="font-semibold">{option.label}</p>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              1つでも当てはまる場合、このアプリはエクササイズ提案を止めて受診を優先します。
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <Siren className="h-4 w-4 text-orange-300" />
              補足情報
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-zinc-300">痛みの強さ: {answers.painSeverity}/10</span>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={answers.painSeverity}
                  onChange={(event) => onChange({ ...answers, painSeverity: Number(event.target.value) })}
                  className="w-full accent-orange-400"
                />
              </label>

              <button
                type="button"
                onClick={() => onChange({ ...answers, painWithDailyUse: !answers.painWithDailyUse })}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  answers.painWithDailyUse
                    ? "border-orange-400/40 bg-orange-500/10 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300"
                }`}
              >
                日常動作でも痛い
                <ShieldPlus className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onChange({ ...answers, instabilitySense: !answers.instabilitySense })}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  answers.instabilitySense
                    ? "border-orange-400/40 bg-orange-500/10 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300"
                }`}
              >
                抜けそう / ぐらつく感じがある
                <MoveRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {validationError ? (
        <p className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {validationError}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-zinc-400">
          医療機関の代わりではなく、CrossFit特有の肩痛を整理するためのセルフスクリーンです。
        </p>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-300"
        >
          原因を推測する
          <MoveRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
