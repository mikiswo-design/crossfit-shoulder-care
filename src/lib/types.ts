export type PainTrigger =
  | "snatch_ohs"
  | "butterfly_pullup"
  | "hspu"
  | "bench_press"
  | "dips"
  | "other_overhead";

export type PainLocation = "anterior" | "lateral" | "posterior" | "deep";

export type RedFlagKey = "nightPain" | "weakness" | "numbness";

export type DiagnosisKey =
  | "subacromial_impingement"
  | "slap_like"
  | "anterior_instability"
  | "supraspinatus_tendinopathy"
  | "biceps_tendinopathy"
  | "posterior_internal_impingement"
  | "scapular_dyskinesis"
  | "ac_joint_irritation";

export type RehabCategory = "mobility" | "stability" | "scaling";

export interface ScreeningAnswers {
  trigger: PainTrigger | null;
  location: PainLocation | null;
  redFlags: RedFlagKey[];
  painSeverity: number;
  painWithDailyUse: boolean;
  instabilitySense: boolean;
}

export interface EvidenceLink {
  label: string;
  url: string;
  note?: string;
}

export interface DiagnosisSuggestion {
  key: DiagnosisKey;
  title: string;
  plainLanguage: string;
  whyItFits: string;
  mechanism: {
    mobility: string;
    stability: string;
    forceBalance: string;
  };
  confidence: "high" | "medium" | "low";
  tags: string[];
  evidence: EvidenceLink[];
}

export interface RehabItem {
  id: string;
  title: string;
  subtitle: string;
  howTo: string[];
  dosage: string;
  caution: string;
  emoji: string;
  video?: {
    title: string;
    url: string;
  };
  evidence: EvidenceLink[];
}

export interface RehabPlan {
  mobility: RehabItem[];
  stability: RehabItem[];
  scaling: RehabItem[];
}

export interface AppReference {
  title: string;
  url: string;
  type: "review" | "crossfit" | "japanese" | "video" | "anatomy";
  summary: string;
}
