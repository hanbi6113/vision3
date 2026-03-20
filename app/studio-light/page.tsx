// app/studio-light/page.tsx
import Image from "next/image";
import Link from "next/link";

const startOptions = [
  {
    title: "소설 쓰러 가기",
    desc: "한 줄 아이디어에서 시작해 제목, 로그라인, 첫 장면, 주요 인물까지 직접 쓰며 프로젝트를 여는 방식",
    tag: "Start from writing",
    action: "새 원고 시작",
  },
  {
    title: "기존 소설 불러오기",
    desc: "이미 있는 원작 텍스트를 가져와 줄거리, 인물, 장면 흐름을 자동 정리하는 방식",
    tag: "Import novel",
    action: "원작 불러오기",
  },
  {
    title: "웹툰 기반으로 시작",
    desc: "컷 분위기와 대사 흐름을 참고해 실사형 장면 보드로 옮겨가는 방식",
    tag: "From webtoon",
    action: "컷 가져오기",
  },
  {
    title: "티저 템플릿으로 시작",
    desc: "티저, 캐릭터 리빌, 숏드라마, 광고형 구조 중 하나를 골라 빠르게 제작하는 방식",
    tag: "Fast template",
    action: "템플릿 선택",
  },
];

const progressOverview = [
  {
    label: "Current Project",
    value: "Moonlit Crown",
    sub: "판타지 로맨스 / 티저 영상",
  },
  {
    label: "Current Step",
    value: "Character Design",
    sub: "주인공 인상과 관계선 정리 중",
  },
  {
    label: "Next Step",
    value: "Look Development",
    sub: "얼굴 무드와 의상 톤 확정 예정",
  },
];

const storyBlueprint = [
  {
    title: "작품 기본 정보",
    items: [
      ["제목", "Moonlit Crown"],
      ["형식", "소설 기반 티저"],
      ["장르", "판타지 로맨스"],
      ["러닝 톤", "차분하고 서늘한 긴장감"],
    ],
  },
  {
    title: "로그라인",
    items: [
      ["핵심 문장", "왕관에 얽힌 비밀이 드러나며 서로를 의심하던 두 사람이 같은 밤 같은 운명에 묶인다."],
      ["갈등 축", "권력 / 신뢰 / 숨겨진 정체"],
      ["감정선", "거리감 → 긴장 → 끌림"],
      ["메인 무드", "달빛, 냉기, 궁정의 고요함"],
    ],
  },
  {
    title: "배경과 세계관",
    items: [
      ["시대감", "고전 왕실 판타지"],
      ["주요 장소", "궁정 복도 / 연회장 / 비밀 정원"],
      ["시각 톤", "실버 블루 / 차콜 / 아이보리"],
      ["대표 소품", "왕관, 봉인서, 은색 촛대"],
    ],
  },
];

const characterCards = [
  {
    role: "주인공 A",
    name: "아리엘",
    image: "/images/img6.jpg",
    summary: "차갑고 고요한 인상, 하지만 감정을 오래 숨기는 타입",
    detail: [
      ["성격", "침착함 / 예민함 / 자존심 강함"],
      ["얼굴 무드", "도도한 눈매 / 창백한 피부 / 정적인 표정"],
      ["헤어", "긴 흑발 / 낮은 웨이브"],
      ["의상", "절제된 왕실 드레스 / 실버 장식"],
      ["관계", "상대를 믿지 않지만 계속 시선이 가는 구도"],
    ],
  },
  {
    role: "주인공 B",
    name: "루시안",
    image: "/images/img7.jpg",
    summary: "부드럽게 보이지만 속을 읽기 어려운 인물",
    detail: [
      ["성격", "여유로움 / 계산적 / 다정한 척함"],
      ["얼굴 무드", "깊은 눈매 / 낮은 미소 / 차분한 카리스마"],
      ["헤어", "다크 브라운 / 자연스러운 결"],
      ["의상", "블랙 수트형 제복 / 금속 포인트"],
      ["관계", "아리엘을 경계하면서도 먼저 관찰하는 인물"],
    ],
  },
  {
    role: "조연 / 긴장 요소",
    name: "세라",
    image: "/images/img8.jpg",
    summary: "겉으로는 온화하지만 흐름을 흔드는 역할",
    detail: [
      ["성격", "차분함 / 관찰형 / 비밀스러움"],
      ["얼굴 무드", "맑은 표정 / 차가운 시선"],
      ["헤어", "로우 번 스타일 / 정돈된 실루엣"],
      ["의상", "밝은 톤 드레스 / 순백 포인트"],
      ["관계", "둘 사이의 균형을 무너뜨리는 키 플레이어"],
    ],
  },
];

