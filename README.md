# CrossFit Shoulder Care - Diagnostic & Rehab Tool

`crossfit-shoulder-care` は、CrossFit特有の肩痛をセルフチェックし、原因推測とエビデンスに基づいた運動療法を提示するモダンなSPAです。  
技術スタックは **Next.js (App Router) + React + Tailwind CSS v4 + lucide-react**。  
モバイルファースト、ダークモード、アクセシビリティ配慮を前提に設計しています。

## リポジトリ情報

- **Repository name**: `crossfit-shoulder-care`
- **Package name**: `crossfit-shoulder-care`
- **Recommended runtime**: Node.js 20+
- **Deploy target**: Vercel

## 主な機能

- **Step 1: スクリーニングフォーム**
  - 痛みのトリガー動作
    - スナッチ / OHS
    - バタフライプルアップ
    - HSPU
    - ベンチプレス
    - ディップス
    - その他の overhead 動作
  - 痛みの部位
    - 前方 / 外側 / 後方 / 深部
  - レッドフラッグ
    - 夜間痛
    - 腕に力が入らない
    - しびれ
  - 補足情報
    - 痛みの強さ
    - 日常動作痛
    - 不安定感

- **Step 2: 診断ロジックと専門用語翻訳**
  - 3つの候補を提示
  - 専門用語のツールチップ
  - 「柔軟性 / 安定性 / 筋出力バランス」で因果関係を説明
  - CrossFit文脈と日本向け胸郭アドバイスを両立

- **Step 3: パーソナライズ運動療法**
  - Mobility
  - Stability
  - Scaling Strategy
  - 各提案に動画リンク・参考文献を添付

- **レッドフラッグ検出時の安全停止**
  - 運動療法カードを表示せず、整形外科 / スポーツドクター受診を促すUIへ切り替え

## 想定している臨床 / コーチング仮説

このアプリは確定診断アプリではなく、以下のようなCrossFitでよく見られる肩痛パターンを、セルフスクリーニング向けに整理したものです。

- 肩峰下インピンジメント
- SLAP損傷ライクな深部ストレス
- 前方不安定性
- 棘上筋腱症
- 上腕二頭筋長頭腱の過負荷
- 後方インピンジメント
- 肩甲骨ジスキネジア
- AC関節刺激パターン

## 海外と日本の事例統合について

この実装では、次の2つの現場感を同時に扱っています。

1. **海外のパワー重視スタイル**  
   高強度・高反復・高速度が先行し、肩甲骨やローテーターカフの位置制御が追いつかないケース。

2. **日本人に多い胸郭の硬さ**  
   デスクワーク姿勢や呼吸戦略の影響で、胸椎伸展・回旋不足から overhead で肩にしわ寄せが来るケース。

## ローカルセットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## ビルド

```bash
npm run build
npm run start
```

## Vercel デプロイ

このリポジトリには以下を追加済みです。

- `vercel.json`
- `.nvmrc`（Node 20）
- `package.json` の `engines.node >= 20`

### もっとも簡単な方法

1. GitHub に `crossfit-shoulder-care` を push
2. Vercel に GitHub 連携
3. `New Project` からこのリポジトリを選択
4. Framework Preset が `Next.js` であることを確認
5. Deploy

### Vercel での推奨設定

- **Framework**: Next.js
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output**: Vercel default
- **Node.js**: 20 以上

このプロジェクトは環境変数なしでも起動できます。

## GitHubへプッシュする流れ

GitHub のリポジトリ名に合わせて、以下のコマンドは `crossfit-shoulder-care` 前提で調整済みです。

```bash
git init
git add .
git commit -m "feat: add CrossFit shoulder care diagnostic rehab SPA"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_ID>/crossfit-shoulder-care.git
git push -u origin main
```

すでに GitHub 上で空リポジトリを作成済みなら、`<YOUR_GITHUB_ID>` を自分のアカウント名に置き換えるだけでOKです。

## ディレクトリ構造

```text
crossfit-shoulder-care/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ReferenceSection.tsx
│   │   ├── RedFlagAlert.tsx
│   │   ├── ShoulderCareApp.tsx
│   │   ├── StepIndicator.tsx
│   │   ├── Tooltip.tsx
│   │   └── steps/
│   │       ├── StepDiagnosis.tsx
│   │       ├── StepRehab.tsx
│   │       └── StepScreening.tsx
│   ├── data/
│   │   └── tooltips.ts
│   └── lib/
│       ├── diagnosisLogic.ts
│       ├── rehabData.ts
│       └── types.ts
├── .nvmrc
├── vercel.json
├── package.json
└── README.md
```

## 参考文献 / 出典

### CrossFit / Coaching
- Shoulder Pain Evaluation for the CrossFit Coach  
  https://www.crossfit.com/pro-coach/shoulder-pain-evaluation-for-the-crossfit-coach
- How Overhead Lifts Build Stronger, Healthier Shoulders  
  https://www.crossfit.com/pro-coach/crossfit-overhead-lifts-strong-healthy-shoulders
- The Optimal Shoulder (CrossFit Journal PDF)  
  https://library.crossfit.com/free/pdf/CFJ_2014_09_Shoulder_Long3.pdf

### PubMed / Review
- Scapular dyskinesis increases the risk of future shoulder pain by 43% in asymptomatic athletes  
  https://pubmed.ncbi.nlm.nih.gov/28735288/
- The Thoracic Spine in the Overhead Athlete  
  https://pubmed.ncbi.nlm.nih.gov/31913918/
- Upper Extremity Injuries in CrossFit Athletes-a Review of the Current Literature  
  https://pubmed.ncbi.nlm.nih.gov/35867271/

### Japanese Context
- 肩関節屈曲動作における肩甲骨と胸椎の関係  
  https://kanburo35.umin.jp/object/oral.pdf

### Video References
- Wall Slides for Serratus Anterior Activation  
  https://www.youtube.com/watch?v=oMSVe7PWJ3o
- 3 Best Rotator Cuff Exercises  
  https://www.youtube.com/watch?v=nxRzShxVvIw
- Isometric External Rotation - Rehab Hero  
  https://www.youtube.com/watch?v=1uz4DoaSY2M
- Shoulder- Serratus Wall Iso  
  https://www.youtube.com/watch?v=rbZjwqM3HD4

## 注意事項

- 本アプリは**確定診断ツールではありません**。
- レッドフラッグがある場合は運動療法より受診を優先してください。
- 痛みの悪化、脱力、夜間痛、しびれ、外傷後の機能低下がある場合は医療評価が必要です。
