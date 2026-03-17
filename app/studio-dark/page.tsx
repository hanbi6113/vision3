// app/studio-dark/page.tsx
import Image from "next/image";
import Link from "next/link";

const pipeline = [
  {
    step: "01",
    title: "Source",
    desc: "소설 / 웹툰 불러오기 또는 새 프로젝트 생성",
  },
  {
    step: "02",
    title: "Story",
    desc: "줄거리, 장르, 무드, 핵심 키워드 정리",
  },
  {
    step: "03",
    title: "Cast",
    desc: "주인공, 조연, 성격, 관계 정의",
  },
  {
    step: "04",
    title: "Live Action",
    desc: "얼굴, 의상, 분위기, 실사화 스타일 선택",
  },
  {
    step: "05",
    title: "Scene",
    desc: "비율, 배경, 장면 조합, 컷 설계",
  },
  {
    step: "06",
    title: "Edit",
    desc: "카메라, 구도, 전환, 효과, 최종 편집",
  },
];

const controlPanels = [
  {
    title: "Source Material",
    desc: "원작 소설 또는 웹툰을 기준으로 전체 장면 흐름의 출발점을 설정합니다.",
  },
  {
    title: "Character Casting",
    desc: "성격과 역할을 기준으로 가장 어울리는 실사형 비주얼을 고릅니다.",
  },
  {
    title: "Scene Direction",
    desc: "배경, 조명, 카메라 거리, 장면 감정을 함께 설계합니다.",
  },
  {
    title: "Edit Suite",
    desc: "영상 결과물의 전환, 컷 순서, 리듬을 정리해 최종 퀄리티를 높입니다.",
  },
];

const cinematicCards = [
  {
    title: "스토리 컨트롤 룸",
    desc: "원작의 톤과 핵심 줄거리를 바탕으로 전체 실사화 방향을 잡는 구간",
    image: "/images/img9.jpg",
  },
  {
    title: "캐릭터 실사화 룸",
    desc: "인물의 성격과 역할에 맞춰 얼굴, 스타일, 의상 무드를 조합하는 구간",
    image: "/images/img10.jpg",
  },
  {
    title: "씬 프로덕션 보드",
    desc: "배경과 비율, 장소와 동선을 정리해 장면을 실제 영상처럼 설계하는 구간",
    image: "/images/img11.jpg",
  },
  {
    title: "파이널 컷 편집",
    desc: "카메라 움직임과 컷 흐름, 텍스트와 사운드 요소를 다듬는 구간",
    image: "/images/img12.jpg",
  },
];

const timeline = [
  "원작 불러오기",
  "등장인물 설정",
  "얼굴 실사화 선택",
  "배경·비율 적용",
  "영상 생성",
  "카메라·편집 마감",
];

