"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Dumbbell, MoonStar, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";
import { getRehabPlan, getTopDiagnoses } from "@/lib/diagnosisLogic";
import { ReferenceSection } from "@/components/ReferenceSection";
import { RedFlagAlert } from "@/components/RedFlagAlert";
import { StepIndicator } from "@/components/StepIndicator";
import { StepDiagnosis } from "@/components/steps/StepDiagnosis";
import { StepRehab } from "@/components/steps/StepRehab";
import { StepScreening } from "@/components/steps/StepScreening";
import type { ScreeningAnswers } from "@/lib/types";

const initialAnswers: ScreeningAnswers = {
  trigger: null,
  location: null,
  redFlags: [],
  painSeverity: 4,
  painWithDailyUse: false,
  instabilitySense: false,
};

export function ShoulderCareApp() {
  const [answers, setAnswers] = useState<ScreeningAnswers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const redFlagDetected = submitted && answers.redFlags.length > 0;

  const diagnoses = useMemo(() => {
    if (!submitted || redFlagDetected || !answers.trigger || !answers.location) {
      return [];
    }
    return getTopDiagnoses(answers);
  }, [answers, redFlagDetected, submitted]);

  const rehabBundles = useMemo(() => {
    if (diagnoses.length === 0) return [];
    return getRehabPlan(diagnoses.map((item) => item.key));
  }, [diagnoses]);

  const currentStep = redFlagDetected ? 1 : diagnoses.length > 0 ? 3 : 1;

  const handleSubmit = () => {
    if (!answers.trigger || !answers.location) {
      setValidationError("痛みのトリガーとなる動作と、痛みの部位を選択してください。");
      return;
    }

    setValidationError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setSubmitted(false);
    setValidationError(null);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.16),_transparent_28%),linear-gradient(180deg,_#121212_0%,_#09090b_100%)] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                <MoonStar className="h-4 w-4" />
                CrossFit Shoulder Care
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Diagnostic & Rehab Tool
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                スポーツ整形外科 × 理学療法 × CrossFit L3 コーチング × モダンWeb実装の視点を統合した、肩痛セルフチェックSPAです。
                CrossFit特有の overhead / kipping / pressing ストレスを分岐ロジックで整理し、原因推測とエビデンス付き運動療法を提示します。
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  レッドフラッグ検出
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-orange-300" />
                  専門用語の翻訳
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Dumbbell className="h-4 w-4 text-sky-300" />
                  Mobility / Stability / Scaling
                </span>
              </div>
            </div>

            <div className="relative rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-6">
              <div className="grid gap-4">
                <div className="rounded-3xl border border-orange-400/20 bg-orange-500/10 p-4">
                  <p className="text-sm font-semibold text-orange-100">視覚ガイド</p>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs text-zinc-200">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-3xl">🏋️</div>
                      <p className="mt-2">Overhead</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-3xl">🦴</div>
                      <p className="mt-2">Scapula</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-3xl">🫁</div>
                      <p className="mt-2">Thorax</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">海外のパワー重視スタイル</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      強度・反復・スピードが先行すると、肩甲骨やローテーターカフの位置制御が遅れやすい。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">日本人に多い胸郭の硬さ</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      デスクワーク姿勢や呼吸パターンの影響で、胸椎伸展・回旋不足から overhead が作りにくいケースに配慮。
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => document.getElementById("screening")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-300"
                >
                  今すぐセルフチェック
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <StepIndicator currentStep={currentStep} />

        <div id="screening">
          <StepScreening
            answers={answers}
            onChange={setAnswers}
            onSubmit={handleSubmit}
            validationError={validationError}
          />
        </div>

        {submitted ? (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
            >
              <RefreshCcw className="h-4 w-4" />
              入力をリセット
            </button>
          </div>
        ) : null}

        {redFlagDetected ? <RedFlagAlert /> : null}

        {!redFlagDetected && diagnoses.length > 0 ? (
          <>
            <StepDiagnosis diagnoses={diagnoses} />
            <StepRehab bundles={rehabBundles} />
          </>
        ) : null}

        <ReferenceSection />
      </div>
    </div>
  );
}
