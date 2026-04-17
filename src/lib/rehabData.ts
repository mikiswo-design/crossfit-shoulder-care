import type { AppReference, DiagnosisKey, EvidenceLink, RehabPlan } from "@/lib/types";

const crossFitCoach: EvidenceLink = {
  label: "CrossFit: Shoulder Pain Evaluation for the CrossFit Coach",
  url: "https://www.crossfit.com/pro-coach/shoulder-pain-evaluation-for-the-crossfit-coach",
  note: "痛みの経過、痛みが翌日に残るか、既往歴、紹介の必要性を整理。",
};

const overheadArticle: EvidenceLink = {
  label: "CrossFit: How Overhead Lifts Build Stronger, Healthier Shoulders",
  url: "https://www.crossfit.com/pro-coach/crossfit-overhead-lifts-strong-healthy-shoulders",
  note: "肩甲骨上方回旋、胸椎伸展、外旋キュー、OHSのテクニック修正。",
};

const optimalShoulder: EvidenceLink = {
  label: "CrossFit Journal: The Optimal Shoulder",
  url: "https://library.crossfit.com/free/pdf/CFJ_2014_09_Shoulder_Long3.pdf",
  note: "Mobility→Stabilityの順序、Push-up PlusやShoulder Wなどのドリル。",
};

const dyskinesisRisk: EvidenceLink = {
  label: "PubMed: Scapular dyskinesis increases future shoulder pain risk by 43%",
  url: "https://pubmed.ncbi.nlm.nih.gov/28735288/",
  note: "無症候性アスリートでも肩甲骨運動異常が将来の肩痛リスク増加と関連。",
};

const thoracicReview: EvidenceLink = {
  label: "PubMed: The Thoracic Spine in the Overhead Athlete",
  url: "https://pubmed.ncbi.nlm.nih.gov/31913918/",
  note: "胸椎の神経筋コントロール不全が隣接部位の代償を招く可能性。",
};

const crossFitInjuryReview: EvidenceLink = {
  label: "PubMed: Upper Extremity Injuries in CrossFit Athletes",
  url: "https://pubmed.ncbi.nlm.nih.gov/35867271/",
  note: "CrossFitでは肩・肘・手関節の障害が比較的多く、臨床家の理解が重要。",
};

const japaneseThoracic: EvidenceLink = {
  label: "関東ブロック理学療法士学会: 肩関節屈曲動作における肩甲骨と胸椎の関係",
  url: "https://kanburo35.umin.jp/object/oral.pdf",
  note: "肩関節屈曲前半で肩甲骨後傾と胸椎後弯角に相関。小規模・健常男性中心。",
};

const videos = {
  wallSlide: {
    title: "Wall Slides for Serratus Anterior Activation - [P]rehab",
    url: "https://www.youtube.com/watch?v=oMSVe7PWJ3o",
  },
  rotatorCuff: {
    title: "3 Best Rotator Cuff Exercises - [P]rehab",
    url: "https://www.youtube.com/watch?v=nxRzShxVvIw",
  },
  isometricER: {
    title: "Isometric External Rotation - Rehab Hero",
    url: "https://www.youtube.com/watch?v=1uz4DoaSY2M",
  },
  serratusWallIso: {
    title: "Shoulder- Serratus Wall Iso - Resolute Physical Therapy & Performance",
    url: "https://www.youtube.com/watch?v=rbZjwqM3HD4",
  },
};

