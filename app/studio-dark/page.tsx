// app/studio-dark/page.tsx
import Image from "next/image";
import Link from "next/link";

const productionSteps = [
  {
    step: "01",
    title: "Manuscript",
    desc: "소설 작성 또는 기존 원고 불러오기",
    status: "done",
  },
  {
    step: "02",
    title: "Story Map",
    desc: "로그라인, 갈등축, 감정선 정리",
    status: "done",
  },
  {
    step: "03",
    title: "Cast Design",
    desc: "주인공과 조연의 역할, 관계, 인상 설정",
    status: "done",
  },
  {
    step: "04",
    title: "Look Dev",
    desc: "얼굴 무드, 헤어, 의상, 톤 확정",
    status: "done",
  },
  {
    step: "05",
    title: "World Setup",
    desc: "배경, 장소, 조명, 시대감 정리",
    status: "done",
  },
  {
    step: "06",
    title: "Scene Build",
    desc: "현재 장면 조합 및 구도 설계",
    status: "active",
  },
  {
    step: "07",
    title: "Shot Direction",
    desc: "카메라 거리, 움직임, 감정 포인트 연출",
    status: "pending",
  },
  {
    step: "08",
    title: "Edit Suite",
    desc: "컷 순서, 자막, 전환, 결과물 마감",
    status: "pending",
  },
];

const sourceSnapshot = [
  { label: "작품 제목", value: "Moonlit Crown" },
  { label: "원고 상태", value: "프롤로그 + 1장 정리 완료" },
  { label: "형식", value: "Fantasy Romance Teaser" },
  { label: "핵심 갈등", value: "왕관의 비밀 / 신뢰 / 숨겨진 정체" },
];

const sessionStats = [
  { label: "Project", value: "Moonlit Crown" },
  { label: "Scene", value: "SC-03 Corridor Walk" },
  { label: "Runtime", value: "00:24" },
  { label: "Assets", value: "18 frames" },
];

const storyPackage = [
  {
    title: "Source Manuscript",
    items: [
      ["로그라인", "왕관에 얽힌 비밀이 드러나며 서로를 의심하던 두 사람이 같은 밤 같은 운명에 묶인다."],
      ["현재 원고", "프롤로그 / 궁정 복도 첫 대치 / 연회장 전 장면"],
      ["첫 장면 톤", "차가운 고요함, 낮은 조도, 긴장감 있는 정적"],
      ["메인 감정", "거리감 → 긴장 → 끌림"],
    ],
  },
  {
    title: "Story Mapping",
    items: [
      ["장르", "판타지 로맨스"],
      ["전개 구조", "비밀 노출 → 관계 충돌 → 감정 변화"],
      ["핵심 키워드", "왕실, 달빛, 봉인서, 금지된 진실"],
      ["티저 방향", "감정보다 분위기를 먼저 보여주는 구조"],
    ],
  },
  {
    title: "World Setup",
    items: [
      ["주요 장소", "궁정 복도 / 연회장 / 비밀 정원"],
      ["시대감", "고전 왕실 판타지"],
      ["컬러 팔레트", "실버 블루 / 차콜 / 아이보리"],
      ["대표 소품", "왕관, 봉인서, 은색 촛대"],
    ],
  },
];

