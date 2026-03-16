// components/discover/discover-shell.tsx
import Image from "next/image";
import Link from "next/link";
import {
  discoverData,
  genreMenu,
  type GenreKey,
} from "@/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

const genreImages: Record<GenreKey, string[]> = {
  rofan: [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ],
  romance: [
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
  ],
  sf: [
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
  ],
  murim: [
    "/images/img13.jpg",
    "/images/img14.jpg",
    "/images/img15.jpg",
    "/images/img16.jpg",
  ],
  horror: [
    "/images/img17.jpg",
    "/images/img18.jpg",
    "/images/img19.jpg",
    "/images/img20.jpg",
  ],
};

const cardBadges = ["NEW", "CURATED", "TRENDING", "VISION PICK"];

const cardLayouts = [
  {
    wrapper: "md:col-span-2 xl:col-span-2",
    imageHeight: "h-[320px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[230px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[290px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[250px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[260px]",
  },
  {
    wrapper: "md:col-span-2 xl:col-span-2",
    imageHeight: "h-[300px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[220px]",
  },
  {
    wrapper: "md:col-span-1 xl:col-span-1",
    imageHeight: "h-[280px]",
  },
] as const;

const cardOrders: Record<GenreKey, number[]> = {
  rofan: [0, 3, 1, 6, 4, 2, 7, 5],
  romance: [2, 0, 5, 1, 7, 3, 6, 4],
  sf: [1, 4, 0, 6, 3, 7, 2, 5],
  murim: [3, 0, 6, 2, 5, 1, 7, 4],
  horror: [5, 1, 6, 0, 7, 3, 4, 2],
};