const productionFlow = [
  {
    step: "01",
    title: "소설 시작",
    desc: "제목, 로그라인, 첫 문장, 장르를 정하고 작품의 출발점을 만듭니다.",
    status: "done",
  },
  {
    step: "02",
    title: "줄거리 정리",
    desc: "핵심 사건, 갈등 구조, 감정 흐름을 짧고 선명하게 정리합니다.",
    status: "done",
  },
  {
    step: "03",
    title: "등장인물 설계",
    desc: "주인공과 조연의 역할, 관계, 말투, 감정선을 구체적으로 잡습니다.",
    status: "active",
  },
  {
    step: "04",
    title: "얼굴 / 스타일 확정",
    desc: "얼굴 무드, 헤어, 메이크업, 의상, 실사형 톤을 맞춥니다.",
    status: "upcoming",
  },
  {
    step: "05",
    title: "배경 / 장소 지정",
    desc: "시대감과 장소, 조명, 시간대를 정해 장면의 바탕을 만듭니다.",
    status: "upcoming",
  },
  {
    step: "06",
    title: "장면 구성",
    desc: "오프닝 컷, 감정 컷, 대사 컷, 전환 컷을 순서대로 배치합니다.",
    status: "upcoming",
  },
  {
    step: "07",
    title: "영상 흐름 정리",
    desc: "컷 길이, 전환 방식, 자막 톤, 타이틀 노출 위치를 조정합니다.",
    status: "upcoming",
  },
  {
    step: "08",
    title: "결과물 출력",
    desc: "티저, 세로 숏폼, 포스터 스틸, 썸네일까지 한 번에 정리합니다.",
    status: "upcoming",
  },
];

const workingPanels = [
  {
    title: "현재까지 작업한 내용",
    rows: [
      "작품 제목과 로그라인 정리 완료",
      "주인공 2명 / 조연 1명 캐릭터 방향 설정",
      "궁정 복도 / 연회장 / 비밀 정원 배경 지정",
      "티저형 16:9 결과물 방향 확정",
    ],
  },
  {
    title: "지금 진행 중",
    rows: [
      "주인공 얼굴 무드 비교",
      "관계선에 맞는 표정 톤 고르기",
      "의상 톤과 헤어 결 정리",
      "메인 장면용 캐릭터 조합 검토",
    ],
  },
  {
    title: "다음 작업 예정",
    rows: [
      "실사형 얼굴 스타일 최종 선택",
      "장면 1~4 구도 배치",
      "오프닝 타이틀 컷 추가",
      "티저형 자막 흐름 정리",
    ],
  },
];

const scenePlans = [
  {
    code: "SC-01",
    title: "왕관이 놓인 첫 장면",
    desc: "어두운 공간에서 왕관만 먼저 보이며 세계관의 긴장감을 여는 컷",
    image: "/images/img5.jpg",
  },
  {
    code: "SC-02",
    title: "주인공 첫 등장",
    desc: "아리엘의 얼굴과 시선을 먼저 보여주며 정적인 긴장감을 만드는 컷",
    image: "/images/img6.jpg",
  },
  {
    code: "SC-03",
    title: "복도 대치 장면",
    desc: "두 주인공이 같은 프레임 안에 처음 들어오는 핵심 티저 컷",
    image: "/images/img8.jpg",
    active: true,
  },
  {
    code: "SC-04",
    title: "감정 전환 클로즈업",
    desc: "말보다 표정으로 관계 변화를 느끼게 하는 짧은 감정 컷",
    image: "/images/img7.jpg",
  },
];

const outputCards = [
  {
    title: "Teaser Trailer",
    desc: "30초 내외 티저형 결과물",
  },
  {
    title: "Vertical Short",
    desc: "9:16 숏폼용 편집본",
  },
  {
    title: "Poster Still",
    desc: "대표 장면 스틸컷",
  },
  {
    title: "Character Reveal",
    desc: "주인공 소개형 비주얼",
  },
  {
    title: "Scene Pack",
    desc: "핵심 장면 모음 보드",
  },
  {
    title: "Thumbnail Set",
    desc: "썸네일 / 커버 이미지 세트",
  },
];

