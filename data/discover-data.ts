// data/discover-data.ts
export type GenreKey = "rofan" | "romance" | "sf" | "murim" | "horror";

export const genreMenu: Array<{ key: GenreKey; label: string }> = [
  { key: "rofan", label: "로판" },
  { key: "romance", label: "로맨스" },
  { key: "sf", label: "SF" },
  { key: "murim", label: "무협" },
  { key: "horror", label: "공포" },
];

export type DiscoverGenreData = {
  label: string;
  english: string;
  theme: {
    page: string;
    text: string;
    glowA: string;
    glowB: string;
    border: string;
    surface: string;
    surfaceStrong: string;
    accentText: string;
    accentBg: string;
    accentTextDark: string;
    accentSoft: string;
    heroGradient: string;
    cardGradient1: string;
    cardGradient2: string;
    cardGradient3: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    desc: string;
    note: string;
  };
  protagonist: {
    name: string;
    role: string;
    desc: string;
    tags: string[];
  };
  story: {
    title: string;
    desc: string;
    beats: string[];
  };
  stats: Array<{
    label: string;
    value: string;
    desc: string;
  }>;
  project: {
    eyebrow: string;
    title: string;
    desc: string;
    episode: string;
    status: string;
    point: string;
    visual: string;
  };
  notes: Array<{
    label: string;
    title: string;
    desc: string;
  }>;
  actions: string[];
  panels: Array<{
    tag: string;
    title: string;
    desc: string;
    visual: string;
  }>;
};