export default function DiscoverShell({ activeGenre }: Props) {
  const content = discoverData[activeGenre];
  const theme = content.theme;
  const currentImages = genreImages[activeGenre];
  const heroImage = currentImages[0];
  const isRofan = activeGenre === "rofan";

  const baseCards = Array.from({ length: 8 }, (_, index) => {
    const base = content.panels[index % content.panels.length];

    return {
      ...base,
      image: currentImages[index % currentImages.length],
      badge: cardBadges[index % cardBadges.length],
      episode: `EP ${String(index + 1).padStart(2, "0")}`,
    };
  });

  const expandedCards = cardOrders[activeGenre].map((cardIndex, layoutIndex) => ({
    ...baseCards[cardIndex],
    layout: cardLayouts[layoutIndex],
  }));

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isRofan ? "text-[#6f4b67]" : `${theme.page} ${theme.text}`
      }`}
    >
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {isRofan ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8fc_0%,#fff4f7_20%,#fff7ef_48%,#eef9ff_100%)]" />
            <div className="absolute left-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#ffd8ec] blur-[70px]" />
            <div className="absolute right-[-60px] top-[80px] h-[280px] w-[280px] rounded-full bg-[#dff4ff] blur-[70px]" />
            <div className="absolute bottom-[-100px] left-[18%] h-[300px] w-[300px] rounded-full bg-[#fff1b8] blur-[90px]" />
            <div className="absolute bottom-[-80px] right-[12%] h-[320px] w-[320px] rounded-full bg-[#e7dcff] blur-[90px]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#07080d_0%,#0b0d13_42%,#090a10_100%)]" />
            <div
              className={`absolute left-[-110px] top-[-70px] h-[300px] w-[300px] rounded-full blur-[120px] ${theme.glowA}`}
            />
            <div
              className={`absolute right-[-90px] top-[120px] h-[260px] w-[260px] rounded-full blur-[120px] ${theme.glowB}`}
            />
          </>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        {/* header */}
        <div
          className={`mb-8 flex flex-col gap-5 border-b pb-6 xl:flex-row xl:items-end xl:justify-between ${
            isRofan ? "border-[#f0dbe5]" : "border-white/10"
          }`}
        >
          <div>
            <p
              className={`text-xs font-bold uppercase tracking-[0.30em] ${
                isRofan ? "text-[#d17fa2]" : theme.accentText
              }`}
            >
              Vision3 Discover
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Discover
            </h1>
            <p
              className={`mt-4 max-w-3xl text-sm leading-7 sm:text-base ${
                isRofan ? "text-[#8f7186]" : "text-white/65"
              }`}
            >
              누구나 참여할 수 있는 웹툰 · 소설 기반 실사형 AI 애니메이션 공간.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {genreMenu.map((item) => {
              const isActive = item.key === activeGenre;

              return (
                <Link
                  key={item.key}
                  href={`/discover/${item.key}`}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isRofan
                      ? isActive
                        ? "border border-[#f6bfd8] bg-[#fff0f7] text-[#c76790] shadow-sm hover:bg-[#ffe8f3]"
                        : "bg-white/70 text-[#b46b89] hover:bg-white hover:text-[#c76790]"
                      : isActive
                      ? `${theme.accentBg} ${theme.accentTextDark}`
                      : "bg-white/5 text-white/72 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* top layout */}
        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* left big intro visual box */}
          <div
            className={`h-full overflow-hidden rounded-[34px] border backdrop-blur-xl ${
              isRofan
                ? "border-[#ffe0eb] bg-white/80 shadow-[0_24px_60px_rgba(255,192,218,0.18)]"
                : "border-white/10 bg-[#111111]/90 shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
            }`}
          >
            <div
              className={`relative h-full min-h-[560px] overflow-hidden ${
                isRofan ? "rounded-[28px] border border-[#ffe2ef]" : ""
              }`}
            >
              <Image
                src={heroImage}
                alt={`${content.label} main visual`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 55vw"
                priority
              />
              <div
                className={`absolute inset-0 ${
                  isRofan
                    ? "bg-[linear-gradient(to_top,rgba(255,250,252,0.95)_10%,rgba(255,250,252,0.35)_48%,rgba(255,250,252,0.08)_100%)]"
                    : "bg-[linear-gradient(to_top,rgba(0,0,0,0.84)_8%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.06)_100%)]"
                }`}
              />

              <div
                className={`absolute left-6 top-6 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${
                  isRofan
                    ? "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
                    : "border-white/12 bg-white/10 text-white/80"
                }`}
              >
                동영상 소개
              </div>

              <div
                className={`absolute right-10 top-10 h-24 w-24 rounded-[28px] border backdrop-blur-md ${
                  isRofan
                    ? "border-white/20 bg-white/20"
                    : "border-white/10 bg-white/10"
                }`}
              />
              <div
                className={`absolute bottom-24 right-16 h-16 w-16 rounded-full border backdrop-blur-md ${
                  isRofan
                    ? "border-white/20 bg-white/20"
                    : "border-white/10 bg-white/10"
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.28em] ${
                    isRofan ? "text-[#d17fa2]" : theme.accentText
                  }`}
                >
                  {content.hero.eyebrow}
                </p>

                <h2
                  className={`mt-3 text-4xl font-extrabold leading-tight ${
                    isRofan ? "text-[#6f4b67]" : "text-white"
                  }`}
                >
                  {content.hero.title}
                </h2>

                <p
                  className={`mt-4 max-w-2xl text-sm leading-7 ${
                    isRofan ? "text-[#8f7186]" : "text-white/75"
                  }`}
                >
                  {content.hero.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      isRofan
                        ? "bg-[linear-gradient(135deg,#ff9cc3,#ffc7df)] text-white shadow-[0_12px_24px_rgba(255,160,200,0.35)] hover:brightness-105"
                        : `${theme.accentBg} ${theme.accentTextDark} hover:opacity-90`
                    }`}
                  >
                    지금 보기
                  </button>

                  <button
                    type="button"
                    className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                      isRofan
                        ? "border-[#f6c8da] bg-white/80 text-[#bb7391] hover:bg-white"
                        : "border-white/12 bg-white/5 text-white/78 hover:bg-white/10"
                    }`}
                  >
                    더 알아보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right protagonist / story */}
          <div className="grid gap-5">
            <div
              className={`rounded-[30px] border p-6 backdrop-blur-xl ${
                isRofan
                  ? "border-[#ffe0eb] bg-white/82 shadow-[0_18px_40px_rgba(255,186,211,0.18)]"
                  : "border-white/10 bg-[#101010]/85 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.26em] ${
                  isRofan ? "text-[#cf89a7]" : theme.accentText
                }`}
              >
                주인공 소개
              </p>

              <h3
                className={`mt-3 text-2xl font-extrabold ${
                  isRofan ? "text-[#6f4b67]" : "text-white"
                }`}
              >
                {content.protagonist.name}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  isRofan ? "text-[#9a7f91]" : "text-white/55"
                }`}
              >
                {content.protagonist.role}
              </p>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isRofan ? "text-[#9a7f91]" : "text-white/58"
                }`}
              >
                {content.protagonist.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {content.protagonist.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold ${
                      isRofan
                        ? "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
                        : `border-white/10 ${theme.accentSoft} text-white`
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`rounded-[30px] border p-6 backdrop-blur-xl ${
                isRofan
                  ? "border-[#ffe0eb] bg-white/82 shadow-[0_18px_40px_rgba(255,186,211,0.18)]"
                  : "border-white/10 bg-[#101010]/85 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.26em] ${
                  isRofan ? "text-[#cf89a7]" : theme.accentText
                }`}
              >
                서사 설명
              </p>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isRofan ? "text-[#9a7f91]" : "text-white/58"
                }`}
              >
                {content.story.desc}
              </p>

              <div className="mt-5 space-y-3">
                {content.story.beats.map((beat) => (
                  <div
                    key={beat}
                    className={`rounded-[18px] border px-4 py-4 ${
                      isRofan
                        ? "border-[#f7d8e7] bg-[#fff8fc]"
                        : "border-white/8 bg-white/[0.03]"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${
                        isRofan ? "text-[#b67a95]" : "text-white"
                      }`}
                    >
                      {beat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* bottom cards */}
        <section className="pb-10 pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h2
              className={`text-3xl font-extrabold ${
                isRofan ? "text-[#7b5770]" : "text-[#433032]"
              }`}
            >
              다른 {content.label} 영상
            </h2>
            <span
              className={`text-sm font-medium ${
                isRofan ? "text-[#be8aa3]" : "text-[#8f6e73]"
              }`}
            >
              {expandedCards.length} videos
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {expandedCards.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`overflow-hidden rounded-[28px] border transition hover:-translate-y-1 ${
                  isRofan
                    ? "border-[#ffd8e6] bg-white/85 shadow-[0_18px_40px_rgba(255,170,196,0.18)] hover:shadow-[0_22px_50px_rgba(255,170,196,0.28)]"
                    : "border-[#dbc9c9] bg-white/82 shadow-[0_18px_40px_rgba(120,80,86,0.08)]"
                } ${item.layout.wrapper}`}
              >
                <div className={`relative ${item.layout.imageHeight}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 25vw"
                  />

                  <div
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                      isRofan
                        ? "border border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
                        : "bg-white/80 text-[#7f6065]"
                    }`}
                  >
                    {item.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-2xl font-extrabold ${
                      isRofan ? "text-[#6f4b67]" : "text-[#433032]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      isRofan ? "text-[#9d7891]" : "text-[#6f5f62]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}