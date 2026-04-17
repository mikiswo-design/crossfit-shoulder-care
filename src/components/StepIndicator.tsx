import { ClipboardList, Search, Dumbbell } from "lucide-react";

const steps = [
  { id: 1, label: "スクリーニング", icon: ClipboardList },
  { id: 2, label: "原因推測", icon: Search },
  { id: 3, label: "運動療法", icon: Dumbbell },
];

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {steps.map((step) => {
        const Icon = step.icon;
        const active = currentStep >= step.id;

        return (
          <div
            key={step.id}
            className={`rounded-2xl border p-4 transition ${
              active
                ? "border-orange-400/40 bg-orange-500/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  active ? "bg-orange-400 text-zinc-950" : "bg-zinc-800 text-zinc-300"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Step {step.id}</p>
                <p className="text-sm font-semibold text-white">{step.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
