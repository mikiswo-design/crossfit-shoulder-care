import { AlertTriangle, PhoneCall, ShieldAlert } from "lucide-react";

export function RedFlagAlert() {
  return (
    <section className="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 shadow-lg shadow-rose-950/20 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <div className="space-y-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-rose-100 uppercase">
              <AlertTriangle className="h-4 w-4" />
              レッドフラッグ検出
            </p>
            <h2 className="text-2xl font-bold text-white">運動療法の提案を停止し、整形外科 / スポーツドクター受診を優先してください</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
              <p className="mb-2 text-sm font-semibold text-rose-200">この画面が出る条件</p>
              <ul className="space-y-2 text-sm leading-6 text-zinc-200">
                <li>• 夜間痛がある</li>
                <li>• 腕に力が入らない</li>
                <li>• しびれがある</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
              <p className="mb-2 text-sm font-semibold text-rose-200">受診を急ぐ理由</p>
              <p className="text-sm leading-6 text-zinc-200">
                腱板断裂、神経症状、急性外傷、炎症性病変などが隠れている可能性があります。CrossFitの継続可否は、画像評価や徒手検査を含めた対面評価で判断するのが安全です。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-rose-300/30 bg-white/5 p-4 text-sm leading-6 text-zinc-200">
            <p className="font-semibold text-white">受診までのセルフルール</p>
            <p>
              高負荷の overhead・kipping・ディップスは中止。日常動作で強い痛みが出る可動域も無理に動かさないでください。症状が急に悪化した場合は、早めの医療相談をおすすめします。
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
            <PhoneCall className="h-4 w-4 text-rose-300" />
            まずは受診優先、その後に理学療法ベースの段階復帰へ
          </div>
        </div>
      </div>
    </section>
  );
}
