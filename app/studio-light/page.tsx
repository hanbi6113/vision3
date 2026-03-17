// app/studio-light/page.tsx
import Image from "next/image";
import Link from "next/link";

const workflow = [
  {
    step: "01",
    title: "작품 시작",
    desc: "소설이나 웹툰을 불러오거나, 없으면 새 작품을 만드는 단계",
  },
  {
    step: "02",
    title: "스토리 설정",
    desc: "줄거리, 장르, 분위기, 핵심 키워드를 정리하는 단계",
  },
  {
    step: "03",
    title: "캐릭터 설계",
    desc: "주인공과 조연의 성격, 역할, 관계를 정의하는 단계",
  },
  {
    step: "04",
    title: "얼굴 실사화",
    desc: "얼굴 타입, 헤어, 의상, 무드를 선택해 실사형 비주얼을 만드는 단계",
  },
  {
    step: "05",
    title: "장면 구성",
    desc: "비율, 배경, 장소, 컷 흐름을 조합해 장면을 만드는 단계",
  },
  {
    step: "06",
    title: "영상 편집",
    desc: "구도, 카메라, 전환, 자막, 효과를 정리해 결과물을 다듬는 단계",
  },
];

const characterCards = [
  {
    title: "주인공 설정",
    desc: "주인공의 이름, 성격, 감정선, 대표 태그를 먼저 잡아 전체 톤을 정합니다.",
    image: "/images/img5.jpg",
  },
  {
    title: "얼굴 디자인",
    desc: "실사화할 얼굴 무드, 헤어, 의상, 표정을 선택해 캐릭터를 시각화합니다.",
    image: "/images/img6.jpg",
  },
  {
    title: "관계 설정",
    desc: "주인공과 상대역, 조연 간의 거리감과 관계 구조를 정리합니다.",
    image: "/images/img7.jpg",
  },
];

const buildPanels = [
  {
    title: "비율 선택",
    desc: "16:9, 9:16, 1:1 등 최종 배포 포맷에 맞는 화면 비율을 선택합니다.",
  },
  {
    title: "배경 적용",
    desc: "궁정, 도시, 교실, 골목, 스튜디오 등 장면 분위기에 맞는 배경을 끼웁니다.",
  },
  {
    title: "영상 생성",
    desc: "정지 이미지에서 영상으로 넘어가며 움직임 강도와 길이를 조절합니다.",
  },
  {
    title: "구도 편집",
    desc: "클로즈업, 롱샷, 전환 방식, 컷 순서를 정리해 완성도를 높입니다.",
  },
];

const mockSteps = [
  "소설 원문 불러오기",
  "장르 · 분위기 선택",
  "캐릭터 성격 입력",
  "얼굴 실사화 스타일 선택",
  "배경 / 비율 적용",
  "영상 생성 후 편집",
];

