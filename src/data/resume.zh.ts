import type { ResumeData } from "./types";

export const zh: ResumeData = {
  profile: {
    name: "ChengYen Wang",
    nameAlt: "王正彥",
    title: "技術客戶經理 (TAM)",
    location: "中國北京",
    email: "wchengyen0106@126.com",
    github: "https://github.com/wchengyen",
    summary:
      "技術客戶經理 (Technical Account Manager),10 年以上企業雲端採用、大型遷移及數位轉型經驗。為高階主管提供策略建議,帶領跨功能團隊交付可量化的業務成果。專精於雲端架構、IT 維運及 AIOps,在提升系統可靠度、可擴展性及成本效率方面有實戰成績。AWS 認證橫跨 6 個 Specialty。",
  },

  skillGroups: [
    {
      category: "雲端",
      items: [
        "AWS (6 個 Specialty — 見證照)",
        "雲端架構與遷移",
        "大規模現代化",
        "成本優化 (FinOps)",
        "多區域高可用架構",
      ],
    },
    {
      category: "AIOps",
      items: [
        "AIOps 代理人平台 (告警 + 代理自動化)",
        "事件診斷自動化",
        "Runbook 執行",
        "預測性監控",
        "MTTR 縮短",
      ],
    },
    {
      category: "GenAI / AI",
      items: [
        "GenAI 解決方案設計",
        "LLM 推論 (CPU 部署)",
        "Dify Workflow on H20",
        "Stable Diffusion / AIGC",
        "自然語言維運",
      ],
    },
    {
      category: "客戶面向",
      items: [
        "技術客戶經理 (TAM)",
        "售前 / 售後",
        "高階利害關係人管理",
        "跨功能協調 (Support / Product / SRE)",
        "重大事件交付",
      ],
    },
    {
      category: "服務產業",
      items: [
        "網路 & SaaS",
        "遊戲",
        "醫療",
        "教育",
        "金融服務 (ICBC、民生銀行、郵儲銀行)",
      ],
    },
  ],

  experiences: [
    {
      company: "NWCD (AWS 中國區)",
      role: "技術客戶經理 (Technical Account Manager)",
      start: "2019-01",
      end: "Present",
      location: "中國北京",
      description: "主要產業:網路、遊戲、醫療、SaaS、教育",
      bullets: [
        "領銜 Enterprise On-Ramp Program,於 2025 Q3 達到 36% 年增客戶成長及 50.8% AWS 使用費成長",
        "主導大規模雲端遷移及現代化專案,達成 30%+ 成本下降及系統效能提升",
        "橫向協調 Support、Product 及 SRE 團隊,交付重大事件 (遊戲上線、流量高峰),確保零重大事故",
        "解決高優先技術升級案件,將 TAM 客戶滿意度提升至 100%",
      ],
      subsections: [
        {
          title: "AIOps / GenAI 創新",
          bullets: [
            "設計並實作 AIOps 代理人平台 (告警 + 代理自動化),用於智慧化維運",
            "自動化事件診斷與 Runbook 執行,將 MTTR 降低 40%+",
            "在雲端環境中實現自然語言維運及預測性監控",
            "透過在 H20 上建置 Dify workflow,為客戶痛點設計客製化解決方案 / POC",
            "舉辦技術 webinar 及撰寫部落格,主題涵蓋維運與 GenAI",
          ],
        },
      ],
      tags: ["AWS", "AIOps", "GenAI", "TAM", "FinOps"],
    },
    {
      company: "湯森路透 (Thomson Reuters)",
      role: "技術客戶經理 (售前 / 售後)",
      start: "2015-09",
      end: "2018-12",
      location: "中國北京",
      description: "主要客戶:中國工商銀行 (ICBC)、中國民生銀行、中國郵政儲蓄銀行 (PSBC)",
      bullets: [
        "為大型金融機構 (ICBC、民生銀行、PSBC) 定義技術策略及架構",
        "與業務團隊合作推動解決方案採用及長期客戶成功",
      ],
      tags: ["金融服務", "售前", "售後", "TAM"],
    },
    {
      company: "IBM",
      role: "資深 IT 專家 (售前)",
      start: "2008-02",
      end: "2015-09",
      location: "台灣台北",
      bullets: [
        "交付核心銀行系統升級及架構轉型專案",
        "提升系統效能、可用性及跨區域架構韌性",
      ],
      tags: ["核心銀行", "架構", "售前"],
    },
    {
      company: "早期職務",
      role: "軟體工程師 · 實習生",
      start: "2007",
      end: "2008",
      location: "台灣",
      bullets: ["ShineWave 軟體工程師 (2008)", "Moker 實習生 (2007)"],
      tags: ["軟體工程"],
    },
  ],

  certificates: [
    { name: "AWS Certified Developer – Associate (認證開發人員 – 助理級)" },
    {
      name: "AWS Certified Solutions Architect – Associate (認證解決方案架構師 – 助理級)",
    },
    {
      name: "AWS Certified Solutions Architect – Professional (認證解決方案架構師 – 專業級)",
      code: "SAP",
    },
    { name: "AWS Certified Big Data – Specialty (大數據 – 專項)", code: "BDS" },
    { name: "AWS Certified Database – Specialty (資料庫 – 專項)", code: "DBS" },
    { name: "AWS Certified Security – Specialty (資安 – 專項)", code: "SCS" },
    {
      name: "AWS Certified Machine Learning – Specialty (機器學習 – 專項)",
      code: "MLS",
    },
  ],

  projects: [
    {
      name: "AIOps 代理人平台",
      period: "2019 – Present",
      description:
        "多元件代理人平台,智慧化雲端維運 — 自動化告警分流、事件診斷、Runbook 執行。",
      bullets: [
        "於 NWCD 擔任 TAM 期間建置,為多個產業的企業客戶提供事件回應基礎",
        "透過自動化診斷與 Runbook 執行,將 MTTR 降低 40%+",
        "在跨雲端環境中實現自然語言維運及預測性監控",
      ],
      tags: ["AWS", "AIOps", "代理人", "MTTR"],
      link: {
        label: "github.com/wchengyen/kiro-devops",
        href: "https://github.com/wchengyen/kiro-devops",
      },
    },
    {
      name: "企業客戶 Dify Workflow POC (H20)",
      period: "2024",
      description: "用 Dify 在 H20 上建置的客製 GenAI POC,解決企業客戶具體痛點。",
      bullets: [
        "為維運場景設計 workflow 式解決方案 (告警分流、知識檢索、客服)",
        "將客戶痛點轉化為可部署、低摩擦的 GenAI workflow",
      ],
      tags: ["Dify", "H20", "GenAI", "POC"],
    },
    {
      name: "CPU 架構 LLM 推論 webinar",
      period: "2024-08",
      description:
        "公開技術分享:在純 CPU 基礎設施上部署 LLM 推論服務,適用於成本敏感的工作負載。",
      bullets: [
        "透過 webinar 將部署模式開源",
        "鎖定需要 LLM 能力但無 GPU 預算的團隊",
      ],
      tags: ["LLM", "推論", "CPU", "Webinar"],
    },
    {
      name: "Stable Diffusion / AIGC webinar",
      period: "2023-04",
      description: "公開技術分享:Stable Diffusion 影像生成實戰,為企業受眾拆解 AIGC。",
      bullets: [
        "在客戶工程團隊中推動 AIGC 技術採用",
        "在公司內部被引用為早期 GenAI 推動的範例",
      ],
      tags: ["Stable Diffusion", "AIGC", "Webinar"],
      link: {
        label: "nwcdcloud.cn 播放",
        href: "https://www.nwcdcloud.cn/playback.aspx?id=51",
      },
    },
    {
      name: "NWCD 公開部落格:建构自动化运维手册和操作手册实现卓越运营",
      period: "2022-12",
      description:
        "於 NWCD 公開部落格發表的文章,主題為建置自動化維運及 runbook 達成維運卓越。",
      bullets: [
        "將 runbook 自動化整理為可操作的實務方法",
        "取材自 NWCD 實際客戶 engagement 經驗",
      ],
      tags: ["部落格", "Runbook", "維運"],
      link: {
        label: "nwcdcloud.cn 文章",
        href: "https://www.nwcdcloud.cn/articledetail.aspx?id=31",
      },
    },
    {
      name: "AWS 中國客戶案例 (公開引用)",
      period: "2024",
      description:
        "AWS 中國 (NWCD) 官網公開的客戶成功案例,涵蓋企業客戶的成本下降及效率提升。",
      bullets: ["引用為 TAM 主導的成果,公開具名引用"],
      tags: ["客戶案例", "公開引用"],
      link: {
        label: "amazonaws.cn customer-stories",
        href: "https://www.amazonaws.cn/customer-stories/reduce-cost-and-increase-efficiency/",
      },
    },
  ],

  education: [
    {
      school: "佛羅里達大學 沃靈頓商學院",
      schoolEn: "University of Florida – Warrington College of Business",
      department: "決策與資訊科學 碩士 (Master of Science in Decision & Information Science)",
      period: "2007 年 12 月",
      detail: "GPA: 3.66 / 4.0 · 資料庫系統課程助教 (1 年)",
    },
    {
      school: "國立中央大學 (NCU)",
      schoolEn: "National Central University (NCU)",
      department: "管理資訊系統 工商管理學士 (Bachelor of Business Administration in Management Information Systems)",
      period: "2003 年秋",
      detail: "管理學院 IT 基礎設施管理 (2 年)",
    },
  ],

  languages: [
    { name: "中文 (Mandarin)", level: "精通" },
    { name: "英文 (English)", level: "精通" },
  ],

  ui: {
    nav: {
      about: "關於",
      experience: "經歷",
      skills: "技能",
      certificates: "證照",
      education: "學歷",
      publicSharing: "公開分享",
      contact: "聯絡",
    },
    hero: {
      greeting: "你好,我是",
      cta: "聯絡我",
      certsCta: "AWS 認證 (7)",
      githubCta: "GitHub",
      statBasedIn: "所在地",
      statEmail: "Email",
      statFocus: "專長",
    },
    about: {
      eyebrow: "關於",
      title: "關於我",
      atAGlance: "快速概覽",
      glanceExperience: "工作經驗",
      glanceCurrent: "目前任職",
      glanceFocus: "專長",
      glanceCerts: "AWS 認證",
      glanceLanguages: "語言",
    },
    experience: {
      eyebrow: "工作經歷",
      title: "經歷",
    },
    skills: {
      eyebrow: "服務範疇",
      title: "技能與專長",
      languagesHeading: "語言",
    },
    certificates: {
      eyebrow: "AWS",
      title: "證照",
    },
    education: {
      eyebrow: "學歷背景",
      title: "教育",
    },
    publicSharing: {
      eyebrow: "演講與著作",
      title: "公開分享",
    },
    contact: {
      eyebrow: "聯絡方式",
      title: "聯絡",
      blurb: "我是技術客戶經理,專注於企業雲端採用、AIOps 及 GenAI 推動。無論是合作、演講邀約或顧問諮詢,最快的聯絡方式是 Email,我通常會在幾個工作天內回覆。",
    },
    footer: {
      copyright: "保留所有權利。",
      builtWith: "本站使用 Vite + React + Tailwind 建置,部署於 GitHub Pages。",
    },
    themeToggle: {
      toLight: "切換為淺色模式",
      toDark: "切換為深色模式",
    },
    languageToggle: {
      label: "切換語言",
    },
  },
};
