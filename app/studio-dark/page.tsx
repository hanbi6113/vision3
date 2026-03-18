// app/studio-dark/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroStats = [
  { label: "Mode", value: "Production" },
  { label: "Output", value: "Teaser Cut" },
  { label: "Runtime", value: "00:24" },
];

const workflow = [
  {
    step: "01",
    title: "Source",
    desc: "원작 소설, 웹툰, 기획안을 가져와 프로젝트의 시작점을 정합니다.",
  },
  {
    step: "02",
    title: "Story",
    desc: "장르, 무드, 감정선, 핵심 키워드를 정리해 전체 방향을 잡습니다.",
  },
  {
    step: "03",
    title: "Cast",
    desc: "주인공과 조연의 역할, 인상, 관계를 바탕으로 인물 구성을 설계합니다.",
  },
  {
    step: "04",
    title: "Look",
    desc: "얼굴 무드, 헤어, 의상, 조명을 정리해 실사형 톤을 고릅니다.",
  },
  {
    step: "05",
    title: "Scene",
    desc: "배경, 비율, 구도, 카메라 거리로 장면의 흐름을 조합합니다.",
  },
  {
    step: "06",
    title: "Edit",
    desc: "컷 순서와 자막, 템포, 출력 형태를 정리해 결과물을 마감합니다.",
  },
];

const statusCards = [
  {
    title: "Current Project",
    lines: ["Moonlit Crown", "Fantasy Romance", "Scene Build in progress"],
  },
  {
    title: "Selected Look",
    lines: ["Cold Royal", "Moon Blue Light", "Elegant Lead"],
  },
  {
    title: "Render Queue",
    lines: ["Preview ready", "Poster still pending", "Vertical cut queued"],
  },
];

const studioBoards = [
  {
    title: "Story Board",
    desc: "서사 흐름과 장면의 강약을 정리해 어떤 컷이 먼저 보여야 하는지 결정합니다.",
    image: "/images/img9.jpg",
    meta: "Narrative / Sequence",
  },
  {
    title: "Character Room",
    desc: "캐릭터 인상과 의상 무드, 관계의 온도를 맞춰 실사형 분위기를 고정합니다.",
    image: "/images/img10.jpg",
    meta: "Casting / Look Dev",
  },
  {
    title: "Scene Board",
    desc: "배경과 카메라 구도를 조합해 티저처럼 보이는 컷 흐름을 만듭니다.",
    image: "/images/img11.jpg",
    meta: "Frame / Direction",
  },
];

const sceneStrip = [
  { code: "SC-01", title: "Opening Reveal", image: "/images/img9.jpg" },
  { code: "SC-02", title: "Lead Close-up", image: "/images/img10.jpg" },
  { code: "SC-03", title: "Corridor Walk", image: "/images/img11.jpg", active: true },
  { code: "SC-04", title: "Emotional Pause", image: "/images/img12.jpg" },
];

const outputs = [
  "Teaser Trailer",
  "9:16 Social Cut",
  "Poster Still",
  "Thumbnail Set",
  "Key Visual Frame",
  "Pitch Preview",
];