export const rehabPlans: Record<DiagnosisKey, RehabPlan> = {
  subacromial_impingement: {
    mobility: [
      {
        id: "thoracic-open-book",
        title: "Open Book + 呼吸リセット",
        subtitle: "胸椎と胸郭を広げて、オーバーヘッド時の逃げ道を作る",
        howTo: [
          "横向きで股関節と膝を曲げ、上の腕をゆっくり開く",
          "3呼吸かけて胸を広げ、腰ではなく胸の高さで回す",
          "肋骨が前に飛び出しすぎない範囲で行う",
        ],
        dosage: "左右 各5〜6回 × 2セット",
        caution: "しびれや鋭い痛みが出たら中止。",
        emoji: "🫁",
        evidence: [thoracicReview, overheadArticle, japaneseThoracic],
      },
      {
        id: "lat-release",
        title: "ラット/大円筋ストレッチ",
        subtitle: "バーやラックを使って広背筋の突っ張りを減らす",
        howTo: [
          "ラックやボックスに両手を置き、股関節からお辞儀する",
          "脇の下が伸びる位置で5秒呼吸",
          "腰を反らせてごまかさない",
        ],
        dosage: "30〜45秒 × 2〜3回",
        caution: "前側の不安定感が強い日は深く入りすぎない。",
        emoji: "🧵",
        evidence: [overheadArticle, crossFitCoach],
      },
    ],
    stability: [
      {
        id: "serratus-wall-slide",
        title: "Serratus Wall Slide",
        subtitle: "肩甲骨の上方回旋を促して、腕を上げた時のスペースを確保",
        howTo: [
          "前腕を壁につけ、軽く外へ押しながら上へスライド",
          "肩をすくめすぎず、肋骨を下げたまま行う",
          "上で2秒止めてから戻す",
        ],
        dosage: "8〜10回 × 2〜3セット",
        caution: "痛みが3/10を超えるなら可動域を浅くする。",
        emoji: "🧱",
        video: videos.wallSlide,
        evidence: [optimalShoulder, dyskinesisRisk, overheadArticle],
      },
      {
        id: "band-er",
        title: "バンド外旋（Shoulder W）",
        subtitle: "ローテーターカフの“ブレ止め”を作る",
        howTo: [
          "肘を体側につけ、バンドを軽く引き分ける",
          "肩甲骨は寄せすぎず、首を長く保つ",
          "最後は1秒止める",
        ],
        dosage: "12〜15回 × 2セット",
        caution: "前肩に刺さる痛みがある時は負荷を下げる。",
        emoji: "🎯",
        video: videos.rotatorCuff,
        evidence: [optimalShoulder, overheadArticle],
      },
    ],
    scaling: [
      {
        id: "scale-ohs",
        title: "Snatch/OHS を Landmine Press または Front Rack Work へ一時変更",
        subtitle: "痛みを避けつつ脚・体幹の刺激は残す",
        howTo: [
          "OHSはFront Squatへ置換",
          "SnatchはHigh PullかMuscle Snatchの軽負荷に縮小",
          "翌日に痛みが残らない量を上限にする",
        ],
        dosage: "1〜2週間を目安に再評価",
        caution: "“当日は平気でも翌日悪化”ならやり過ぎ。",
        emoji: "📉",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
  slap_like: {
    mobility: [
      {
        id: "posterior-shoulder-stretch",
        title: "Posterior Shoulder Stretch",
        subtitle: "後方組織の張りを軽くし、深部ストレスを減らす",
        howTo: [
          "腕を胸の前へ引き寄せる",
          "肩をすくめず、肩甲骨を軽く固定する",
          "深い関節痛ではなく筋肉の張り感で止める",
        ],
        dosage: "20〜30秒 × 2回",
        caution: "引っかかり感や抜けそうな感じが強ければ中止。",
        emoji: "🪢",
        evidence: [crossFitCoach, thoracicReview],
      },
    ],
    stability: [
      {
        id: "er-isometric",
        title: "外旋アイソメトリック",
        subtitle: "関節に優しく、前方へのズレを抑える下地作り",
        howTo: [
          "肘を90度で体側につけ、壁やタオルへ外向きに押す",
          "肩はすくめず、みぞおちを軽く締める",
          "痛みが増えない範囲で5秒キープ",
        ],
        dosage: "5秒 × 5〜6回 × 2セット",
        caution: "深部痛が増す日は強く押しすぎない。",
        emoji: "🧊",
        video: videos.isometricER,
        evidence: [crossFitCoach, overheadArticle],
      },
      {
        id: "serratus-wall-iso",
        title: "Serratus Wall Iso",
        subtitle: "肩甲骨の土台を安定させて、ぶら下がり系動作の暴れを減らす",
        howTo: [
          "前腕で壁を押し、肩甲骨を肋骨に貼り付ける意識",
          "首を長く保ったまま5秒止める",
          "腹圧を抜かずに行う",
        ],
        dosage: "5〜6回 × 2セット",
        caution: "肘や手首に違和感があれば角度を調整。",
        emoji: "🛡️",
        video: videos.serratusWallIso,
        evidence: [optimalShoulder, dyskinesisRisk],
      },
    ],
    scaling: [
      {
        id: "scale-kipping",
        title: "Butterfly/Kipping を Strict Pull-up, Ring Row, Tempo Pull へ変更",
        subtitle: "反動で深部にかかる牽引ストレスを下げる",
        howTo: [
          "バタフライは一旦中止し、Strict 3〜5回の質を優先",
          "高ボリュームの日はRing Rowでボリューム確保",
          "Bar Muscle-upはFoot-assisted Drillへ縮小",
        ],
        dosage: "2週間ごとに再テスト",
        caution: "“抜けそう・ポップ感”がある時は受診優先。",
        emoji: "🔁",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
  anterior_instability: {
    mobility: [
      {
        id: "pec-minor-soft-tissue",
        title: "小胸筋リリース",
        subtitle: "前側で肩甲骨が引っ張られ続ける感覚を和らげる",
        howTo: [
          "ラクロスボールを鎖骨の下・胸の外側に当てる",
          "30秒ほど軽く呼吸しながら圧をかける",
          "しびれがあれば位置をずらす",
        ],
        dosage: "30秒 × 2回",
        caution: "神経症状があれば中止。",
        emoji: "⚫",
        evidence: [overheadArticle, thoracicReview],
      },
    ],
    stability: [
      {
        id: "bottoms-up-carry",
        title: "軽負荷 Bottom-up Carry",
        subtitle: "不安定な肩を“力まないで安定させる”練習",
        howTo: [
          "軽いケトルベルを底上げで持つ",
          "肘は体側〜肩の少し前で、肋骨は下げる",
          "20〜30m歩くか10〜20秒保持",
        ],
        dosage: "2〜3セット",
        caution: "ぐらつきが強い場合は通常キャリーへ変更。",
        emoji: "🫖",
        evidence: [overheadArticle, thoracicReview],
      },
      {
        id: "isometric-press-hold",
        title: "Half-kneeling Press Hold",
        subtitle: "爆発系の前に“止める力”を作る",
        howTo: [
          "ハーフニーリングで軽ダンベルを耳の横へ",
          "10秒キープし、肩前方へ抜けない位置を覚える",
          "骨盤を正面に保つ",
        ],
        dosage: "10秒 × 4回",
        caution: "不安定感があれば可動域を少し下げる。",
        emoji: "🧱",
        evidence: [crossFitCoach, optimalShoulder],
      },
    ],
    scaling: [
      {
        id: "avoid-aggressive-catch",
        title: "Loaded Snatch のキャッチを一時制限",
        subtitle: "“速く引いて遠くで受ける”局面のストレスを下げる",
        howTo: [
          "Snatch Balance と heavy OHS は一時停止",
          "Power Snatch + Pressing Snatch Balance など低速ドリルへ変更",
          "Pull-upはStrict を先に満たしてから kipping へ戻す",
        ],
        dosage: "フォーム再学習期間として1〜3週間",
        caution: "脱力感や亜脱臼感があれば医療機関へ。",
        emoji: "🚧",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
  supraspinatus_tendinopathy: {
    mobility: [
      {
        id: "foam-roll-pec-lat",
        title: "胸前面 + 広背筋リリース",
        subtitle: "外側の引っかかり感を減らすための前準備",
        howTo: [
          "胸前面→脇の下周辺を軽くほぐす",
          "呼吸を止めずに30秒ずつ",
          "ゴリゴリ押し込みすぎない",
        ],
        dosage: "30秒 × 2ラウンド",
        caution: "炎症が強い日は刺激を軽く。",
        emoji: "🌀",
        evidence: [crossFitCoach, overheadArticle],
      },
    ],
    stability: [
      {
        id: "scaption-raise",
        title: "Scaption Raise",
        subtitle: "肩の“楽な角度”で棘上筋に穏やかな刺激",
        howTo: [
          "親指を上に向け、身体の真横ではなく少し前で挙上",
          "60〜80度程度まででよい",
          "反動を使わず2秒で上げて2秒で下ろす",
        ],
        dosage: "10〜12回 × 2セット",
        caution: "鋭い痛みが出る角度までは上げない。",
        emoji: "📐",
        evidence: [overheadArticle, optimalShoulder],
      },
      {
        id: "band-rotation-combo",
        title: "外旋 + 軽い挙上",
        subtitle: "腕を上げる前に上腕骨頭を中央へ保つ",
        howTo: [
          "外旋してから30〜45度だけ挙上",
          "ゆっくり戻して1回",
          "首がすくまないように行う",
        ],
        dosage: "8回 × 2セット",
        caution: "疲労でフォームが崩れたら終了。",
        emoji: "🎚️",
        video: videos.rotatorCuff,
        evidence: [optimalShoulder, dyskinesisRisk],
      },
    ],
    scaling: [
      {
        id: "limit-kipping-volume",
        title: "高回数の HSPU / Kipping volume を 30〜50% カット",
        subtitle: "腱の回復速度に合わせてボリューム管理",
        howTo: [
          "HSPUはBox Pike Push-upへ変更",
          "高回数日はEMOMで分割し、失速前に止める",
          "痛みより“翌朝の反応”を指標に増減する",
        ],
        dosage: "週ごとに5〜10%ずつ再構築",
        caution: "連日オーバーヘッドの重複を避ける。",
        emoji: "📊",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
  biceps_tendinopathy: {
    mobility: [
      {
        id: "front-shoulder-open",
        title: "前肩オープナー",
        subtitle: "前方の圧縮ストレスを軽くする",
        howTo: [
          "壁やドアフレームで胸を軽く開く",
          "肩を前に突き出さず、肩甲骨は軽く後傾",
          "呼吸をゆっくり続ける",
        ],
        dosage: "20〜30秒 × 2回",
        caution: "前方不安定感がある人は控えめに。",
        emoji: "🚪",
        evidence: [crossFitCoach, thoracicReview],
      },
    ],
    stability: [
      {
        id: "hammer-curl-iso",
        title: "Hammer Curl Iso Hold",
        subtitle: "長頭腱へ優しい範囲で荷重耐性をつける",
        howTo: [
          "軽ダンベルで肘90度を保持",
          "肩をすくめず、手首は真っ直ぐ",
          "左右差を確認しながら行う",
        ],
        dosage: "15秒 × 4回",
        caution: "鋭い前肩痛なら角度を変える。",
        emoji: "🔨",
        evidence: [crossFitCoach],
      },
      {
        id: "scap-push-up",
        title: "Scapular Push-up",
        subtitle: "前肩に頼りすぎない押し動作の土台作り",
        howTo: [
          "肘をほぼ伸ばしたまま、肩甲骨だけ前後に動かす",
          "首をすくめず、みぞおちを支える",
          "最前方で1秒止める",
        ],
        dosage: "10〜12回 × 2セット",
        caution: "手首負担が強ければ壁で行う。",
        emoji: "💪",
        evidence: [optimalShoulder, overheadArticle],
      },
    ],
    scaling: [
      {
        id: "scale-bench-dips",
        title: "Bench / Dips は ROM を半分にし、Neutral Grip Press へ変更",
        subtitle: "肩前面の伸張ストレスを下げながら押す力は維持",
        howTo: [
          "DipsはSupport HoldやBand-assistedへ",
          "Benchはダンベルのニュートラルグリップに変更",
          "ボトムでの深いストレッチ感は避ける",
        ],
        dosage: "痛みが2/10以下で2週継続できたら段階復帰",
        caution: "深部のポップ感があればSLAPパターンも再評価。",
        emoji: "🏋️",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
  posterior_internal_impingement: {
    mobility: [
      {
        id: "sleeper-modified",
        title: "Modified Sleeper Stretch",
        subtitle: "後方の詰まり感を軽くする",
        howTo: [
          "横向きで肩をすくめず、前腕をゆっくり倒す",
          "強く押し込まず、軽い張りで止める",
          "30秒以内で十分",
        ],
        dosage: "20秒 × 2回",
        caution: "深い関節痛が増えるなら中止。",
        emoji: "🌙",
        evidence: [overheadArticle, thoracicReview],
      },
      {
        id: "thoracic-rotation",
        title: "Foam Roller Thoracic Rotation",
        subtitle: "胸椎回旋と伸展を作り、肩後方への代償を減らす",
        howTo: [
          "フォームローラーを胸椎に当てて軽く伸展",
          "続けて胸を開く回旋を入れる",
          "腰ではなく胸の高さを動かす",
        ],
        dosage: "左右 各5回",
        caution: "腰痛が出るなら可動域を減らす。",
        emoji: "🌀",
        evidence: [thoracicReview, japaneseThoracic],
      },
    ],
    stability: [
      {
        id: "prone-y",
        title: "Prone Y / Trap Raise",
        subtitle: "下部僧帽筋と後方支持を作る",
        howTo: [
          "ベンチや床でうつ伏せになり、Yの字へ挙上",
          "肩をすくめず、親指は上",
          "小さな可動域で丁寧に",
        ],
        dosage: "8〜10回 × 2セット",
        caution: "首に入るなら角度を下げる。",
        emoji: "🪽",
        evidence: [optimalShoulder, dyskinesisRisk],
      },
    ],
    scaling: [
      {
        id: "scale-deep-catch",
        title: "深いキャッチ位の反復を減らし、Pull + Balance Drill に分解",
        subtitle: "後方での挟まりやすい角度を管理する",
        howTo: [
          "SnatchはPull と Tall Muscle Snatch に分ける",
          "ButterflyはVolumeを半分にし、胸郭回旋ウォームアップを先行",
          "疲労で肘が落ちる前に止める",
        ],
        dosage: "技術練習中心で1〜2週間",
        caution: "後方痛が投げるような動作で強い時は専門受診も検討。",
        emoji: "🎯",
        evidence: [crossFitInjuryReview, thoracicReview],
      },
    ],
  },
  scapular_dyskinesis: {
    mobility: [
      {
        id: "breathing-reset",
        title: "90/90 Breathing Reset",
        subtitle: "肋骨を整えて、肩甲骨が動ける土台をつくる",
        howTo: [
          "仰向けで股関節・膝を90度、鼻から吸って長く吐く",
          "吐く時に肋骨を下げ、背中側にも空気を入れる",
          "首ではなく下位肋骨の動きを感じる",
        ],
        dosage: "4〜5呼吸 × 2セット",
        caution: "めまいが出るほど呼吸を頑張らない。",
        emoji: "🌬️",
        evidence: [thoracicReview, japaneseThoracic],
      },
    ],
    stability: [
      {
        id: "push-up-plus",
        title: "Push-up Plus",
        subtitle: "肩甲骨を肋骨上で前に滑らせ、前鋸筋を活性化",
        howTo: [
          "通常のプッシュアップ最上点でさらに床を押す",
          "腰を反らせず、肩甲骨だけを前へ送る",
          "膝つきから始めてもOK",
        ],
        dosage: "8〜12回 × 2セット",
        caution: "手首痛があれば壁プッシュへ変更。",
        emoji: "➕",
        evidence: [optimalShoulder, dyskinesisRisk],
      },
      {
        id: "face-pull-y",
        title: "Face Pull to Y",
        subtitle: "肩甲骨の後傾・上方回旋・外旋をまとめて練習",
        howTo: [
          "顔の高さへ引き、前腕を立て、最後にYへ押し出す",
          "肋骨は前へ突き出さない",
          "軽負荷で丁寧に",
        ],
        dosage: "8回 × 2セット",
        caution: "首に入るなら負荷を下げる。",
        emoji: "🪜",
        evidence: [optimalShoulder, overheadArticle],
      },
    ],
    scaling: [
      {
        id: "skill-priority",
        title: "“重さより位置”の週を作る",
        subtitle: "海外のパワー重視スタイルに寄りすぎた時のリセット",
        howTo: [
          "Snatch/OHSは60〜70%で3秒停止を入れる",
          "日本で多い胸郭の硬さパターンには、毎回ウォームアップで胸郭ドリルを先行",
          "kipping前にstrictの質チェックを挟む",
        ],
        dosage: "週1〜2回の技術日で実施",
        caution: "強度を戻す前にフォーム動画で再確認。",
        emoji: "🌍",
        evidence: [overheadArticle, dyskinesisRisk, japaneseThoracic],
      },
    ],
  },
  ac_joint_irritation: {
    mobility: [
      {
        id: "pec-release-light",
        title: "胸筋リリース（軽め）",
        subtitle: "前上方の圧迫感を和らげる",
        howTo: [
          "胸の上側を軽くリリース",
          "肩先を強く押さない",
          "呼吸を続ける",
        ],
        dosage: "20〜30秒 × 2回",
        caution: "AC関節の真上がズキっとするなら避ける。",
        emoji: "⚪",
        evidence: [crossFitCoach],
      },
    ],
    stability: [
      {
        id: "incline-pushup-stable",
        title: "Incline Push-up + Reach",
        subtitle: "浅い角度で押す安定性を再学習",
        howTo: [
          "高めのボックスに手を置いてプッシュアップ",
          "トップで軽く前へリーチ",
          "痛みの少ない範囲を守る",
        ],
        dosage: "8〜10回 × 2セット",
        caution: "底での圧迫感が出るなら高さを上げる。",
        emoji: "📦",
        evidence: [optimalShoulder, crossFitCoach],
      },
    ],
    scaling: [
      {
        id: "avoid-deep-dips",
        title: "Deep Dips とワイドベンチを一時停止",
        subtitle: "AC関節の圧縮を減らす",
        howTo: [
          "DipsはSupport Hold、BenchはニュートラルグリップDBへ",
          "腕立てはインクラインで管理",
          "押し系はテンポ重視・浅めROMで実施",
        ],
        dosage: "1〜2週間後に痛み反応を確認",
        caution: "腫れや局所の強い圧痛があるなら受診。",
        emoji: "⛔",
        evidence: [crossFitCoach, crossFitInjuryReview],
      },
    ],
  },
};

export const appReferences: AppReference[] = [
  {
    title: "Scapular dyskinesis increases the risk of future shoulder pain by 43% in asymptomatic athletes",
    url: "https://pubmed.ncbi.nlm.nih.gov/28735288/",
    type: "review",
    summary: "肩甲骨運動異常がある選手は、ない選手より将来の肩痛リスクが43%高いと報告。",
  },
  {
    title: "The Thoracic Spine in the Overhead Athlete",
    url: "https://pubmed.ncbi.nlm.nih.gov/31913918/",
    type: "review",
    summary: "胸椎の神経筋コントロール不全が肩や腰への代償を増やす可能性を整理。",
  },
  {
    title: "Upper Extremity Injuries in CrossFit Athletes-a Review of the Current Literature",
    url: "https://pubmed.ncbi.nlm.nih.gov/35867271/",
    type: "review",
    summary: "CrossFitで上肢障害が比較的多く、特に肩が臨床で重要とされるレビュー。",
  },
  {
    title: "Shoulder Pain Evaluation for the CrossFit Coach",
    url: "https://www.crossfit.com/pro-coach/shoulder-pain-evaluation-for-the-crossfit-coach",
    type: "crossfit",
    summary: "過用・不安定性・急性損傷の見分け方と、痛みがある時の修正方針を解説。",
  },
  {
    title: "How Overhead Lifts Build Stronger, Healthier Shoulders",
    url: "https://www.crossfit.com/pro-coach/crossfit-overhead-lifts-strong-healthy-shoulders",
    type: "crossfit",
    summary: "肩甲骨上方回旋、外旋キュー、胸椎伸展、OHSの技術修正の重要性を解説。",
  },
  {
    title: "The Optimal Shoulder",
    url: "https://library.crossfit.com/free/pdf/CFJ_2014_09_Shoulder_Long3.pdf",
    type: "crossfit",
    summary: "MobilityとStabilityをセットで扱う考え方と、Push-up Plus等のドリルを提示。",
  },
  {
    title: "肩関節屈曲動作における肩甲骨と胸椎の関係",
    url: "https://kanburo35.umin.jp/object/oral.pdf",
    type: "japanese",
    summary: "肩挙上前半では肩甲骨後傾と胸椎運動の関連が示唆。小規模研究で一般化には注意。",
  },
  {
    title: "Wall Slides for Serratus Anterior Activation",
    url: "https://www.youtube.com/watch?v=oMSVe7PWJ3o",
    type: "video",
    summary: "前鋸筋活性化の参考動画。",
  },
  {
    title: "3 Best Rotator Cuff Exercises",
    url: "https://www.youtube.com/watch?v=nxRzShxVvIw",
    type: "video",
    summary: "ローテーターカフ補強の参考動画。",
  },
];