function getBadgeStyle(status: string) {
  if (status === "done") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (status === "active") {
    return "border-sky-200 bg-sky-50 text-sky-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-500";
}

export default function StudioLightPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#506875]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfeff_0%,#f4fbff_28%,#f7fcff_62%,#ffffff_100%)]" />
        <div className="absolute left-[-90px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#dff4ff] blur-[100px]" />
        <div className="absolute right-[-90px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#e5f5ff] blur-[110px]" />
        <div className="absolute bottom-[-110px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#edf9ff] blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[12%] h-[300px] w-[300px] rounded-full bg-[#e8fbff] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <header className="mb-8 flex flex-col gap-4 rounded-[26px] border border-[#d9edf7] bg-white/85 px-5 py-4 shadow-[0_18px_50px_rgba(176,214,231,0.14)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-[#d9edf7] bg-white px-4 py-2 text-sm font-medium text-[#698da0] transition hover:bg-[#fbfeff]"
            >
              ← 홈
            </Link>

            <span className="rounded-full border border-[#d9edf7] bg-[#f8fdff] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#88b9cc]">
              Vision3 Studio
            </span>

            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#7e9cac]">
              Novel to Live Action
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#7e9cac]">
              Step 03 of 08
            </span>
            <span className="rounded-full border border-[#cfe8f3] bg-[#f2fbff] px-3 py-1.5 text-xs font-semibold text-[#67a5bf]">
              Character Design in progress
            </span>
            <Link
              href="/studio-dark"
              className="rounded-full border border-[#d9edf7] bg-white px-4 py-2 text-sm font-medium text-[#698da0] transition hover:bg-[#fbfeff]"
            >
              어두운 시안 보기 →
            </Link>
          </div>
        </header>

        {/* hero */}
        <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[34px] border border-[#d9edf7] bg-white/90 p-6 shadow-[0_24px_60px_rgba(176,214,231,0.15)] backdrop-blur-xl md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#87b9cc]">
              Studio Light
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#4e6978] sm:text-5xl">
              소설에서 시작해서
              <br />
              가장 쉽게 실사화까지 가는 Studio
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7f99a7] sm:text-base">
              먼저 소설을 쓰고, 줄거리를 정리하고, 등장인물과 배경을 고른 뒤,
              캐릭터 얼굴과 스타일을 맞추고, 장면과 결과물까지 이어지는 쉬운 제작
              흐름이에요.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[linear-gradient(135deg,#92ddff,#d8f4ff)] px-5 py-3 text-sm font-bold text-[#44728a] shadow-[0_12px_24px_rgba(146,221,255,0.28)] transition hover:brightness-105"
              >
                소설 쓰러 가기
              </button>
              <button
                type="button"
                className="rounded-full border border-[#d8ebf5] bg-white px-5 py-3 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
              >
                기존 원작 불러오기
              </button>
              <button
                type="button"
                className="rounded-full border border-[#d8ebf5] bg-white px-5 py-3 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
              >
                샘플 프로젝트 보기
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {progressOverview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[#dceef7] bg-[#f8fdff] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8db7c9]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-extrabold text-[#4f6b79]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#7d98a6]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d9edf7] bg-white/88 p-5 shadow-[0_24px_60px_rgba(176,214,231,0.14)] backdrop-blur-xl">
            <div className="grid gap-4">
              <div className="rounded-[24px] border border-[#dceef7] bg-[#f8fdff] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8bb8ca]">
                      Current Workspace
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold text-[#4f6b79]">
                      Moonlit Crown
                    </h2>
                  </div>
                  <span className="rounded-full border border-[#d7ebf5] bg-white px-3 py-1.5 text-xs font-semibold text-[#6f9cb0]">
                    Draft v0.8
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["원고 상태", "프롤로그 + 1장 정리 완료"],
                    ["인물 수", "주연 2 / 조연 1"],
                    ["장면 수", "핵심 컷 4개 초안"],
                    ["출력 방향", "Teaser / 16:9"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[16px] border border-[#e4f0f6] bg-white px-4 py-3"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db7c9]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#4f6b79]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#dceef7] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8bb8ca]">
                    Character Preview
                  </p>
                  <div className="relative mt-3 h-[180px] overflow-hidden rounded-[18px]">
                    <Image
                      src="/images/img6.jpg"
                      alt="character preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#dceef7] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8bb8ca]">
                    Scene Preview
                  </p>
                  <div className="relative mt-3 h-[180px] overflow-hidden rounded-[18px]">
                    <Image
                      src="/images/img8.jpg"
                      alt="scene preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* quick start */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Quick Start
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                시작 방식부터 고를 수 있게
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              4 options
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {startOptions.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#d9edf7] bg-white/90 p-5 shadow-[0_16px_40px_rgba(179,214,230,0.12)]"
              >
                <span className="rounded-full border border-[#d9edf7] bg-[#f8fdff] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#87b9cc]">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-[#4f6b79]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
                <button
                  type="button"
                  className="mt-5 rounded-full border border-[#d8ebf5] bg-white px-4 py-2 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
                >
                  {item.action}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* story blueprint */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Story Blueprint
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                소설 실사화의 기본 재료를 먼저 정리
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              story / plot / world
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {storyBlueprint.map((group) => (
              <article
                key={group.title}
                className="rounded-[30px] border border-[#d9edf7] bg-white/90 p-6 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <h3 className="text-2xl font-extrabold text-[#4f6b79]">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.items.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[18px] border border-[#e4f0f6] bg-[#fbfeff] px-4 py-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db7c9]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#4f6b79]">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* character cards */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Character Builder
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                주인공 얼굴, 성격, 스타일까지 상세하게
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              3 characters
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {characterCards.map((card) => (
              <article
                key={card.name}
                className="overflow-hidden rounded-[30px] border border-[#d9edf7] bg-white/90 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <div className="relative h-[270px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8bb8ca]">
                        {card.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-[#4f6b79]">
                        {card.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[#d9edf7] bg-[#f8fdff] px-3 py-1.5 text-[11px] font-semibold text-[#6f9cb0]">
                      Active
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{card.summary}</p>

                  <div className="mt-5 space-y-3">
                    {card.detail.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[16px] border border-[#e4f0f6] bg-[#fbfeff] px-4 py-3"
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db7c9]">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#4f6b79]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* progress panels */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
              Work Status
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
              현재까지 만든 것과 다음 작업을 한눈에
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {workingPanels.map((panel) => (
              <article
                key={panel.title}
                className="rounded-[30px] border border-[#d9edf7] bg-white/90 p-6 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <h3 className="text-2xl font-extrabold text-[#4f6b79]">{panel.title}</h3>
                <div className="mt-5 space-y-3">
                  {panel.rows.map((row) => (
                    <div
                      key={row}
                      className="rounded-[16px] border border-[#e4f0f6] bg-[#fbfeff] px-4 py-3 text-sm font-medium text-[#5f8091]"
                    >
                      {row}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* workflow */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Workflow
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                소설에서 결과물까지 이어지는 8단계
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              8 steps
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productionFlow.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-[#d9edf7] bg-white/90 p-5 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-5xl font-extrabold text-[#d7edf7]">{item.step}</p>
                    <h3 className="mt-4 text-xl font-extrabold text-[#4f6b79]">{item.title}</h3>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${getBadgeStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* scene plan */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Scene Plan
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                현재까지 잡아둔 장면 보드
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              4 scenes
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenePlans.map((item) => (
              <article
                key={item.code}
                className={`overflow-hidden rounded-[28px] border bg-white/90 shadow-[0_18px_40px_rgba(179,214,230,0.12)] ${
                  item.active ? "border-sky-200 ring-2 ring-sky-100" : "border-[#d9edf7]"
                }`}
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8db7c9]">
                      {item.code}
                    </p>
                    {item.active && (
                      <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold text-sky-700">
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-[#4f6b79]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* outputs */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Outputs
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                지금 프로젝트에서 뽑아낼 수 있는 결과물
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              6 deliverables
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {outputCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-[#d9edf7] bg-white/90 p-5 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <h3 className="text-xl font-extrabold text-[#4f6b79]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* final cta */}
        <section className="mt-10 pb-8">
          <div className="rounded-[34px] border border-[#d9edf7] bg-white/92 p-7 shadow-[0_24px_60px_rgba(176,214,231,0.14)] md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
              Next Step
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#4f6b79]">
              Ready for Look Development
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#7d98a6]">
              인물 설정과 줄거리 방향이 정리됐으니, 이제 실사형 얼굴 무드와 의상
              톤을 확정하고 장면 1~4에 실제로 배치할 차례예요.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[linear-gradient(135deg,#92ddff,#d8f4ff)] px-6 py-3 text-sm font-bold text-[#44728a] shadow-[0_12px_24px_rgba(146,221,255,0.28)] transition hover:brightness-105"
              >
                Continue to Look
              </button>
              <button
                type="button"
                className="rounded-full border border-[#d9edf7] bg-white px-6 py-3 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
              >
                소설 다시 보기
              </button>
              <Link
                href="/studio-dark"
                className="rounded-full border border-[#d9edf7] bg-white px-6 py-3 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
              >
                Dark Studio 보기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}