const castCards = [
  {
    role: "Lead A",
    name: "Arielle",
    image: "/images/img10.jpg",
    summary: "도도하고 정적인 인상. 감정을 드러내지 않지만 시선이 오래 남는 타입.",
    details: [
      ["성격", "침착함 / 예민함 / 자존심 강함"],
      ["얼굴 무드", "날카로운 눈매 / 창백한 피부 / 낮은 표정 변화"],
      ["헤어", "긴 흑발 / 정돈된 웨이브"],
      ["의상", "실버 장식이 들어간 절제된 왕실 드레스"],
      ["관계선", "루시안을 믿지 않지만 계속 관찰하게 되는 구도"],
    ],
  },
  {
    role: "Lead B",
    name: "Lucian",
    image: "/images/img11.jpg",
    summary: "부드럽게 보이지만 속을 읽기 어려운 인물. 계산과 다정함이 함께 보이는 타입.",
    details: [
      ["성격", "여유로움 / 계산적 / 냉정한 배려"],
      ["얼굴 무드", "깊은 눈매 / 낮은 미소 / 차분한 카리스마"],
      ["헤어", "다크 브라운 / 자연스러운 결"],
      ["의상", "블랙 수트형 제복 / 금속 포인트"],
      ["관계선", "아리엘을 경계하면서 먼저 흐름을 읽는 인물"],
    ],
  },
  {
    role: "Key Support",
    name: "Sera",
    image: "/images/img12.jpg",
    summary: "겉으로는 온화하지만 장면의 균형을 흔드는 역할. 긴장의 방향을 바꾸는 인물.",
    details: [
      ["성격", "차분함 / 관찰형 / 비밀스러움"],
      ["얼굴 무드", "정갈한 표정 / 냉한 시선"],
      ["헤어", "로우 번 스타일 / 정돈된 실루엣"],
      ["의상", "밝은 톤 드레스 / 순백 포인트"],
      ["관계선", "두 사람 사이의 신뢰를 흔드는 키 플레이어"],
    ],
  },
];

const inspectorGroups = [
  {
    title: "Selected Direction",
    items: [
      { label: "Genre", value: "Fantasy Romance" },
      { label: "Mood", value: "Cold Tension" },
      { label: "Output", value: "Teaser Cut" },
      { label: "Format", value: "16:9" },
    ],
  },
  {
    title: "Character Look",
    items: [
      { label: "Lead", value: "Elegant / Sharp" },
      { label: "Hair", value: "Black Long Wave" },
      { label: "Costume", value: "Royal Dark" },
      { label: "Emotion", value: "Controlled" },
    ],
  },
  {
    title: "Scene Settings",
    items: [
      { label: "Location", value: "Castle Corridor" },
      { label: "Lighting", value: "Moon Blue Backlight" },
      { label: "Frame", value: "Medium Shot" },
      { label: "Motion", value: "Slow Push-in" },
    ],
  },
];

const workPanels = [
  {
    title: "현재까지 작업한 내용",
    rows: [
      "작품 제목, 로그라인, 주요 갈등 구조 정리 완료",
      "주인공 2명 / 조연 1명 캐릭터 방향 확정",
      "궁정 복도 / 연회장 / 비밀 정원 배경 지정 완료",
      "티저형 16:9 결과물 방향과 오프닝 구조 확정",
    ],
  },
  {
    title: "현재 진행 중",
    rows: [
      "SC-03 복도 대치 장면 구도 비교",
      "주인공 표정 강도와 거리감 조절",
      "아리엘 / 루시안 프레임 배치 검토",
      "차가운 긴장감을 살릴 조명 대비 정리",
    ],
  },
  {
    title: "다음 작업 예정",
    rows: [
      "Shot Direction에서 카메라 앵글 정교화",
      "감정 전환용 클로즈업 컷 추가",
      "타이틀 카드와 자막 흐름 정리",
      "세로 숏폼용 추가 편집본 분기",
    ],
  },
];

const sceneQueue = [
  {
    code: "SC-01",
    title: "Opening Reveal",
    desc: "왕관만 먼저 보여주며 세계관의 긴장감을 여는 오프닝 컷",
    image: "/images/img9.jpg",
    active: false,
  },
  {
    code: "SC-02",
    title: "Lead Close-up",
    desc: "아리엘의 첫 인상과 감정 없는 시선을 보여주는 얼굴 컷",
    image: "/images/img10.jpg",
    active: false,
  },
  {
    code: "SC-03",
    title: "Corridor Walk",
    desc: "두 주인공이 처음 같은 프레임 안에서 긴장감을 만드는 핵심 장면",
    image: "/images/img11.jpg",
    active: true,
  },
  {
    code: "SC-04",
    title: "Emotional Pause",
    desc: "말보다 표정으로 관계 변화를 느끼게 하는 감정 전환 컷",
    image: "/images/img12.jpg",
    active: false,
  },
];

