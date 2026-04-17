import { rehabPlans } from "@/lib/rehabData";
import type {
  DiagnosisKey,
  DiagnosisSuggestion,
  EvidenceLink,
  ScreeningAnswers,
} from "@/lib/types";

const evidence = {
  crossFitCoach: {
    label: "CrossFit Coach article",
    url: "https://www.crossfit.com/pro-coach/shoulder-pain-evaluation-for-the-crossfit-coach",
  },
  overheadArticle: {
    label: "CrossFit Overhead Lifts article",
    url: "https://www.crossfit.com/pro-coach/crossfit-overhead-lifts-strong-healthy-shoulders",
  },
  optimalShoulder: {
    label: "CrossFit Journal: The Optimal Shoulder",
    url: "https://library.crossfit.com/free/pdf/CFJ_2014_09_Shoulder_Long3.pdf",
  },
  dyskinesisRisk: {
    label: "PubMed dyskinesis risk review",
    url: "https://pubmed.ncbi.nlm.nih.gov/28735288/",
  },
  thoracicReview: {
    label: "PubMed thoracic spine review",
    url: "https://pubmed.ncbi.nlm.nih.gov/31913918/",
  },
  crossFitInjuryReview: {
    label: "PubMed CrossFit upper-extremity injury review",
    url: "https://pubmed.ncbi.nlm.nih.gov/35867271/",
  },
  japaneseThoracic: {
    label: "日本の胸椎・肩甲骨連動研究",
    url: "https://kanburo35.umin.jp/object/oral.pdf",
  },
} satisfies Record<string, EvidenceLink>;