export default function StudioDarkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050912] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050912_0%,#08101a_38%,#060b13_72%,#04070d_100%)]" />
        <div className="absolute left-[-90px] top-[-90px] h-[320px] w-[320px] rounded-full bg-[#2fc3ff]/14 blur-[120px]" />
        <div className="absolute right-[-90px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#6d7bff]/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[18%] h-[320px] w-[320px] rounded-full bg-[#1fd7c4]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <header className="mb-8 flex flex-col gap-4 rounded-[26px] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              ← 홈
            </Link>

            <span className="rounded-full border border-[#2fc3ff]/35 bg-[#0b1d29] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#95edff]">
              Vision3 Studio
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/65">
              Production Workspace
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/65">
              Draft v1.4
            </span>
            <span className="rounded-full border border-[#2fc3ff]/30 bg-[#0b1d29] px-3 py-1.5 text-xs font-medium text-[#98f0ff]">
              Last saved 2 min ago
            </span>
            <Link
              href="/studio-light"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              밝은 시안 보기 →
            </Link>
          </div>
        </header>

        {/* hero */}
        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8fe9ff]">
              Studio Dark
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              더 정교하게 만들고
              <br />
              더 완성도 있게 다듬는 제작 스튜디오
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8caebe] sm:text-base">
              스토리 정리부터 캐릭터 룩, 장면 구성, 편집 마감까지. 결과물이 더
              프리미엄하게 보이도록 제작 흐름을 한 화면 안에서 정리한 Studio 모드예요.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-[#2fc3ff]/45 bg-[#0e2534] px-5 py-3 text-sm font-semibold text-[#9df0ff] shadow-[0_0_28px_rgba(47,195,255,0.14)] transition hover:border-[#58d4ff] hover:text-white"
              >
                Start Project
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Watch Workflow
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-extrabold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-[#18394b] bg-white/[0.03] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="relative min-h-[540px] overflow-hidden rounded-[28px] border border-[#1f495d]">
              <Image
                src="/images/img11.jpg"
                alt="studio dark preview"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,18,0.18)_0%,rgba(5,11,18,0.10)_34%,rgba(5,11,18,0.85)_100%)]" />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2fc3ff]/45 bg-[#0e2534] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#97ecff]">
                  SC-03 Active
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                  Corridor Walk
                </span>
              </div>

              <div className="absolute right-4 top-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Frame", "Medium Shot"],
                  ["Light", "Moon Blue"],
                  ["Preset", "Cold Royal"],
                  ["Status", "Preview Ready"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[16px] border border-white/10 bg-black/20 px-3 py-2"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                  Active Session
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  장면 단위로 다듬고
                  <br />
                  최종 결과물까지 연결하는 프로덕션 흐름
                </h2>
                <div className="mt-5 grid gap-3 md:grid-cols-4">
                  {[
                    ["Project", "Moonlit Crown"],
                    ["Duration", "00:24"],
                    ["Assets", "18 frames"],
                    ["Next", "Shot Direction"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* status */}
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {statusCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8fe9ff]">
                {card.title}
              </p>
              <div className="mt-4 space-y-3">
                {card.lines.map((line) => (
                  <div
                    key={line}
                    className="rounded-[16px] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/80"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* workflow */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                Production Flow
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                더 깊게 작업할 때 필요한 6단계
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              6 steps
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <p className="text-5xl font-extrabold text-white/12">{item.step}</p>
                <h3 className="mt-5 text-2xl font-extrabold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#8caebe]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* studio boards */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                Studio Boards
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                프로젝트를 정리하는 핵심 공간
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              3 boards
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {studioBoards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,18,0.76)_8%,rgba(5,11,18,0.10)_48%,rgba(5,11,18,0.03)_100%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                    {card.meta}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8caebe]">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* scene strip */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                Scene Strip
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                컷 흐름을 바로 확인하는 타임라인
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
              Active scene included
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-4 pb-2">
              {sceneStrip.map((item) => (
                <article
                  key={item.code}
                  className={`w-[250px] overflow-hidden rounded-[26px] border backdrop-blur-xl ${
                    item.active
                      ? "border-[#2fc3ff]/35 bg-[#0d1a25] shadow-[0_0_0_1px_rgba(47,195,255,0.18),0_0_28px_rgba(47,195,255,0.10)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="relative h-[150px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,11,18,0.74)_5%,rgba(5,11,18,0.12)_52%,rgba(5,11,18,0.03)_100%)]" />
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/38">
                      {item.code}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-white">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* outputs */}
        <section className="mt-10 pb-8">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                Output Package
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                티저부터 썸네일까지
                <br />
                한 프로젝트 안에서 정리되는 결과물
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8caebe]">
                영상만 만드는 것이 아니라, 배포와 피치에 필요한 주요 산출물까지 함께
                정리되는 흐름으로 구성했어요.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {outputs.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-4 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#2fc3ff]/18 bg-[#0c1823] p-7 shadow-[0_0_34px_rgba(47,195,255,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8fe9ff]">
                Ready to Build
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                더 깔끔하게 만들고
                <br />
                더 영화처럼 다듬는 방식
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#8caebe]">
                Studio Dark는 정보가 많아도 복잡해 보이기보다, 필요한 것만 정리된
                프리미엄 작업 화면처럼 느껴지도록 설계했어요.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-[#2fc3ff]/45 bg-[#10293b] px-6 py-3 text-sm font-semibold text-[#9ff1ff] transition hover:border-[#60d7ff] hover:text-white"
                >
                  Choose Dark Studio
                </button>
                <Link
                  href="/studio-light"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Light Studio 보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}