const shotBoards = [
  {
    title: "Wide Establishing Shot",
    purpose: "성의 규모와 작품의 고요한 긴장감을 먼저 보여주는 컷",
    emotion: "Calm / Grand",
    lens: "24mm feel",
    time: "Night exterior",
  },
  {
    title: "Lead Close-up",
    purpose: "주인공 인상과 감정선을 가장 또렷하게 잡는 컷",
    emotion: "Controlled tension",
    lens: "50mm feel",
    time: "Interior blue light",
  },
  {
    title: "Silhouette Entrance",
    purpose: "등장 순간의 무게감과 비밀스러운 존재감을 강화하는 컷",
    emotion: "Sharp / Mysterious",
    lens: "85mm feel",
    time: "Backlit hall",
  },
  {
    title: "Over-the-shoulder Confrontation",
    purpose: "둘 사이의 거리감과 시선 흐름을 한 번에 보여주는 컷",
    emotion: "Cold conflict",
    lens: "70mm feel",
    time: "Dark corridor",
  },
];

const deliverables = [
  "Teaser Trailer",
  "Vertical Social Cut",
  "Poster Still",
  "Character Reveal",
  "Scene Pack",
  "Thumbnail Set",
];

function getStepStyle(status: string) {
  if (status === "active") {
    return "border-[#31c6ff] bg-[#0d2230] shadow-[0_0_0_1px_rgba(49,198,255,0.22),0_0_28px_rgba(49,198,255,0.12)]";
  }

  if (status === "done") {
    return "border-white/10 bg-white/[0.03]";
  }

  return "border-white/8 bg-white/[0.015] opacity-75";
}

function getStatusChipStyle(status: string) {
  if (status === "active") {
    return "border-[#31c6ff]/45 bg-[#123041] text-[#97ebff]";
  }

  if (status === "done") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";
  }

  return "border-white/10 bg-white/5 text-white/45";
}

