// app/studio-dark/page.tsx
import Image from "next/image";
import Link from "next/link";

const productionSteps = [
  { step: "01", title: "Source Intake", desc: "원작 또는 새 프로젝트 불러오기", status: "done" },
  { step: "02", title: "Story Mapping", desc: "장르, 무드, 핵심 키워드 정리", status: "done" },
  { step: "03", title: "Character Casting", desc: "주인공과 조연의 역할 및 관계 정의", status: "done" },
  { step: "04", title: "Look Development", desc: "얼굴, 헤어, 의상, 인상 방향 설정", status: "done" },
  { step: "05", title: "World Setup", desc: "배경, 장소, 조명, 색감 선택", status: "done" },
  { step: "06", title: "Scene Assembly", desc: "구도와 컷 흐름을 조합하는 현재 단계", status: "active" },
  { step: "07", title: "Shot Direction", desc: "카메라 거리, 시선, 움직임 연출", status: "pending" },
  { step: "08", title: "Edit Suite", desc: "전환, 자막, 속도감, 리듬 정리", status: "pending" },
  { step: "09", title: "Delivery", desc: "최종 결과물 패키지 정리", status: "pending" },
];

const sceneTimeline = [
  {
    id: "Scene 01",
    title: "Opening Reveal",
    type: "Intro shot",
    image: "/images/img9.jpg",
    active: false,
  },
  {
    id: "Scene 02",
    title: "Lead Close-up",
    type: "Character focus",
    image: "/images/img10.jpg",
    active: false,
  },
  {
    id: "Scene 03",
    title: "Corridor Walk",
    type: "Tracking shot",
    image: "/images/img11.jpg",
    active: true,
  },
  {
    id: "Scene 04",
    title: "Emotional Pause",
    type: "Mood cut",
    image: "/images/img12.jpg",
    active: false,
  },
  {
    id: "Scene 05",
    title: "Title Ending",
    type: "Final card",
    image: "/images/img9.jpg",
    active: false,
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
      { label: "Face", value: "Elegant / Sharp" },
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

const productionRooms = [
  {
    title: "Source Intake Room",
    desc: "원작 텍스트, 웹툰 컷, 새 프로젝트 브리프를 기반으로 전체 제작의 출발점을 정리하는 공간.",
    status: "Ready",
    assets: "12 assets",
    review: "Synced",
  },
  {
    title: "Character Casting Room",
    desc: "캐릭터의 성격과 역할을 기준으로 얼굴 무드, 헤어, 의상, 감정선을 잡는 공간.",
    status: "Locked",
    assets: "08 looks",
    review: "Approved",
  },
  {
    title: "Scene Direction Board",
    desc: "장면의 분위기와 장소, 컷 조합, 감정 흐름을 정리해 실제 영상처럼 보이게 만드는 공간.",
    status: "Active",
    assets: "18 frames",
    review: "In progress",
  },
  {
    title: "Edit Suite",
    desc: "카메라 움직임, 전환, 텍스트, 사운드 분위기까지 최종 퀄리티를 다듬는 마감 공간.",
    status: "Pending",
    assets: "04 cuts",
    review: "Final pass",
  },
];

const shotBoards = [
  {
    title: "Wide Establishing Shot",
    purpose: "성의 스케일과 세계관 첫 인상 제시",
    emotion: "Calm / Grand",
    lens: "24mm feel",
    time: "Night exterior",
  },
  {
    title: "Lead Close-up",
    purpose: "주인공 인상과 감정선 집중",
    emotion: "Controlled tension",
    lens: "50mm feel",
    time: "Interior blue light",
  },
  {
    title: "Silhouette Entrance",
    purpose: "등장 순간의 긴장감 강화",
    emotion: "Sharp / Mysterious",
    lens: "85mm feel",
    time: "Backlit hall",
  },
  {
    title: "Over-the-shoulder Confrontation",
    purpose: "상대와의 거리감과 시선 흐름 강조",
    emotion: "Cold conflict",
    lens: "70mm feel",
    time: "Dark corridor",
  },
];

const deliverables = [
  "Teaser Trailer",
  "Vertical Social Cut",
  "Poster Still",
  "Thumbnail Set",
  "Pitch Visuals",
  "Campaign Key Frame",
];

function getStepStyle(status: string) {
  if (status === "active") {
    return "border-[#2ebfff] bg-[#0d2230] shadow-[0_0_0_1px_rgba(46,191,255,0.25),0_0_32px_rgba(46,191,255,0.15)]";
  }

  if (status === "done") {
    return "border-white/10 bg-white/[0.03]";
  }

  return "border-white/8 bg-white/[0.015] opacity-70";
}

function getStatusChipStyle(status: string) {
  if (status === "active") {
    return "border-[#2ebfff]/50 bg-[#123041] text-[#97ebff]";
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
        <div className="absolute left-[-140px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#2ebfff]/12 blur-[130px]" />
        <div className="absolute right-[-120px] top-[80px] h-[340px] w-[340px] rounded-full bg-[#6a79ff]/12 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-[20%] h-[360px] w-[360px] rounded-full bg-[#13d9c1]/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />
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

              <span className="rounded-full border border-[#2ebfff]/35 bg-[#0b1c29] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#8ceaff]">
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
                Step 06 / 09
              </span>
              <span className="rounded-full border border-[#2ebfff]/35 bg-[#0b1c29] px-3 py-1.5 text-xs font-medium text-[#b3f5ff]">
                Scene Assembly Active
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
                className="rounded-full border border-[#2ebfff]/40 bg-[#0d2230] px-4 py-2 text-sm font-semibold text-[#98eeff] transition hover:border-[#59d5ff] hover:text-white"
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
        <section className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)_320px]">
          {/* left step nav */}
          <aside className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
            <div className="mb-4 border-b border-white/10 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Workflow Navigator
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">
                Production Steps
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#84a8b8]">
                지금 어느 단계에 있고, 어디로 넘어갈지 한눈에 보이게 한 사이드 스텝 바.
              </p>
            </div>

            <div className="space-y-3">
              {productionSteps.map((item) => (
                <div
                  key={item.step}
                  className={`rounded-[22px] border p-4 transition ${getStepStyle(item.status)}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/35">
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
          </aside>

          {/* center workspace */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[34px] border border-[#18384b] bg-white/[0.03] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-5">
              <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-[#1d4557]">
                <Image
                  src="/images/img11.jpg"
                  alt="studio dark active workspace"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 65vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,18,0.20)_0%,rgba(5,11,18,0.08)_26%,rgba(4,9,16,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

                <div className="absolute left-5 top-5 right-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#2ebfff]/50 bg-[#0d2230] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#97ebff]">
                      Active Scene 03
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                      Corridor Walk
                    </span>
                  </div>

                  <div className="grid gap-2 text-right sm:grid-cols-2">
                    <div className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                        Camera
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">Medium Close-up</p>
                    </div>
                    <div className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                        Tone
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">Cold Tension</p>
                    </div>
                    <div className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                        Ratio
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">16:9</p>
                    </div>
                    <div className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">Castle Corridor</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8ceaff]">
                    Active Session
                  </p>
                  <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    장면을 조합하고, 구도를 고르고,
                    <br />
                    실제 제작실처럼 연출을 다듬는 워크스페이스
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8fb4c3] sm:text-base">
                    이 다크 시안은 기능 설명보다 현재 작업 상태를 먼저 보여주게 설계했어.
                    원작에서 가져온 캐릭터와 장소, 조명, 감정 톤, 카메라 구도를 한 화면에
                    겹쳐 놓아서 진짜 작업툴처럼 보이게 만드는 방향이야.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-full border border-[#2ebfff]/50 bg-[#0d2230] px-5 py-3 text-sm font-semibold text-[#9ef1ff] shadow-[0_0_28px_rgba(46,191,255,0.14)] transition hover:border-[#60d5ff] hover:text-white"
                    >
                      Continue Production
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      Open Shot Board
                    </button>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-4">
                    {[
                      ["Project", "Moonlit Crown"],
                      ["Lead", "Arielle"],
                      ["Scene Status", "Assembly in progress"],
                      ["Next Step", "Shot Direction"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* timeline */}
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                    Scene Timeline
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-white">
                    편집실처럼 보이는 씬 스트립
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
                  5 scenes
                </span>
              </div>

              <div className="overflow-x-auto">
                <div className="flex min-w-max gap-4 pb-1">
                  {sceneTimeline.map((scene) => (
                    <article
                      key={scene.id}
                      className={`w-[240px] overflow-hidden rounded-[24px] border transition ${
                        scene.active
                          ? "border-[#2ebfff]/45 bg-[#0b1924] shadow-[0_0_0_1px_rgba(46,191,255,0.20),0_0_28px_rgba(46,191,255,0.12)]"
                          : "border-white/10 bg-white/[0.02]"
                      }`}
                    >
                      <div className="relative h-[145px]">
                        <Image
                          src={scene.image}
                          alt={scene.title}
                          fill
                          className="object-cover"
                          sizes="240px"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,18,0.72)_5%,rgba(5,11,18,0.10)_55%,rgba(5,11,18,0.02)_100%)]" />
                        {scene.active && (
                          <span className="absolute left-3 top-3 rounded-full border border-[#2ebfff]/50 bg-[#0d2230] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9bf0ff]">
                            Active
                          </span>
                        )}
                      </div>

                      <div className="p-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                          {scene.id}
                        </p>
                        <h3 className="mt-2 text-lg font-extrabold text-white">{scene.title}</h3>
                        <p className="mt-2 text-sm text-[#8aa9b8]">{scene.type}</p>
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
                지금 사용자가 어떤 프로젝트를 어떤 톤으로 만들고 있는지 바로 이해되게
                해주는 패널이야.
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

            <div className="rounded-[26px] border border-[#2ebfff]/20 bg-[#0b1924] p-5 shadow-[0_0_28px_rgba(46,191,255,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8ceaff]">
                Next Action
              </p>
              <h3 className="mt-3 text-xl font-extrabold text-white">
                장면 구성이 완료되면
                <br />
                Shot Direction으로 이동
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#8fb4c3]">
                다음 단계에서는 카메라 앵글과 거리감, 프레임 전환, 감정선을 더 정교하게
                다듬게 되는 구조로 보여줄 수 있어.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#2ebfff]/45 bg-[#103149] px-4 py-3 text-sm font-semibold text-[#9df3ff] transition hover:border-[#62d7ff] hover:text-white"
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

        {/* production rooms */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Production Rooms
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                실제 제작실처럼 보이는 작업 구역
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              4 rooms
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productionRooms.map((room) => (
              <article
                key={room.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-white">{room.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    {room.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#8fb4c3]">{room.desc}</p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                      Assets
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{room.assets}</p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                      Review
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{room.review}</p>
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
                장면만 보여주는 게 아니라
                <br />
                결과물 패키지까지 나오는 스튜디오처럼
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8fb4c3]">
                다크 시안은 작업 과정의 밀도와 결과물의 전문성을 함께 보여줘야 해. 그래서
                최종 산출물까지 한 번에 보이게 두면 더 진짜 스튜디오 같아져.
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

            <div className="rounded-[32px] border border-[#2ebfff]/20 bg-[#0b1924] p-6 shadow-[0_0_36px_rgba(46,191,255,0.08)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8ceaff]">
                Final Direction
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                소개 페이지보다
                <br />
                작업 중인 콘솔처럼 보이게
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#8fb4c3]">
                이 버전은 “무슨 기능이 있다”보다 “지금 여기서 진짜 장면을 만들고 있다”는
                감각을 먼저 보여주는 데 초점을 둔 구조야.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#2ebfff]/45 bg-[#123149] px-6 py-3 text-sm font-semibold text-[#9df3ff] transition hover:border-[#66d8ff] hover:text-white"
                >
                  이 시안 선택
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