export const discoverData: Record<GenreKey, DiscoverGenreData> = {
  rofan: {
    label: "로판",
    english: "Royal Fantasy",
    theme: {
      page: "bg-[#0d0914]",
      text: "text-white",
      glowA: "bg-[#d66da3]/20",
      glowB: "bg-[#7f6bff]/15",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#f2a8cb]",
      accentBg: "bg-[#f2a8cb]",
      accentTextDark: "text-[#1b0f1f]",
      accentSoft: "bg-[#f2a8cb]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#261432_0%,#5c2f70_52%,#d36f98_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#2b1638_0%,#6b356f_55%,#e18fb0_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#221430_0%,#543065_55%,#b86b99_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#32152d_0%,#6f3758_55%,#e38c9d_100%)]",
    },
    hero: {
      eyebrow: "Discover / Royal Fantasy",
      title: "왕관과 계약, 그리고 실사형 감정선이 살아 있는 로판 Discover",
      desc: "로판 카테고리는 화려한 장식만 보여주는 공간이 아니라, 궁정의 긴장감과 관계의 거리감이 먼저 느껴지도록 구성한 Discover야. 누구나 참여할 수 있지만, 화면에서는 세계관과 감정선이 동시에 보이게 설계했어.",
      note: "화려함보다 권력과 감정의 압박이 먼저 느껴지는 로판 톤",
    },
    protagonist: {
      name: "세라핀 벨루아",
      role: "몰락 직전 공작가의 장녀",
      desc: "살아남기 위해 감정보다 선택을 먼저 배운 인물. 차갑고 계산적으로 보이지만, 결정적인 순간에는 자기 사람을 쉽게 버리지 못하는 타입이야.",
      tags: ["궁정 서사", "정략 관계", "감정 절제"],
    },
    story: {
      title: "서사 설명",
      desc: "정략 결혼과 권력 계약으로 시작하지만, 실제 중심은 두 인물이 서로의 약점을 먼저 알아보게 되는 과정이야. 실사형으로 갈수록 드레스보다 시선, 침묵, 거리감이 더 중요해져.",
      beats: ["EP 01 계약의 밤", "EP 04 균열이 생긴 연회", "EP 08 선택의 대가"],
    },
    stats: [
      { label: "Weekly Uploads", value: "124", desc: "이번 주 등록된 로판 작품" },
      { label: "Shortlisted", value: "18", desc: "실사화 후보 검토 중" },
      { label: "Mood Boards", value: "39", desc: "저장된 톤앤매너 세트" },
    ],
    project: {
      eyebrow: "Current Focus",
      title: "The Contract of Winter Rose",
      desc: "정략 관계에서 시작된 두 인물이 궁정 정치와 감정의 균열 사이를 지나며 서로를 읽게 되는 작품. 장면의 핵심은 공간보다 누가 먼저 시선을 피하는지에 있어.",
      episode: "EP 06 · 가면무도회 직전",
      status: "감정선 점검 중",
      point: "권력과 사랑이 동시에 움직이는 로판형 Discover 대표 작품",
      visual:
        "bg-[linear-gradient(135deg,#271634_0%,#61356f_55%,#d7789d_100%)]",
    },
    notes: [
      {
        label: "감정선 메모",
        title: "차가운 협상에서 시작되는 첫 균열",
        desc: "로판은 고백 장면보다 먼저, 서로가 상대의 상처를 알아보는 순간부터 진짜로 살아나.",
      },
      {
        label: "연출 포인트",
        title: "의상보다 시선과 정적이 더 오래 남아야 한다",
        desc: "장식이 많아도 컷의 중심은 결국 인물의 거리감이어야 로판이 얕아 보이지 않아.",
      },
    ],
    actions: [
      "신규 로판 작품 등록",
      "궁정 무드보드 열기",
      "대표 장면 큐레이션",
      "캐릭터 관계축 편집",
    ],
    panels: [
      {
        tag: "Tone Design",
        title: "궁정 텐션 보드",
        desc: "권력, 비밀, 감정의 균열이 동시에 느껴지는 장면 톤을 정리합니다.",
        visual:
          "bg-[linear-gradient(135deg,#34194a_0%,#744080_55%,#eba1bc_100%)]",
      },
      {
        tag: "Character Depth",
        title: "감정선 배치",
        desc: "설명보다 숨기는 감정이 더 크게 느껴지도록 인물 흐름을 잡습니다.",
        visual:
          "bg-[linear-gradient(135deg,#241435_0%,#5e346c_55%,#c2759e_100%)]",
      },
      {
        tag: "Release Setup",
        title: "대표 컷 선별",
        desc: "Discover 첫 화면에서 로판 무드가 바로 느껴지는 대표 장면을 고릅니다.",
        visual:
          "bg-[linear-gradient(135deg,#2d1728_0%,#723d58_55%,#e58e9e_100%)]",
      },
    ],
  },

  romance: {
    label: "로맨스",
    english: "Romance",
    theme: {
      page: "bg-[#120f13]",
      text: "text-white",
      glowA: "bg-[#f0c2b8]/18",
      glowB: "bg-[#c78bb6]/15",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#efc1b6]",
      accentBg: "bg-[#efc1b6]",
      accentTextDark: "text-[#221619]",
      accentSoft: "bg-[#efc1b6]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#2f2227_0%,#8f666b_52%,#edc1b5_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#3c2a30_0%,#9a6d72_55%,#f0cfc3_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#3a2c31_0%,#a17579_55%,#f3d8cd_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#32252a_0%,#8c6168_55%,#e7b2af_100%)]",
    },
    hero: {
      eyebrow: "Discover / Romance",
      title: "감정의 온도와 관계의 거리감이 먼저 보이는 로맨스 Discover",
      desc: "로맨스 카테고리는 예쁜 화면만 나열하는 게 아니라, 두 인물 사이의 온도 차와 미묘한 정적이 먼저 느껴지도록 구성했어. 같은 레이아웃이지만 분위기와 카피는 더 섬세하게 가져가.",
      note: "예쁨보다 감정의 거리와 시선의 흐름이 먼저 남는 로맨스 톤",
    },
    protagonist: {
      name: "서윤하",
      role: "출판사 편집자",
      desc: "감정을 오래 접어두는 편이지만, 예상치 못한 재회 이후 다시 흔들리기 시작하는 인물. 대사보다 망설임과 표정이 더 중요한 타입이야.",
      tags: ["재회 로맨스", "감정선 중심", "시선의 온도"],
    },
    story: {
      title: "서사 설명",
      desc: "끝난 줄 알았던 감정을 현재의 거리감 속에서 다시 마주하는 이야기야. 실사형 연출에서는 고백보다 그 직전의 공기와 멈칫하는 타이밍이 훨씬 중요해.",
      beats: ["EP 01 다시 마주친 오후", "EP 04 멀어진 이유", "EP 09 말하지 못한 밤"],
    },
    stats: [
      { label: "New Stories", value: "96", desc: "이번 주 등록된 로맨스 작품" },
      { label: "Emotion Notes", value: "144", desc: "저장된 감정선 메모" },
      { label: "Scene Picks", value: "22", desc: "대표 장면 선별 중" },
    ],
    project: {
      eyebrow: "Current Focus",
      title: "The Moment We Stayed",
      desc: "재회 이후 다시 가까워지는 두 인물의 감정 흐름을 중심으로 전개되는 작품. 이번 회차는 대사보다 거리감과 망설임의 온도가 훨씬 중요해.",
      episode: "EP 12 · 고백 직전",
      status: "감정선 점검 중",
      point: "설명보다 시선과 침묵이 먼저 남는 관계형 로맨스 대표 작품",
      visual:
        "bg-[linear-gradient(135deg,#34252a_0%,#936a6f_55%,#ebc0b5_100%)]",
    },
    notes: [
      {
        label: "감정선 메모",
        title: "가까워지기 직전의 정적이 가장 중요하다",
        desc: "로맨스는 말보다 먼저, 서로가 눈을 피하는 아주 짧은 타이밍이 더 크게 남아.",
      },
      {
        label: "관계 변화",
        title: "다시 만나서 더 낯설어지는 감정",
        desc: "이미 아는 사람인데 지금은 다르게 느껴지는 순간이 있어야 서사가 가벼워지지 않아.",
      },
    ],
    actions: [
      "신규 로맨스 작품 등록",
      "인물 관계 편집",
      "감정 장면 정리",
      "대표 대사 검토",
    ],
    panels: [
      {
        tag: "Emotion Edit",
        title: "관계도 정리",
        desc: "두 인물 사이의 감정 흐름과 관계 축을 정리합니다.",
        visual:
          "bg-[linear-gradient(135deg,#412f34_0%,#a17378_55%,#f0d1c5_100%)]",
      },
      {
        tag: "Scene Build",
        title: "시선과 거리감 설계",
        desc: "대사보다 먼저 설렘이 느껴지는 장면의 호흡을 조정합니다.",
        visual:
          "bg-[linear-gradient(135deg,#433137_0%,#a9777c_55%,#f3d7cc_100%)]",
      },
      {
        tag: "Release Setup",
        title: "대표 컷 큐레이션",
        desc: "Discover 첫 화면에서 관계의 분위기가 느껴지는 컷을 선별합니다.",
        visual:
          "bg-[linear-gradient(135deg,#34262b_0%,#91656b_55%,#ebb6b0_100%)]",
      },
    ],
  },

  sf: {
    label: "SF",
    english: "Science Fiction",
    theme: {
      page: "bg-[#071019]",
      text: "text-white",
      glowA: "bg-[#42caff]/20",
      glowB: "bg-[#627bff]/14",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#65dcff]",
      accentBg: "bg-[#65dcff]",
      accentTextDark: "text-[#07131a]",
      accentSoft: "bg-[#65dcff]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#081826_0%,#134263_52%,#43d2ff_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#091521_0%,#155072_55%,#5ce7ff_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#07131c_0%,#194260_55%,#75e6ff_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#08141d_0%,#0f4763_55%,#60f3ff_100%)]",
    },
    hero: {
      eyebrow: "Discover / SF",
      title: "차가운 미래와 시스템의 균열이 살아 있는 SF Discover",
      desc: "SF 카테고리는 단순히 네온만 깔린 화면이 아니라, 세계의 규칙과 인물의 이탈감이 동시에 보이도록 만든 Discover야. 기술 설명보다 차가운 공간감과 정보 밀도가 먼저 느껴지게 잡았어.",
      note: "기계 장식보다 시스템과 인간 사이의 거리감이 먼저 느껴지는 SF 톤",
    },
    protagonist: {
      name: "윤 카이",
      role: "기억 복원 센터 분석가",
      desc: "도시의 기록을 복원하는 일을 하지만, 어느 날 자기 기억 일부가 삭제되어 있다는 걸 알게 되는 인물. 감정보다 관찰이 빠른 타입이야.",
      tags: ["기억 복원", "도시형 느와르", "시스템 이탈"],
    },
    story: {
      title: "서사 설명",
      desc: "공적인 복구 작업으로 시작하지만, 결국 자신이 도시 시스템의 예외라는 걸 알게 되는 구조야. 홀로그램보다 반사광, 빛의 밀도, 고립감이 더 중요해.",
      beats: ["EP 01 누락된 기록", "EP 03 비인가 구역", "EP 07 삭제된 진실"],
    },
    stats: [
      { label: "Future Worlds", value: "67", desc: "등록된 SF 세계관 세트" },
      { label: "Tech Concepts", value: "142", desc: "도시 및 인터페이스 아이디어" },
      { label: "Shortlisted", value: "11", desc: "우선 검토 작품 수" },
    ],
    project: {
      eyebrow: "Current Focus",
      title: "Memory District 07",
      desc: "기억 복원 센터 소속 분석가가 자기 기억의 결손을 추적하며 도시 시스템의 설계 오류를 발견하게 되는 작품. 컷이 차가울수록 인물은 더 외롭게 보여야 해.",
      episode: "EP 04 · 접근 금지 구역",
      status: "세계관 정리 중",
      point: "인터페이스보다 인간의 고립감이 먼저 남는 SF형 Discover 대표 작품",
      visual:
        "bg-[linear-gradient(135deg,#091722_0%,#145171_55%,#4cd7ff_100%)]",
    },
    notes: [
      {
        label: "세계관 메모",
        title: "도시는 완벽한데 사람만 불안정해야 한다",
        desc: "SF는 장비보다 먼저, 인간 한 명이 너무 작아 보이는 구도가 강하게 남아.",
      },
      {
        label: "연출 포인트",
        title: "UI보다 반사광이 더 미래적이어야 한다",
        desc: "실사형으로 갈수록 유리, 네온, 물기, 금속 질감이 훨씬 더 중요한 장치가 돼.",
      },
    ],
    actions: [
      "신규 SF 작품 등록",
      "도시 인터페이스 보드 열기",
      "기억 타임라인 편집",
      "대표 티저 카피 정리",
    ],
    panels: [
      {
        tag: "World Build",
        title: "도시 규칙 설계",
        desc: "미래 도시의 질서와 정보 밀도를 정리합니다.",
        visual:
          "bg-[linear-gradient(135deg,#08131e_0%,#18506f_55%,#54dfff_100%)]",
      },
      {
        tag: "Narrative Focus",
        title: "기억 결손 장면",
        desc: "설정보다 주인공의 결핍이 먼저 느껴지도록 흐름을 설계합니다.",
        visual:
          "bg-[linear-gradient(135deg,#081018_0%,#173c55_55%,#6ce3ff_100%)]",
      },
      {
        tag: "Release Setup",
        title: "후킹 컷 구성",
        desc: "첫 화면에서 세계관과 고립감을 동시에 전달하는 컷을 구성합니다.",
        visual:
          "bg-[linear-gradient(135deg,#09141c_0%,#124761_55%,#66f2ff_100%)]",
      },
    ],
  },

  murim: {
    label: "무협",
    english: "Murim",
    theme: {
      page: "bg-[#0b0d0a]",
      text: "text-white",
      glowA: "bg-[#8cbc68]/18",
      glowB: "bg-[#d5bf72]/12",
      border: "border-white/10",
      surface: "bg-white/[0.05]",
      surfaceStrong: "bg-white/[0.08]",
      accentText: "text-[#b4d486]",
      accentBg: "bg-[#b4d486]",
      accentTextDark: "text-[#11150f]",
      accentSoft: "bg-[#b4d486]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#121714_0%,#2d443a_52%,#95c173_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#101614_0%,#30483e_55%,#9ec87b_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#131513_0%,#314133_55%,#b5b76f_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#121212_0%,#354a38_55%,#8bae61_100%)]",
    },
    hero: {
      eyebrow: "Discover / Murim",
      title: "칼과 정적, 그리고 무림의 질서가 살아 있는 무협 Discover",
      desc: "무협 카테고리는 화려한 액션만 세게 보여주는 곳이 아니라, 기세와 절제, 문파의 예법과 긴장감이 먼저 느껴지는 Discover야. 레이아웃은 같아도 무드는 훨씬 묵직하게 가져가.",
      note: "속도보다 기세와 정적이 먼저 느껴지는 무협 톤",
    },
    protagonist: {
      name: "진무결",
      role: "파문당한 검객",
      desc: "문파에서 쫓겨난 뒤 이름 없이 떠돌지만, 다시 무림의 중심 싸움에 끌려 들어가게 되는 인물. 말보다 행동과 절제가 먼저 나오는 타입이야.",
      tags: ["복귀 서사", "문파 정치", "검객"],
    },
    story: {
      title: "서사 설명",
      desc: "복수극처럼 보이지만 실제 중심은 무림 질서의 균열과 자신이 어디에 서야 하는지에 대한 선택이야. 실사형으로 갈수록 기술 이름보다 호흡과 거리감이 중요해.",
      beats: ["EP 01 산문을 떠난 날", "EP 05 첫 재회", "EP 09 문파의 심장부"],
    },
    stats: [
      { label: "New Entries", value: "53", desc: "이번 주 접수된 무협 작품" },
      { label: "Action Boards", value: "27", desc: "검술 및 동선 설계 시트" },
      { label: "Core Clans", value: "12", desc: "구축된 문파 세계관" },
    ],
    project: {
      eyebrow: "Current Focus",
      title: "Blade of the Silent Peak",
      desc: "파문당한 검객이 옛 문파와 다시 얽히며, 복수보다 더 큰 질서의 균열을 마주하게 되는 작품. 이 장르는 칼을 꺼내기 전의 공기가 핵심이야.",
      episode: "EP 07 · 검을 다시 든 밤",
      status: "액션 호흡 점검 중",
      point: "동작보다 기세가 먼저 살아나는 무협형 Discover 대표 작품",
      visual:
        "bg-[linear-gradient(135deg,#101714_0%,#31483d_55%,#9dc57c_100%)]",
    },
    notes: [
      {
        label: "연출 메모",
        title: "빠르기보다 무게를 먼저 보여줘야 한다",
        desc: "무협 액션은 속도만 강조하면 얕아 보이기 쉬워. 칼을 꺼내기 전의 정적이 훨씬 중요해.",
      },
      {
        label: "서사 포인트",
        title: "복수보다 귀환의 의미가 더 커야 한다",
        desc: "무엇을 베는지보다, 어디로 돌아갈 수 없게 되었는지가 더 깊게 남아.",
      },
    ],
    actions: [
      "신규 무협 작품 등록",
      "문파 관계도 편집",
      "액션 호흡 보드 열기",
      "대표 대사 톤 정리",
    ],
    panels: [
      {
        tag: "Action Rhythm",
        title: "검술 호흡 정리",
        desc: "동작의 속도보다 기세와 쉼을 먼저 설계합니다.",
        visual:
          "bg-[linear-gradient(135deg,#101513_0%,#264137_55%,#95bf74_100%)]",
      },
      {
        tag: "World Order",
        title: "문파 질서 보드",
        desc: "예법, 서열, 금기를 정리해 무림 특유의 긴장감을 강화합니다.",
        visual:
          "bg-[linear-gradient(135deg,#121413_0%,#314032_55%,#b0b46d_100%)]",
      },
      {
        tag: "Character Arc",
        title: "귀환 서사 편집",
        desc: "복수극처럼 보이지만 더 깊은 선택의 서사로 정리합니다.",
        visual:
          "bg-[linear-gradient(135deg,#121212_0%,#354b39_55%,#86ab5f_100%)]",
      },
    ],
  },

  horror: {
    label: "공포",
    english: "Horror",
    theme: {
      page: "bg-[#060607]",
      text: "text-white",
      glowA: "bg-[#7e1e2d]/22",
      glowB: "bg-[#1f3137]/12",
      border: "border-white/10",
      surface: "bg-white/[0.04]",
      surfaceStrong: "bg-white/[0.07]",
      accentText: "text-[#c76b76]",
      accentBg: "bg-[#c76b76]",
      accentTextDark: "text-[#140c0d]",
      accentSoft: "bg-[#c76b76]/15",
      heroGradient:
        "bg-[linear-gradient(135deg,#080808_0%,#261218_50%,#7d1d29_100%)]",
      cardGradient1:
        "bg-[linear-gradient(135deg,#090909_0%,#2d151b_55%,#8d2836_100%)]",
      cardGradient2:
        "bg-[linear-gradient(135deg,#070707_0%,#1d1d1d_45%,#6a2c36_100%)]",
      cardGradient3:
        "bg-[linear-gradient(135deg,#050505_0%,#241217_55%,#9a4653_100%)]",
    },
    hero: {
      eyebrow: "Discover / Horror",
      title: "보고 나서도 계속 남는 심리 공포 Discover",
      desc: "공포 카테고리는 장난스러운 할로윈 느낌이 아니라, 정적이고 불길하며 기록물처럼 오래 남는 공포를 보여주는 Discover야. 놀라는 순간보다, 보고 난 뒤 더 기분이 나빠지는 심리 공포와 폐쇄 공간의 긴장감을 중심으로 잡았어.",
      note: "고어보다 침묵, 폐쇄 공간, 반복되는 이상함이 먼저 남는 공포 톤",
    },
    protagonist: {
      name: "한서우",
      role: "실종 사건 기록 아카이브 직원",
      desc: "남이 남긴 기록을 정리하는 일을 하지만, 어느 순간부터 자기 일상도 기록 속 패턴처럼 변해 가는 인물. 무서워도 끝까지 확인하려는 타입이야.",
      tags: ["기록물 구조", "폐쇄 공간", "심리 압박"],
    },
    story: {
      title: "서사 설명",
      desc: "실종 사건의 기록을 조사하던 주인공이 같은 패턴이 자기 주변에서도 반복된다는 걸 알게 되는 이야기야. 실사형 연출에서는 귀신을 직접 보여주기보다 공간이 먼저 이상해져야 해.",
      beats: ["EP 01 불 꺼진 복도", "EP 03 두 번째 발소리", "EP 06 문 안쪽의 그림자"],
    },
    stats: [
      { label: "Dark Entries", value: "41", desc: "이번 주 접수된 공포 작품" },
      { label: "Scene Notes", value: "89", desc: "저장된 긴장 연출 메모" },
      { label: "Sound Flags", value: "14", desc: "사운드 포인트 점검 중" },
    ],
    project: {
      eyebrow: "Current Focus",
      title: "Night Log 07",
      desc: "정적인 공간 안에서 관객이 먼저 이상 징후를 눈치채게 만드는 심리 공포 작품. 직접 보여주지 않아도 점점 더 나빠지는 느낌을 유지하는 게 핵심이야.",
      episode: "EP 08 · 지하 주차장 시퀀스",
      status: "사운드 구간 최종 점검",
      point: "놀라는 순간보다 보고 난 뒤가 더 기분 나쁜 공포형 Discover 대표 작품",
      visual:
        "bg-[linear-gradient(135deg,#080808_0%,#281218_55%,#7b1d29_100%)]",
    },
    notes: [
      {
        label: "연출 메모",
        title: "직접 보여주지 않아도 존재감이 남아야 한다",
        desc: "공포는 실체를 노출하는 순간보다 보이지 않는 쪽이 더 구체적으로 느껴지는 구간이 강해.",
      },
      {
        label: "사운드 포인트",
        title: "침묵 다음의 아주 작은 이상음",
        desc: "발소리, 전기음, 환풍기 소리 같은 생활 소음의 어긋남이 훨씬 더 오래 긴장을 끌고 가.",
      },
    ],
    actions: [
      "신규 공포 작품 등록",
      "긴장 타이밍 조정",
      "사운드 메모 열기",
      "대표 컷 재선정",
    ],
    panels: [
      {
        tag: "Tension Design",
        title: "폐쇄 공간 연출",
        desc: "문, 복도, 정지된 카메라로 불안감을 축적하는 구조를 정리합니다.",
        visual:
          "bg-[linear-gradient(135deg,#090909_0%,#2a141a_55%,#832431_100%)]",
      },
      {
        tag: "Psychological Horror",
        title: "이상 징후 배치",
        desc: "크게 놀라게 하기보다 아주 조금씩 잘못되는 감각을 설계합니다.",
        visual:
          "bg-[linear-gradient(135deg,#070707_0%,#1f1f1f_45%,#6f2f38_100%)]",
      },
      {
        tag: "Release Setup",
        title: "기분 나쁜 대표 장면",
        desc: "한 장면만 봐도 불길함이 남는 Discover 대표 컷을 선별합니다.",
        visual:
          "bg-[linear-gradient(135deg,#050505_0%,#251318_55%,#9b4a57_100%)]",
      },
    ],
  },
};

export const genreKeys = Object.keys(discoverData) as GenreKey[];

export function isGenreKey(value: string): value is GenreKey {
  return genreKeys.includes(value as GenreKey);
}