const templates: Record<DiagnosisKey, Omit<DiagnosisSuggestion, "confidence" | "whyItFits">> = {
  subacromial_impingement: {
    key: "subacromial_impingement",
    title: "肩峰下インピンジメント",
    plainLanguage: "腕を上げる途中で、肩の中のスペースが狭くなりやすいパターン",
    mechanism: {
      mobility:
        "広背筋・小胸筋・胸椎の硬さで、真上へ上げるスペースが不足しやすいです。",
      stability:
        "前鋸筋や下部僧帽筋が遅れると、肩甲骨の上方回旋が足りず、腱がこすれやすくなります。",
      forceBalance:
        "オーバーヘッド動作で体幹から力が伝わりにくいと、肩だけで押し込む形になります。",
    },
    tags: ["インピンジメント", "肩甲骨の上方回旋", "胸椎"],
    evidence: [
      evidence.overheadArticle,
      evidence.crossFitCoach,
      evidence.optimalShoulder,
    ],
  },
  slap_like: {
    key: "slap_like",
    title: "SLAP損傷ライクな深部ストレス",
    plainLanguage: "肩の奥で“引っかかる・抜けそう”が出る、ラブラム周辺ストレスの疑い",
    mechanism: {
      mobility:
        "後方の硬さや胸郭の硬さがあると、ぶら下がりやキャッチで肩の奥へストレスが集中しやすいです。",
      stability:
        "反動動作で肩甲骨の土台が遅れると、上腕骨頭が前上方へズレやすくなります。",
      forceBalance:
        "Butterflyや高回数pull-upで反復牽引が増えると、深部組織の耐久性を超えやすくなります。",
    },
    tags: ["SLAP損傷", "ローテーターカフ", "胸椎"],
    evidence: [
      evidence.crossFitCoach,
      evidence.crossFitInjuryReview,
      evidence.dyskinesisRisk,
    ],
  },
  anterior_instability: {
    key: "anterior_instability",
    title: "前方不安定性",
    plainLanguage: "肩の前側が“抜けそう・ゆるい”感じになりやすいパターン",
    mechanism: {
      mobility:
        "前側ばかり伸ばしすぎると、安定が必要な位置で余計にグラつくことがあります。",
      stability:
        "ローテーターカフと肩甲骨の共同作業が弱いと、重さを受けた時に前へズレやすくなります。",
      forceBalance:
        "Snatchの受けやkippingの切り返しで、スピードに肩の制御が追いつかないと発生しやすいです。",
    },
    tags: ["前方不安定性", "ローテーターカフ", "SLAP損傷"],
    evidence: [
      evidence.crossFitCoach,
      evidence.overheadArticle,
      evidence.crossFitInjuryReview,
    ],
  },
  supraspinatus_tendinopathy: {
    key: "supraspinatus_tendinopathy",
    title: "棘上筋腱症",
    plainLanguage: "肩の外側にズーンと出やすい、ローテーターカフの過負荷パターン",
    mechanism: {
      mobility:
        "胸郭や広背筋が硬いと、外側へ逃げるストレスが増えます。",
      stability:
        "上腕骨頭を真ん中に保つ“ブレ止め”が弱いと、外側の腱が疲れやすくなります。",
      forceBalance:
        "HSPUや高回数プレスで、疲労後も同じ軌道を続けると腱の容量を超えやすいです。",
    },
    tags: ["ローテーターカフ", "インピンジメント"],
    evidence: [
      evidence.crossFitCoach,
      evidence.overheadArticle,
      evidence.optimalShoulder,
    ],
  },
  biceps_tendinopathy: {
    key: "biceps_tendinopathy",
    title: "上腕二頭筋長頭腱の過負荷",
    plainLanguage: "前肩の溝に近いところが痛みやすい、前面オーバーユースのパターン",
    mechanism: {
      mobility:
        "前胸部の硬さで肩が前に出ると、二頭筋長頭腱が圧迫・摩擦を受けやすくなります。",
      stability:
        "押す動作で肩甲骨が安定しないと、前側の腱へ負担が寄ります。",
      forceBalance:
        "ベンチやディップスで深く下ろしすぎると、前面へ張力が集中します。",
    },
    tags: ["前肩痛", "ローテーターカフ"],
    evidence: [evidence.crossFitCoach, evidence.crossFitInjuryReview],
  },
  posterior_internal_impingement: {
    key: "posterior_internal_impingement",
    title: "後方インピンジメント",
    plainLanguage: "腕を高く上げた時に、肩の後ろ側で詰まりやすいパターン",
    mechanism: {
      mobility:
        "胸椎回旋不足や後方組織の硬さで、肩後方の逃げ道が少なくなります。",
      stability:
        "肩甲骨後傾や下部僧帽筋の制御が弱いと、後方での圧縮が増えやすいです。",
      forceBalance:
        "高速度キャッチや反動動作の繰り返しで、後方組織へ微小ストレスが蓄積します。",
    },
    tags: ["後方インピンジメント", "胸椎", "肩甲骨ジスキネジア"],
    evidence: [
      evidence.thoracicReview,
      evidence.overheadArticle,
      evidence.crossFitInjuryReview,
    ],
  },
  scapular_dyskinesis: {
    key: "scapular_dyskinesis",
    title: "肩甲骨ジスキネジア",
    plainLanguage: "肩甲骨の動くタイミングや向きが崩れ、肩が頑張りすぎるパターン",
    mechanism: {
      mobility:
        "胸郭の硬さがあると、肩甲骨が滑る土台が作りにくくなります。",
      stability:
        "前鋸筋・下部僧帽筋・体幹の連携不足で、肩甲骨の上方回旋や後傾が遅れます。",
      forceBalance:
        "海外のパワー重視スタイルで強度だけ先に上がると、位置制御が追いつかないことがあります。",
    },
    tags: ["肩甲骨ジスキネジア", "肩甲骨の上方回旋", "胸郭の硬さ"],
    evidence: [
      evidence.dyskinesisRisk,
      evidence.optimalShoulder,
      evidence.japaneseThoracic,
    ],
  },
  ac_joint_irritation: {
    key: "ac_joint_irritation",
    title: "AC関節刺激パターン",
    plainLanguage: "肩のてっぺん付近が、深いベンチやディップスで圧迫されやすい状態",
    mechanism: {
      mobility:
        "深い可動域を無理に取ると、鎖骨と肩甲骨の関節に圧が集中します。",
      stability:
        "肩甲骨の後傾が足りないと、押し動作の底で上方が詰まりやすいです。",
      forceBalance:
        "胸・三頭筋を優先しすぎて肩甲骨の制御が遅れると、局所圧縮が増えます。",
    },
    tags: ["ベンチプレス", "ディップス"],
    evidence: [evidence.crossFitCoach, evidence.crossFitInjuryReview],
  },
};

