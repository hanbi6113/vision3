// app/studio-light/page.tsx
import Image from "next/image";
import Link from "next/link";

const quickStarts = [
  {
    title: "소설 불러오기",
    desc: "기존 원작을 바로 가져와 캐릭터와 장면 구성을 시작합니다.",
  },
  {
    title: "웹툰 불러오기",
    desc: "컷 분위기와 인물 톤을 바탕으로 실사형 흐름을 만듭니다.",
  },
  {
    title: "새 프로젝트 만들기",
    desc: "아이디어 한 줄에서 시작해 처음부터 세계관을 설계합니다.",
  },
  {
    title: "템플릿으로 시작",
    desc: "티저, 광고, 숏드라마 등 목적에 맞는 구조로 빠르게 시작합니다.",
  },
];

const workflow = [
  {
    step: "01",
    title: "작품 시작",
    desc: "원작이나 새 아이디어를 불러와 프로젝트를 엽니다.",
    status: "done",
  },
  {
    step: "02",
    title: "스토리 정리",
    desc: "장르, 분위기, 키워드로 전체 방향을 정리합니다.",
    status: "done",
  },
  {
    step: "03",
    title: "캐릭터 만들기",
    desc: "인물의 역할과 인상, 감정선을 먼저 잡습니다.",
    status: "active",
  },
  {
    step: "04",
    title: "스타일 정하기",
    desc: "얼굴 무드, 헤어, 의상과 톤을 고릅니다.",
    status: "upcoming",
  },
  {
    step: "05",
    title: "장면 구성",
    desc: "배경, 구도, 비율로 장면 흐름을 완성합니다.",
    status: "upcoming",
  },
  {
    step: "06",
    title: "영상 마감",
    desc: "컷 순서, 자막, 출력 형태를 정리합니다.",
    status: "upcoming",
  },
];

const progressCards = [
  {
    label: "Completed",
    title: "Story Setup",
    desc: "장르와 분위기가 정리되어 전체 방향이 잡혔어요.",
  },
  {
    label: "Now",
    title: "Character Design",
    desc: "주인공 인상과 관계 톤을 고르는 단계예요.",
  },
  {
    label: "Next",
    title: "Look Development",
    desc: "실사형 얼굴과 의상 무드를 맞출 차례예요.",
  },
];

const selections = [
  { label: "장르", value: "판타지 로맨스" },
  { label: "무드", value: "차분하고 서늘함" },
  { label: "주인공", value: "도도한 인상" },
  { label: "형식", value: "티저 영상" },
  { label: "비율", value: "16:9" },
  { label: "현재 단계", value: "캐릭터 설계" },
];

const featureFlow = [
  {
    title: "Character",
    desc: "주인공과 조연의 인상, 헤어, 의상, 감정선을 먼저 정리합니다.",
    image: "/images/img6.jpg",
  },
  {
    title: "Scene",
    desc: "배경과 비율, 장소와 구도를 맞춰 장면이 어떻게 보일지 조합합니다.",
    image: "/images/img8.jpg",
  },
  {
    title: "Edit",
    desc: "컷 순서와 자막, 템포를 다듬어 결과물이 더 자연스럽게 이어지게 만듭니다.",
    image: "/images/img5.jpg",
  },
];