export default function StudioLightPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#4a6170]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfeff_0%,#f3faff_28%,#f8fcff_62%,#ffffff_100%)]" />
        <div className="absolute left-[-80px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#dff5ff] blur-[90px]" />
        <div className="absolute right-[-80px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#d9eeff] blur-[90px]" />
        <div className="absolute bottom-[-100px] left-[15%] h-[320px] w-[320px] rounded-full bg-[#eef8ff] blur-[110px]" />
        <div className="absolute bottom-[-90px] right-[12%] h-[320px] w-[320px] rounded-full bg-[#e8fbff] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* top bar */}
        <div className="mb-8 flex items-center justify-between border-b border-[#d9edf7] pb-5">
          <Link
            href="/"
            className="rounded-full border border-[#cfe7f2] bg-white/80 px-4 py-2 text-sm font-medium text-[#6590a5] transition hover:bg-white"
          >
            ← 홈
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <span className="text-sm text-[#86a5b4]">Studio Light</span>
            <span className="text-sm text-[#a1bac5]">Story</span>
            <span className="text-sm text-[#a1bac5]">Character</span>
            <span className="text-sm text-[#a1bac5]">Edit</span>
          </div>

          <Link
            href="/studio-dark"
            className="rounded-full border border-[#cfe7f2] bg-[#f4fcff] px-4 py-2 text-sm font-medium text-[#5f90a8] transition hover:bg-white"
          >
            어두운 시안 보기 →
          </Link>
        </div>

        {/* hero */}
        <section className="mb-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[34px] border border-[#d9edf7] bg-white/85 p-6 shadow-[0_24px_60px_rgba(170,210,230,0.16)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.30em] text-[#7fb9d1]">
              Bright Studio Concept
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#4f6b79] sm:text-5xl">
              소설이나 웹툰을
              <br />
              가장 쉽게 실사 영상으로
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7e97a3] sm:text-base">
              이 시안은 처음 보는 사람도 바로 이해할 수 있게, 작품 시작부터 캐릭터
              설정, 얼굴 실사화, 배경 적용, 영상 편집까지의 흐름을 밝고 단순하게
              보여주는 방향으로 잡았어.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[linear-gradient(135deg,#8fdcff,#d3f4ff)] px-5 py-3 text-sm font-bold text-[#3d748d] shadow-[0_12px_24px_rgba(150,220,245,0.28)] transition hover:brightness-105">
                새 작품 시작
              </button>
              <button className="rounded-full border border-[#cde7f2] bg-white/90 px-5 py-3 text-sm font-medium text-[#6d98ad] transition hover:bg-white">
                소설 불러오기
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[22px] border border-[#d9edf7] bg-[#f7fcff] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#86b5c8]">
                  Start
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#4f6b79]">01</p>
                <p className="mt-2 text-sm text-[#7e97a3]">작품 생성 또는 불러오기</p>
              </div>

              <div className="rounded-[22px] border border-[#d9edf7] bg-[#f7fcff] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#86b5c8]">
                  Design
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#4f6b79]">04</p>
                <p className="mt-2 text-sm text-[#7e97a3]">캐릭터 실사화 단계</p>
              </div>

              <div className="rounded-[22px] border border-[#d9edf7] bg-[#f7fcff] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#86b5c8]">
                  Finish
                </p>
                <p className="mt-3 text-3xl font-extrabold text-[#4f6b79]">06</p>
                <p className="mt-2 text-sm text-[#7e97a3]">영상 편집과 결과물 정리</p>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d9edf7] bg-white/88 p-5 shadow-[0_24px_60px_rgba(170,210,230,0.14)] backdrop-blur-xl">
            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-[#d8edf7] bg-[linear-gradient(180deg,#fafdff_0%,#f2f9fd_100%)] p-5">
              <div className="grid gap-4">
                <div className="rounded-[22px] border border-[#d8ecf6] bg-white/90 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#87b8cb]">
                    Project Source
                  </p>
                  <div className="mt-3 flex gap-3">
                    <button className="rounded-full bg-[#e9f8ff] px-4 py-2 text-sm font-semibold text-[#5c90a7]">
                      소설 불러오기
                    </button>
                    <button className="rounded-full border border-[#d6ebf4] bg-white px-4 py-2 text-sm font-medium text-[#7a9aa9]">
                      새 작품 만들기
                    </button>
                  </div>
                </div>

                <div className="rounded-[22px] border border-[#d8ecf6] bg-white/90 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#87b8cb]">
                    Workflow Preview
                  </p>
                  <div className="mt-4 space-y-3">
                    {mockSteps.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-[18px] border border-[#e2f0f6] bg-[#f9fdff] px-4 py-3"
                      >
                        <span className="text-sm font-medium text-[#5f7f8f]">
                          {item}
                        </span>
                        <span className="text-xs font-bold text-[#89b8ca]">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[22px] border border-[#d8ecf6] bg-white/90 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#87b8cb]">
                      Character
                    </p>
                    <div className="mt-3 relative h-[150px] overflow-hidden rounded-[18px]">
                      <Image
                        src="/images/img6.jpg"
                        alt="character preview"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-[#d8ecf6] bg-white/90 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#87b8cb]">
                      Scene
                    </p>
                    <div className="mt-3 relative h-[150px] overflow-hidden rounded-[18px]">
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
          </div>
        </section>

        {/* workflow */}
        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#87b8cb]">
                Workflow
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#4f6b79]">
                한눈에 보이는 제작 과정
              </h2>
            </div>
            <span className="text-sm font-medium text-[#91aebb]">6 steps</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-[#d9edf7] bg-white/85 p-6 shadow-[0_18px_40px_rgba(170,210,230,0.12)]"
              >
                <p className="text-5xl font-extrabold text-[#d6edf7]">{item.step}</p>
                <h3 className="mt-5 text-2xl font-extrabold text-[#4f6b79]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#7e97a3]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* character section */}
        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#4f6b79]">
              캐릭터와 실사화 디자인
            </h2>
            <span className="text-sm font-medium text-[#91aebb]">3 panels</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {characterCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[28px] border border-[#d9edf7] bg-white/85 shadow-[0_18px_40px_rgba(170,210,230,0.12)]"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-[#4f6b79]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7e97a3]">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* build panels */}
        <section className="pb-10">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-[#4f6b79]">
              장면 생성부터 편집까지
            </h2>
            <span className="text-sm font-medium text-[#91aebb]">Easy UI</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {buildPanels.map((panel) => (
              <div
                key={panel.title}
                className="rounded-[24px] border border-[#d9edf7] bg-white/88 p-5 shadow-[0_14px_30px_rgba(170,210,230,0.10)]"
              >
                <p className="text-lg font-extrabold text-[#4f6b79]">{panel.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#7e97a3]">{panel.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-[#d9edf7] bg-white/90 p-7 shadow-[0_18px_40px_rgba(170,210,230,0.12)]">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#87b8cb]">
              Final Output
            </p>
            <h3 className="mt-3 text-3xl font-extrabold text-[#4f6b79]">
              작품을 만들고, 실사화하고, 영상으로 완성하는 전체 흐름
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#7e97a3]">
              Studio 밝은 시안은 어려운 제작 도구처럼 보이기보다, 누구나 바로 이해할 수
              있는 단계형 제작실처럼 보이게 만드는 데 초점을 둔 디자인이야.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-[linear-gradient(135deg,#8fdcff,#d3f4ff)] px-5 py-3 text-sm font-bold text-[#3d748d] shadow-[0_12px_24px_rgba(150,220,245,0.25)] transition hover:brightness-105">
                이 시안 선택
              </button>
              <Link
                href="/studio-dark"
                className="rounded-full border border-[#cde7f2] bg-white px-5 py-3 text-sm font-medium text-[#6d98ad] transition hover:bg-[#f8fdff]"
              >
                어두운 시안 보기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}