export default function StudioDarkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050a12] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050a12_0%,#08101b_36%,#070c14_100%)]" />
        <div className="absolute left-[-90px] top-[-100px] h-[340px] w-[340px] rounded-full bg-[#3ac8ff]/16 blur-[110px]" />
        <div className="absolute right-[-80px] top-[120px] h-[300px] w-[300px] rounded-full bg-[#637dff]/12 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[18%] h-[320px] w-[320px] rounded-full bg-[#1fd8c5]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <span className="text-sm text-white/55">Studio Dark</span>
            <span className="text-sm text-white/35">Pipeline</span>
            <span className="text-sm text-white/35">Production</span>
            <span className="text-sm text-white/35">Edit Suite</span>
          </div>

          <Link
            href="/studio-light"
            className="rounded-full border border-[#214f63] bg-transparent px-4 py-2 text-sm font-medium text-[#7ea6b8] transition hover:border-[#2f6f8b] hover:text-[#a3d8ec]"
          >
            밝은 시안 보기 →
          </Link>
        </div>

        {/* hero */}
        <section className="mb-12 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="overflow-hidden rounded-[34px] border border-[#18384b] bg-white/[0.03] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-[#1b4d63]">
              <Image
                src="/images/img9.jpg"
                alt="studio dark hero"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,18,0.88)_10%,rgba(3,10,18,0.28)_48%,rgba(3,10,18,0.05)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2aa8cf] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8aefff] shadow-[0_0_18px_rgba(42,168,207,0.12)]">
                  Production Mode
                </span>
                <span className="rounded-full border border-[#214f63] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#9ceeff]">
                  Cinematic AI
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8aefff]">
                  Dark Studio Concept
                </p>
                <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  소설을 장면으로 만들고
                  <br />
                  장면을 영화처럼 다듬는 제작실
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8fb4c3] sm:text-base">
                  이 시안은 실제 프로덕션 룸처럼 보이게 만드는 데 집중했어. 원작을
                  불러오고, 캐릭터를 설계하고, 얼굴을 실사화하고, 배경과 구도를 넣고,
                  마지막에 영상 편집까지 연결되는 흐름을 시네마틱하게 보여주는 구조야.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full border border-[#2aa8cf] bg-transparent px-5 py-3 text-sm font-semibold text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] transition hover:border-[#46cfff] hover:text-[#b6f6ff]">
                    Start Creating
                  </button>
                  <button className="rounded-full border border-[#214f63] bg-transparent px-5 py-3 text-sm font-medium text-[#7ea6b8] transition hover:border-[#2f6f8b] hover:text-[#a3d8ec]">
                    Workflow Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[28px] border border-[#18384b] bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8aefff]">
                Current Project
              </p>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Web Novel to Live Action
              </p>
              <p className="mt-3 text-sm leading-7 text-[#8fb4c3]">
                원작 텍스트를 기반으로 인물 설정부터 실사형 컷 구성, 영상 생성,
                편집까지 이어지는 전체 제작 흐름을 한 화면 안에서 보여주는 구조.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#18384b] bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8aefff]">
                Timeline
              </p>
              <div className="mt-4 space-y-3">
                {timeline.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[18px] border border-[#214f63] bg-transparent px-4 py-3"
                  >
                    <span className="text-sm font-medium text-[#9ed3e5]">{item}</span>
                    <span className="text-xs font-bold text-[#5ba9c5]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#18384b] bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8aefff]">
                Studio Note
              </p>
              <p className="mt-3 text-2xl font-extrabold leading-snug text-white">
                기능을 보여주는 게 아니라
                <br />
                제작되는 느낌을 보여주는 시안
              </p>
              <p className="mt-3 text-sm leading-7 text-[#8fb4c3]">
                지금 단계에서는 실제 기능보다도, 사용자가 “이 서비스를 쓰면 이런
                흐름으로 만들겠구나”를 직관적으로 느끼게 하는 디자인이 핵심이야.
              </p>
            </div>
          </div>
        </section>

        {/* pipeline */}
        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8aefff]">
                Pipeline
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                제작 워크플로우 전체 구조
              </h2>
            </div>
            <span className="text-sm text-[#7ea6b8]">6 stages</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 xl:grid-cols-6">
            {pipeline.map((item) => (
              <article
                key={item.step}
                className="rounded-[26px] border border-[#18384b] bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <p className="text-4xl font-extrabold text-white/15">{item.step}</p>
                <h3 className="mt-4 text-xl font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#8fb4c3]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* control panels */}
        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-white">
              프로덕션 컨트롤 패널
            </h2>
            <span className="text-sm text-[#7ea6b8]">4 rooms</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {controlPanels.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#18384b] bg-white/[0.03] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <p className="text-lg font-extrabold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#8fb4c3]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* cinematic cards */}
        <section className="pb-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-white">
              장면 제작과 편집이 보이는 UI
            </h2>
            <span className="text-sm text-[#7ea6b8]">Cinematic layout</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cinematicCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[30px] border border-[#18384b] bg-white/[0.03] shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,18,0.78)_8%,rgba(3,10,18,0.12)_45%,rgba(3,10,18,0.03)_100%)]" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8fb4c3]">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] border border-[#18384b] bg-white/[0.03] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8aefff]">
              Final Direction
            </p>
            <h3 className="mt-3 text-3xl font-extrabold text-white">
              원작에서 시작해서 실사형 영상으로 끝나는 흐름을,
              <br />
              더 전문적인 제작실처럼 보이게
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8fb4c3]">
              Studio 어두운 시안은 기능 버튼보다도 “실제로 작업 중인 느낌”이 먼저 들게
              하는 게 목표야. 그래서 패널, 프리뷰, 파이프라인, 편집실 같은 분위기를 더
              강하게 가져갔어.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full border border-[#2aa8cf] bg-transparent px-6 py-3 text-sm font-semibold text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] transition hover:border-[#46cfff] hover:text-[#b6f6ff]">
                이 시안 선택
              </button>
              <Link
                href="/studio-light"
                className="rounded-full border border-[#214f63] bg-transparent px-6 py-3 text-sm font-medium text-[#7ea6b8] transition hover:border-[#2f6f8b] hover:text-[#a3d8ec]"
              >
                밝은 시안 보기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}