const templates = [
  { title: "Fantasy Trailer", image: "/images/img5.jpg" },
  { title: "Short Drama", image: "/images/img7.jpg" },
  { title: "Character Reveal", image: "/images/img6.jpg" },
  { title: "Mood Teaser", image: "/images/img8.jpg" },
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
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#4f6775]">
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
              Easy Workflow
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#7e9cac]">
              Step 03 of 06
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
        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-[34px] border border-[#d9edf7] bg-white/90 p-6 shadow-[0_24px_60px_rgba(176,214,231,0.15)] backdrop-blur-xl md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#87b9cc]">
              Studio Light
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#4e6978] sm:text-5xl">
              누구나 쉽게 시작하고
              <br />
              보기 좋게 완성하는 제작 흐름
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7f99a7] sm:text-base">
              이야기에서 시작해 캐릭터를 고르고, 장면을 만들고, 짧은 결과물까지
              자연스럽게 이어지는 가장 쉬운 Studio 모드예요.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[linear-gradient(135deg,#92ddff,#d8f4ff)] px-5 py-3 text-sm font-bold text-[#44728a] shadow-[0_12px_24px_rgba(146,221,255,0.28)] transition hover:brightness-105"
              >
                새 프로젝트 시작
              </button>
              <button
                type="button"
                className="rounded-full border border-[#d8ebf5] bg-white px-5 py-3 text-sm font-medium text-[#6f96a9] transition hover:bg-[#fbfeff]"
              >
                템플릿 보기
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Project", "Moonlit Crown"],
                ["Current", "Character"],
                ["Next", "Look"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[#dceef7] bg-[#f8fdff] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8db7c9]">
                    {label}
                  </p>
                  <p className="mt-3 text-xl font-extrabold text-[#4f6b79]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d9edf7] bg-white/88 p-5 shadow-[0_24px_60px_rgba(176,214,231,0.14)] backdrop-blur-xl">
            <div className="grid gap-4">
              <div className="rounded-[24px] border border-[#dceef7] bg-[#f8fdff] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8bb8ca]">
                  Current Project
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-[#4f6b79]">
                  Guided Studio Dashboard
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#7d98a6]">
                  지금 어떤 프로젝트를 만들고 있고, 다음에 무엇을 하면 되는지 바로
                  보이도록 정리한 대시보드예요.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#dceef7] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8bb8ca]">
                    Character Preview
                  </p>
                  <div className="relative mt-3 h-[170px] overflow-hidden rounded-[18px]">
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
                  <div className="relative mt-3 h-[170px] overflow-hidden rounded-[18px]">
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

              <div className="rounded-[24px] border border-[#dceef7] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8bb8ca]">
                  Current Selection
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selections.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 rounded-[16px] border border-[#e4f0f6] bg-[#fbfeff] px-4 py-3"
                    >
                      <span className="text-sm text-[#7d98a6]">{item.label}</span>
                      <span className="text-sm font-semibold text-[#4f6b79]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* quick starts */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Quick Start
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                원하는 방식으로 바로 시작
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              4 ways
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickStarts.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#d9edf7] bg-white/88 p-5 shadow-[0_16px_40px_rgba(179,214,230,0.12)]"
              >
                <h3 className="text-xl font-extrabold text-[#4f6b79]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* progress */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
              Progress
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
              지금 어디까지 왔는지 바로 보이게
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {progressCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[30px] border border-[#d9edf7] bg-white/90 p-6 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <span className="rounded-full border border-[#d9edf7] bg-[#f8fdff] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#86b8cb]">
                  {card.label}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-[#4f6b79]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{card.desc}</p>
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
                쉬운 순서대로 따라가는 6단계
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              6 steps
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-[#d9edf7] bg-white/88 p-6 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-5xl font-extrabold text-[#d7edf7]">{item.step}</p>
                    <h3 className="mt-4 text-2xl font-extrabold text-[#4f6b79]">{item.title}</h3>
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

        {/* flow */}
        <section className="mt-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
              Build Flow
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
              캐릭터에서 장면, 편집까지 자연스럽게
            </h2>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {featureFlow.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[30px] border border-[#d9edf7] bg-white/90 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8bb8ca]">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#4f6b79]">
                    {item.title} Step
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#7d98a6]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* templates */}
        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8bb8ca]">
                Templates & Outputs
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                바로 떠올릴 수 있는 결과물 예시
              </h2>
            </div>
            <span className="rounded-full border border-[#d9edf7] bg-white px-3 py-1.5 text-xs font-medium text-[#8aa6b4]">
              4 samples
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {templates.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[26px] border border-[#d9edf7] bg-white/90 shadow-[0_18px_40px_rgba(179,214,230,0.12)]"
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
                  <h3 className="text-lg font-extrabold text-[#4f6b79]">{item.title}</h3>
                </div>
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
              캐릭터 인상과 관계가 정리됐으니, 이제 실사형 얼굴 무드와 의상 톤을 맞춰
              장면 안으로 자연스럽게 이어갈 차례예요.
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
                Review Story
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