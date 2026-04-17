import { ExternalLink, FileText, Globe, PlayCircle, ShieldCheck } from "lucide-react";
import { appReferences } from "@/lib/rehabData";

const iconMap = {
  review: FileText,
  crossfit: Globe,
  japanese: ShieldCheck,
  video: PlayCircle,
  anatomy: FileText,
};

export function ReferenceSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Evidence & Sources</p>
          <h2 className="mt-2 text-2xl font-bold text-white">参考文献 / 出典リンク</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300">
            本アプリはCrossFit現場のコーチング知見、PubMed掲載レビュー、国内理学療法領域の胸椎・肩甲骨連動の示唆を統合して構成しています。
            ただし、これはセルフスクリーニング支援であり、確定診断ではありません。
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {appReferences.map((reference) => {
          const Icon = iconMap[reference.type];
          return (
            <a
              key={reference.url}
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-zinc-950/60 p-4 transition hover:border-orange-400/40 hover:bg-zinc-950"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-200">
                  <Icon className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-orange-200" />
              </div>
              <h3 className="text-sm font-semibold leading-6 text-white">{reference.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{reference.summary}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