export default function StudioDarkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040912] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040912_0%,#07101a_34%,#060c15_66%,#03070d_100%)]" />
        <div className="absolute left-[-140px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#31c6ff]/12 blur-[130px]" />
        <div className="absolute right-[-120px] top-[80px] h-[340px] w-[340px] rounded-full bg-[#6a79ff]/12 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-[20%] h-[360px] w-[360px] rounded-full bg-[#13d9c1]/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-8 lg:px-10">
        {/* production bar */}
        <header className="mb-6 rounded-[26px] border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-xl md:px-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                ← 홈
              </Link>

              <span className="rounded-full border border-[#31c6ff]/35 bg-[#0b1c29] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#8feaff]">
                Vision3 Studio
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
                Project: Moonlit Crown
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#244f65] bg-[#091723] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#89ddf5]">
                Production Mode
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
                Draft v1.4
              </span>
              <span className="rounded-full border border-[#31c6ff]/35 bg-[#0b1c29] px-3 py-1.5 text-xs font-medium text-[#b3f5ff]">
                Last saved 2 min ago
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Save Draft
              </button>
              <button
                type="button"
                className="rounded-full border border-[#31c6ff]/40 bg-[#0d2230] px-4 py-2 text-sm font-semibold text-[#98eeff] transition hover:border-[#59d5ff] hover:text-white"
              >
                Review Output
              </button>
              <Link
                href="/studio-light"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Light Studio 보기 →
              </Link>
            </div>
          </div>
        </header>

        {/* main workspace */}
        <section className="grid gap-6 xl:grid-cols-[270px_minmax(0,1fr)_340px]">
          {/* left rail */}
          <aside className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <div className="mb-4 border-b border-white/10 pb-4">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                  Workflow Navigator
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  Production Steps
                </h2>
              </div>

              <div className="space-y-3">
                {productionSteps.map((item) => (
                  <div
                    key={item.step}
                    className={`rounded-[22px] border p-4 transition ${getStepStyle(item.status)}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                          {item.step}
                        </p>
                        <p className="mt-2 text-base font-extrabold text-white">{item.title}</p>
                      </div>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${getStatusChipStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#85a6b7]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ceaff]">
                Source Entry
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-white">
                소설에서 시작하는 제작 흐름
              </h3>

              <div className="mt-5 space-y-3">
                {sourceSnapshot.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#31c6ff]/45 bg-[#0d2230] px-4 py-3 text-sm font-semibold text-[#9ef1ff] transition hover:border-[#60d5ff] hover:text-white"
                >
                  소설 쓰러 가기
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  기존 원고 불러오기
                </button>
              </div>
            </div>
          </aside>

          {/* center workspace */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[34px] border border-[#18384b] bg-white/[0.03] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-5">
              <div className="relative min-h-[640px] overflow-hidden rounded-[28px] border border-[#1d4557]">
                <Image
                  src="/images/img11.jpg"
                  alt="studio dark active workspace"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 65vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,18,0.18)_0%,rgba(5,11,18,0.08)_26%,rgba(4,9,16,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

                <div className="absolute left-5 top-5 right-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#31c6ff]/50 bg-[#0d2230] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#97ebff]">
                      Active Scene 03
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                      Corridor Walk
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                      Teaser / 16:9
                    </span>
                  </div>

                  <div className="grid gap-2 text-right sm:grid-cols-2">
                    {[
                      ["Camera", "Medium Close-up"],
                      ["Tone", "Cold Tension"],
                      ["Lighting", "Moon Blue"],
                      ["Status", "Preview Ready"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8ceaff]">
                    Active Session
                  </p>
                  <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    소설에서 고른 장면을
                    <br />
                    더 정교한 실사형 컷으로 조합하는 workspace
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8fb4c3] sm:text-base">
                    원고에서 고른 인물과 배경, 조명, 감정선을 한 장면 안에서 정리하고,
                    다음 단계인 Shot Direction으로 자연스럽게 넘길 수 있는 메인 작업 화면입니다.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-full border border-[#31c6ff]/50 bg-[#0d2230] px-5 py-3 text-sm font-semibold text-[#9ef1ff] shadow-[0_0_28px_rgba(49,198,255,0.14)] transition hover:border-[#60d5ff] hover:text-white"
                    >
                      Continue Production
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      Open Scene Queue
                    </button>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-4">
                    {sessionStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* story package */}
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                    Story Package
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-white">
                    원고, 줄거리, 세계관을 한 번에 정리
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
                  source / plot / world
                </span>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {storyPackage.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5"
                  >
                    <h3 className="text-xl font-extrabold text-white">{group.title}</h3>
                    <div className="mt-4 space-y-3">
                      {group.items.map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[16px] border border-white/10 bg-black/10 px-4 py-3"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                            {label}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#d8e8f0]">{value}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* scene timeline */}
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                    Scene Queue
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-white">
                    지금까지 잡아둔 티저 장면 흐름
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
                  4 scenes
                </span>
              </div>

              <div className="overflow-x-auto">
                <div className="flex min-w-max gap-4 pb-1">
                  {sceneQueue.map((scene) => (
                    <article
                      key={scene.code}
                      className={`w-[260px] overflow-hidden rounded-[24px] border transition ${
                        scene.active
                          ? "border-[#31c6ff]/45 bg-[#0b1924] shadow-[0_0_0_1px_rgba(49,198,255,0.20),0_0_28px_rgba(49,198,255,0.12)]"
                          : "border-white/10 bg-white/[0.02]"
                      }`}
                    >
                      <div className="relative h-[150px]">
                        <Image
                          src={scene.image}
                          alt={scene.title}
                          fill
                          className="object-cover"
                          sizes="260px"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,18,0.72)_5%,rgba(5,11,18,0.10)_55%,rgba(5,11,18,0.02)_100%)]" />
                        {scene.active && (
                          <span className="absolute left-3 top-3 rounded-full border border-[#31c6ff]/50 bg-[#0d2230] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9bf0ff]">
                            Active
                          </span>
                        )}
                      </div>

                      <div className="p-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                          {scene.code}
                        </p>
                        <h3 className="mt-2 text-lg font-extrabold text-white">{scene.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#8aa9b8]">{scene.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* inspector */}
          <aside className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Inspector
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                현재 선택값 요약
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#86a8b7]">
                지금 어떤 장면을 어떤 톤으로 만들고 있는지 바로 파악할 수 있는 패널입니다.
              </p>
            </div>

            {inspectorGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ceaff]">
                  {group.title}
                </p>

                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="text-sm text-[#86a8b7]">{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ceaff]">
                Work Status
              </p>
              <div className="mt-4 space-y-4">
                {workPanels.map((panel) => (
                  <div
                    key={panel.title}
                    className="rounded-[18px] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <h3 className="text-lg font-extrabold text-white">{panel.title}</h3>
                    <div className="mt-3 space-y-2">
                      {panel.rows.map((row) => (
                        <div
                          key={row}
                          className="rounded-[14px] border border-white/10 bg-black/10 px-3 py-2 text-sm text-[#c7d7df]"
                        >
                          {row}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-[#31c6ff]/20 bg-[#0b1924] p-5 shadow-[0_0_28px_rgba(49,198,255,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ceaff]">
                Next Action
              </p>
              <h3 className="mt-3 text-xl font-extrabold text-white">
                Scene Build 이후
                <br />
                Shot Direction으로 이동
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#8fb4c3]">
                다음 단계에서는 카메라 앵글, 거리감, 감정 전환 컷, 타이틀 노출 순서를 더 정교하게 다듬습니다.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#31c6ff]/45 bg-[#103149] px-4 py-3 text-sm font-semibold text-[#9df3ff] transition hover:border-[#62d7ff] hover:text-white"
                >
                  Apply Scene Layout
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  Continue to Shot Direction
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* cast section */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Cast Design
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                주인공 얼굴, 성격, 스타일을 더 정교하게
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              3 characters
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {castCards.map((card) => (
              <article
                key={card.name}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,18,0.72)_8%,rgba(5,11,18,0.10)_48%,rgba(5,11,18,0.03)_100%)]" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8ceaff]">
                        {card.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-white">{card.name}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/70">
                      Locked
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#8fb4c3]">{card.summary}</p>

                  <div className="mt-5 space-y-3">
                    {card.details.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#d8e8f0]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* shot direction */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Shot Direction Board
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                연출이 살아 보이게 만드는 컷 보드
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              4 directions
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {shotBoards.map((shot) => (
              <article
                key={shot.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8ceaff]">
                  Shot
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-white">{shot.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#8fb4c3]">{shot.purpose}</p>

                <div className="mt-5 space-y-3">
                  {[
                    ["Emotion", shot.emotion],
                    ["Lens", shot.lens],
                    ["Time", shot.time],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3"
                    >
                      <span className="text-sm text-[#86a8b7]">{label}</span>
                      <span className="text-sm font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* final section */}
        <section className="mt-10 pb-8">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Delivery Package
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                장면뿐 아니라
                <br />
                배포까지 이어지는 결과물 패키지
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8fb4c3]">
                티저, 세로 숏폼, 포스터 스틸, 캐릭터 리빌, 썸네일까지 한 프로젝트 안에서 정리되는 구조로 마감합니다.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#31c6ff]/20 bg-[#0b1924] p-6 shadow-[0_0_36px_rgba(49,198,255,0.08)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Final Direction
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                더 많은 정보가 있어도
                <br />
                깔끔한 프리미엄 스튜디오처럼
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#8fb4c3]">
                Dark Studio는 난도가 느껴지되 복잡해 보이지 않게, 소설 실사화 제작 흐름을 더 깊고 정교하게 다루는 방향으로 설계했습니다.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#31c6ff]/45 bg-[#123149] px-6 py-3 text-sm font-semibold text-[#9df3ff] transition hover:border-[#66d8ff] hover:text-white"
                >
                  Choose Dark Studio
                </button>
                <Link
                  href="/studio-light"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  밝은 시안 보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}