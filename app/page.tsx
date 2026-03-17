// app/page.tsx
import Link from "next/link";

const entries = [
  {
    title: "Discover",
    href: "/discover",
    label: "Best Challenge",
    desc: "누구나 참여하고 무료 1화를 탐색할 수 있는 Discover 공간",
    accent: "from-[#ff8fb7] via-[#ffb6cf] to-[#ffd9e7]",
    button:
      "border border-[#f6bfd8] bg-[#fff0f7] text-[#c76790] hover:bg-[#ffe8f3]",
  },
  {
    title: "Studio Light",
    href: "/studio-light",
    label: "Create with AI · Bright",
    desc: "밝고 직관적인 흐름으로 소설·웹툰 기반 실사화 제작 과정을 보여주는 스튜디오 시안",
    accent: "from-[#8ed8ff] via-[#b9ecff] to-[#e5fbff]",
    button:
      "border border-[#bfe8f8] bg-[#f4fcff] text-[#4c97b6] hover:bg-white",
  },
  {
    title: "Studio Dark",
    href: "/studio-dark",
    label: "Create with AI · Dark",
    desc: "시네마틱하고 몰입감 있게 실사화 제작 워크플로우를 보여주는 스튜디오 시안",
    accent: "from-[#35c8ff] via-[#68e0ff] to-[#9ff4ff]",
    button:
      "border border-[#2aa8cf] bg-transparent text-[#8aefff] hover:border-[#46cfff] hover:text-[#b6f6ff]",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060b14] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060b14_0%,#0a1220_42%,#080d16_100%)]" />
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#4d78ff]/18 blur-[110px]" />
        <div className="absolute right-[-100px] top-[90px] h-[320px] w-[320px] rounded-full bg-[#8f63ff]/14 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[18%] h-[340px] w-[340px] rounded-full bg-[#2dd4ff]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.06]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 md:px-8 lg:px-10">
        <div className="border-b border-white/10 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#8fb7ff]">
            Vision3
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Select Entry
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
            Discover는 탐색과 유입 중심, Studio는 소설·웹툰을 기반으로 실사형 AI
            영상을 제작하는 과정을 보여주는 공간이야. 아래에서 원하는 흐름을 골라
            들어가면 돼.
          </p>
        </div>

        <section className="flex flex-1 items-center py-12">
          <div className="grid w-full gap-6 lg:grid-cols-3">
            {entries.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                <div
                  className={`h-2 w-full rounded-full bg-gradient-to-r ${item.accent}`}
                />

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/42">
                    {item.label}
                  </p>

                  <h2 className="mt-3 text-4xl font-extrabold text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={item.href}
                    className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${item.button}`}
                  >
                    들어가기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}