function scoreBase(answers: ScreeningAnswers) {
  const scores: Record<DiagnosisKey, number> = {
    subacromial_impingement: 0,
    slap_like: 0,
    anterior_instability: 0,
    supraspinatus_tendinopathy: 0,
    biceps_tendinopathy: 0,
    posterior_internal_impingement: 0,
    scapular_dyskinesis: 0,
    ac_joint_irritation: 0,
  };

  switch (answers.trigger) {
    case "snatch_ohs":
      scores.subacromial_impingement += 3;
      scores.scapular_dyskinesis += 3;
      scores.anterior_instability += 2;
      scores.supraspinatus_tendinopathy += 2;
      scores.posterior_internal_impingement += 1;
      break;
    case "butterfly_pullup":
      scores.slap_like += 4;
      scores.anterior_instability += 3;
      scores.scapular_dyskinesis += 2;
      scores.biceps_tendinopathy += 1;
      break;
    case "hspu":
      scores.subacromial_impingement += 3;
      scores.supraspinatus_tendinopathy += 3;
      scores.scapular_dyskinesis += 2;
      scores.biceps_tendinopathy += 1;
      break;
    case "bench_press":
      scores.biceps_tendinopathy += 3;
      scores.ac_joint_irritation += 3;
      scores.supraspinatus_tendinopathy += 1;
      break;
    case "dips":
      scores.ac_joint_irritation += 4;
      scores.biceps_tendinopathy += 3;
      scores.anterior_instability += 2;
      break;
    case "other_overhead":
      scores.subacromial_impingement += 3;
      scores.scapular_dyskinesis += 3;
      scores.supraspinatus_tendinopathy += 2;
      break;
    default:
      break;
  }

  switch (answers.location) {
    case "anterior":
      scores.biceps_tendinopathy += 3;
      scores.anterior_instability += 2;
      scores.subacromial_impingement += 1;
      scores.slap_like += 1;
      break;
    case "lateral":
      scores.supraspinatus_tendinopathy += 3;
      scores.subacromial_impingement += 3;
      scores.scapular_dyskinesis += 1;
      break;
    case "posterior":
      scores.posterior_internal_impingement += 4;
      scores.scapular_dyskinesis += 2;
      break;
    case "deep":
      scores.slap_like += 3;
      scores.anterior_instability += 2;
      scores.posterior_internal_impingement += 2;
      scores.ac_joint_irritation += 1;
      break;
    default:
      break;
  }

  if (answers.instabilitySense) {
    scores.anterior_instability += 3;
    scores.slap_like += 2;
  }

  if (answers.painWithDailyUse) {
    scores.supraspinatus_tendinopathy += 1;
    scores.biceps_tendinopathy += 1;
    scores.subacromial_impingement += 1;
  }

  if (answers.painSeverity >= 7) {
    scores.supraspinatus_tendinopathy += 1;
    scores.slap_like += 1;
    scores.ac_joint_irritation += 1;
  }

  if (
    answers.trigger === "snatch_ohs" ||
    answers.trigger === "hspu" ||
    answers.trigger === "other_overhead"
  ) {
    scores.scapular_dyskinesis += 1;
  }

  return scores;
}

function confidenceFromScore(score: number): DiagnosisSuggestion["confidence"] {
  if (score >= 6) return "high";
  if (score >= 4) return "medium";
  return "low";
}

function buildWhyItFits(key: DiagnosisKey, answers: ScreeningAnswers): string {
  const triggerMap = {
    snatch_ohs: "スナッチ / OHS",
    butterfly_pullup: "バタフライプルアップ",
    hspu: "HSPU",
    bench_press: "ベンチプレス",
    dips: "ディップス",
    other_overhead: "その他のオーバーヘッド動作",
  } as const;

  const locationMap = {
    anterior: "前側",
    lateral: "外側",
    posterior: "後側",
    deep: "深い場所",
  } as const;

  const base = `「${triggerMap[answers.trigger ?? "other_overhead"]}で痛む」「${locationMap[answers.location ?? "deep"]}が気になる」という組み合わせから、このパターンが候補に上がります。`;

  switch (key) {
    case "subacromial_impingement":
      return `${base} 特に腕を上げる途中の“つまり感”や、翌日に外側へ残る痛みと整合しやすいです。`;
    case "slap_like":
      return `${base} 深部痛、引っかかり感、ぶら下がり動作での違和感がある場合に優先度が上がります。`;
    case "anterior_instability":
      return `${base} 「抜けそう」「怖い」感覚があると、前方不安定性の可能性が高まります。`;
    case "supraspinatus_tendinopathy":
      return `${base} HSPUや高回数プレス後に外側のだるい痛みが残る場合に典型的です。`;
    case "biceps_tendinopathy":
      return `${base} 前肩の溝に近い場所の痛み、押す系の深い位置での痛みと合います。`;
    case "posterior_internal_impingement":
      return `${base} 高い位置やキャッチで後ろが詰まる感じがある時に考えやすいです。`;
    case "scapular_dyskinesis":
      return `${base} 種目が変わっても肩甲骨まわりのコントロール不足が共通要因になりやすいです。`;
    case "ac_joint_irritation":
      return `${base} ベンチやディップスのボトムで肩のてっぺん付近が痛い時に合いやすいです。`;
  }
}

export function getTopDiagnoses(answers: ScreeningAnswers): DiagnosisSuggestion[] {
  const scores = scoreBase(answers);

  return (Object.entries(scores) as Array<[DiagnosisKey, number]>)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => ({
      ...templates[key],
      confidence: confidenceFromScore(score),
      whyItFits: buildWhyItFits(key, answers),
    }));
}

export function getRehabPlan(keys: DiagnosisKey[]) {
  const deduped = Array.from(new Set(keys));
  return deduped.map((key) => ({
    diagnosis: templates[key],
    plan: rehabPlans[key],
  }));
}
