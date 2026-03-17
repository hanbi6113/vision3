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

const cardOrders: Record<GenreKey, number[]> = {
  rofan: [0, 3, 1, 6, 4, 2, 7, 5, 9, 11, 8, 10],
  romance: [2, 0, 5, 1, 7, 3, 6, 4, 10, 8, 11, 9],
  sf: [1, 4, 0, 6, 3, 7, 2, 5, 11, 9, 8, 10],
  murim: [3, 0, 6, 2, 5, 1, 7, 4, 8, 10, 9, 11],
  horror: [5, 1, 6, 0, 7, 3, 4, 2, 10, 8, 11, 9],
};

const imageMixOrder = [2, 0, 3, 1, 1, 3, 0, 2, 3, 1, 2, 0];

const titleSuffixes = [
  "",
  " · The Beginning",
  " · Midnight Edit",
  " · Selected Scene",
  " · Royal Cut",
  " · Signature",
  " · Special Pick",
  " · Editor's Choice",
  " · Archive",
  " · Main Story",
  " · Visual Book",
  " · Best Moment",
];

const subtitlePool: Record<GenreKey, string[]> = {
  rofan: [
    "로판 · 무료 1화 공개",
    "로판 · 황궁 로맨스",
    "로판 · 정략 관계",
    "로판 · 지금 인기작",
    "로판 · 세계관 중심",
    "로판 · 감정선 큐레이션",
  ],
  romance: [
    "로맨스 · 무료 1화 공개",
    "로맨스 · 재회 멜로",
    "로맨스 · 감정선 중심",
    "로맨스 · 관계 서사",
    "로맨스 · 타이밍",
    "로맨스 · 여운 있는 작품",
  ],
  sf: [
    "SF · 무료 1화 공개",
    "SF · 미래 세계관",
    "SF · 기억 복원",
    "SF · 시스템 스릴",
    "SF · 인터페이스 무드",
    "SF · 차가운 서사",
  ],
  murim: [
    "무협 · 무료 1화 공개",
    "무협 · 강호 혈전",
    "무협 · 문파 비사",
    "무협 · 검객 귀환",
    "무협 · 협객 서사",
    "무협 · 무림 일전",
  ],
  horror: [
    "공포 · 무료 1화 공개",
    "공포 · 심리 스릴",
    "공포 · 폐쇄 공간",
    "공포 · 기록물 구조",
    "공포 · 이상 징후",
    "공포 · 사운드 연출",
  ],
};

export default function DiscoverShell({ activeGenre }: Props) {
  const content = discoverData[activeGenre];
  const theme = content.theme;
  const currentImages = genreImages[activeGenre];
  const heroImage = currentImages[0];

  const isRofan = activeGenre === "rofan";
  const isRomance = activeGenre === "romance";
  const isSf = activeGenre === "sf";
  const isMurim = activeGenre === "murim";
  const isHorror = activeGenre === "horror";

  const baseCards = Array.from({ length: 12 }, (_, index) => {
    const base = content.panels[index % content.panels.length];
    const suffix = titleSuffixes[index % titleSuffixes.length];
    const subtitleList = subtitlePool[activeGenre];

    return {
      ...base,
      title: `${base.title}${suffix}`,
      image: currentImages[index % currentImages.length],
      subtitle: subtitleList[index % subtitleList.length],
      episode: `EP ${String(index + 1).padStart(2, "0")}`,
    };
  });

  const expandedCards = cardOrders[activeGenre].map((cardIndex, index) => {
    const base = baseCards[cardIndex];

    return {
      ...base,
      image: currentImages[imageMixOrder[index] % currentImages.length],
    };
  });

  const heroPrimaryChipClass = isRofan
    ? "border-[#f7bfd6] bg-white/75 text-[#c76790] shadow-sm"
    : isRomance
    ? "border-[#e5d4d6] bg-white/78 text-[#b07a80] shadow-sm"
    : isSf
    ? "border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_20px_rgba(42,168,207,0.12)]"
    : isMurim
    ? "border-[#c7b78b] bg-[#f5efde]/85 text-[#7d6a3d] shadow-sm"
    : isHorror
    ? "border-[#6c3139] bg-[#120d0f]/90 text-[#d7b2b8] shadow-[0_0_18px_rgba(108,49,57,0.16)]"
    : "border-white/12 bg-white/10 text-white/80";

  const heroSecondaryChipClass = isRofan
    ? "border-[#f7cfe0] bg-[#fff7fb]/85 text-[#b96b8b]"
    : isRomance
    ? "border-[#ead8da] bg-[#fff8f8]/85 text-[#9f7378]"
    : isSf
    ? "border-[#24556d] bg-transparent text-[#9ceeff]"
    : isMurim
    ? "border-[#d4c7a5] bg-[#fbf7ec]/90 text-[#8c7340]"
    : isHorror
    ? "border-[#4f2b31] bg-[#0f0b0c]/90 text-[#d5b0b6]"
    : "border-white/12 bg-white/5 text-white/75";

  const primaryButtonClass = isRofan
    ? "bg-[linear-gradient(135deg,#ff9cc3,#ffc7df)] text-white shadow-[0_12px_24px_rgba(255,160,200,0.35)] hover:brightness-105"
    : isRomance
    ? "bg-[linear-gradient(135deg,#b7797f,#d4a29a)] text-white shadow-[0_12px_24px_rgba(183,121,127,0.22)] hover:brightness-105"
    : isSf
    ? "border border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] hover:border-[#46cfff] hover:text-[#b6f6ff]"
    : isMurim
    ? "bg-[linear-gradient(135deg,#7c8b5d,#b79c64)] text-[#1c2015] shadow-[0_12px_24px_rgba(124,139,93,0.20)] hover:brightness-105"
    : isHorror
    ? "bg-[linear-gradient(135deg,#5a141f,#9b3040)] text-white shadow-[0_12px_24px_rgba(90,20,31,0.28)] hover:brightness-105"
    : `${theme.accentBg} ${theme.accentTextDark} hover:opacity-90`;

  const secondaryButtonClass = isRofan
    ? "border-[#f6c8da] bg-white/80 text-[#bb7391] hover:bg-white"
    : isRomance
    ? "border-[#e4d2d3] bg-white/78 text-[#8d6b70] hover:bg-white"
    : isSf
    ? "border-[#214f63] bg-transparent text-[#7ea6b8] hover:border-[#2f6f8b] hover:text-[#a3d8ec]"
    : isMurim
    ? "border-[#cdbf98] bg-[#f6f1e3] text-[#7a6840] hover:bg-white"
    : isHorror
    ? "border-[#4f2b31] bg-[#0f0b0c]/90 text-[#b59b9f] hover:border-[#744149] hover:text-[#d7b9bd]"
    : "border-white/12 bg-white/5 text-white/78 hover:bg-white/10";

  const cardButtonClass = isRofan
    ? "border-[#f6c8da] bg-[#fff8fb] text-[#bb7391] hover:bg-white"
    : isRomance
    ? "border-[#e4d2d3] bg-[#faf6f6] text-[#8d6b70] hover:bg-white"
    : isSf
    ? "border-[#214f63] bg-transparent text-[#8aefff] hover:border-[#2f6f8b] hover:text-[#b6f6ff]"
    : isMurim
    ? "border-[#d0c4a1] bg-[#f8f3e7] text-[#7a6840] hover:bg-white"
    : isHorror
    ? "border-[#4d2d33] bg-[#120e0f] text-[#d0b0b5] hover:border-[#744149] hover:text-[#ebc9cf]"
    : "border-white/12 bg-white/5 text-white/80 hover:bg-white/10";

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isRofan
          ? "text-[#6f4b67]"
          : isRomance
          ? "text-[#4f3a3f]"
          : isSf
          ? "text-[#e8f7ff]"
          : isMurim
          ? "text-[#4a4330]"
          : isHorror
          ? "text-[#ede7e7]"
          : `${theme.page} ${theme.text}`
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
        ) : isRomance ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#faf6f2_0%,#f7f0eb_28%,#f8f3ef_62%,#fcfaf8_100%)]" />
            <div className="absolute left-[-80px] top-[-90px] h-[300px] w-[300px] rounded-full bg-[#ead5d8] blur-[85px]" />
            <div className="absolute right-[-70px] top-[100px] h-[260px] w-[260px] rounded-full bg-[#f1ddd4] blur-[85px]" />
            <div className="absolute bottom-[-90px] left-[16%] h-[280px] w-[280px] rounded-full bg-[#e9dede] blur-[95px]" />
            <div className="absolute bottom-[-80px] right-[14%] h-[300px] w-[300px] rounded-full bg-[#f3ebe4] blur-[95px]" />
          </>
        ) : isSf ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#061019_0%,#081722_26%,#0a1b29_58%,#07131d_100%)]" />
            <div className="absolute left-[-90px] top-[-90px] h-[340px] w-[340px] rounded-full bg-[#3ecfff]/18 blur-[110px]" />
            <div className="absolute right-[-80px] top-[80px] h-[300px] w-[300px] rounded-full bg-[#5ea9ff]/14 blur-[110px]" />
            <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#89e8ff]/10 blur-[120px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#7cd7ff]/10 blur-[120px]" />
          </>
        ) : isMurim ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f0e4_0%,#ece7d7_30%,#e6e1d2_62%,#eef0e5_100%)]" />
            <div className="absolute left-[-90px] top-[-90px] h-[320px] w-[320px] rounded-full bg-[#d9dfc3] blur-[100px]" />
            <div className="absolute right-[-80px] top-[90px] h-[280px] w-[280px] rounded-full bg-[#e7d8b4] blur-[100px]" />
            <div className="absolute bottom-[-90px] left-[14%] h-[300px] w-[300px] rounded-full bg-[#d7dfcf] blur-[110px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#efe7d3] blur-[110px]" />
          </>
        ) : isHorror ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0%,#0b090a_28%,#11090b_60%,#070707_100%)]" />
            <div className="absolute left-[-90px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#7d1f2a]/18 blur-[110px]" />
            <div className="absolute right-[-80px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#2a3034]/14 blur-[110px]" />
            <div className="absolute bottom-[-100px] left-[14%] h-[320px] w-[320px] rounded-full bg-[#4b0f17]/12 blur-[120px]" />
            <div className="absolute bottom-[-80px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#1b2225]/10 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_0.6px,transparent_0.8px)] bg-[size:14px_14px]" />
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
            isRofan
              ? "border-[#f0dbe5]"
              : isRomance
              ? "border-[#e8ddda]"
              : isSf
              ? "border-[#17384a]"
              : isMurim
              ? "border-[#d8d0ba]"
              : isHorror
              ? "border-[#2a1a1d]"
              : "border-white/10"
          }`}
        >
          <div>
            <p
              className={`text-xs font-bold uppercase tracking-[0.30em] ${
                isRofan
                  ? "text-[#d17fa2]"
                  : isRomance
                  ? "text-[#b07a80]"
                  : isSf
                  ? "text-[#8aefff]"
                  : isMurim
                  ? "text-[#8c8f5f]"
                  : isHorror
                  ? "text-[#c97882]"
                  : theme.accentText
              }`}
            >
              Vision3 Discover
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Discover
            </h1>
            <p
              className={`mt-4 max-w-3xl text-sm leading-7 sm:text-base ${
                isRofan
                  ? "text-[#8f7186]"
                  : isRomance
                  ? "text-[#7d666d]"
                  : isSf
                  ? "text-[#8fb4c3]"
                  : isMurim
                  ? "text-[#7a745f]"
                  : isHorror
                  ? "text-[#918585]"
                  : "text-white/65"
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
                      : isRomance
                      ? isActive
                        ? "border border-[#e6d2d6] bg-[#f8f1f2] text-[#a86f74] shadow-sm hover:bg-[#f3ebec]"
                        : "bg-white/72 text-[#9a7278] hover:bg-white hover:text-[#a86f74]"
                      : isSf
                      ? isActive
                        ? "border border-[#2aa8cf] bg-transparent text-[#8aefff] shadow-[0_0_24px_rgba(42,168,207,0.14)] hover:border-[#46cfff] hover:text-[#b6f6ff]"
                        : "bg-transparent text-[#7ea6b8] hover:border-[#1f5168] hover:text-[#a3d8ec]"
                      : isMurim
                      ? isActive
                        ? "border border-[#c6ba92] bg-[#f2ecdc] text-[#695c37] shadow-sm hover:bg-[#ece4d0]"
                        : "bg-white/65 text-[#84785b] hover:bg-white hover:text-[#695c37]"
                      : isHorror
                      ? isActive
                        ? "border border-[#6f2a34] bg-[#140d0f] text-[#e7c3c8] shadow-[0_0_22px_rgba(111,42,52,0.18)] hover:bg-[#1a0f12]"
                        : "bg-[#0c0a0b]/80 text-[#8f7f82] hover:bg-[#121011] hover:text-[#c3a2a8]"
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
        <section className="grid gap-6 xl:grid-cols-[1.32fr_0.68fr]">
          {/* left big intro visual box */}
          <div
            className={`h-full overflow-hidden rounded-[34px] border backdrop-blur-xl ${
              isRofan
                ? "border-[#ffe0eb] bg-white/80 shadow-[0_24px_60px_rgba(255,192,218,0.18)]"
                : isRomance
                ? "border-[#e8dcda] bg-white/82 shadow-[0_24px_60px_rgba(183,155,156,0.12)]"
                : isSf
                ? "border-[#1b4d63] bg-transparent shadow-[0_0_42px_rgba(41,175,214,0.10)]"
                : isMurim
                ? "border-[#ddd4bf] bg-[#f7f3e8]/84 shadow-[0_24px_60px_rgba(154,141,98,0.14)]"
                : isHorror
                ? "border-[#24181b] bg-[#0b0a0a]/92 shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
                : "border-white/10 bg-[#111111]/90 shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
            }`}
          >
            <div
              className={`relative h-full min-h-[560px] overflow-hidden ${
                isRofan
                  ? "rounded-[28px] border border-[#ffe2ef]"
                  : isRomance
                  ? "rounded-[28px] border border-[#e9dfdc]"
                  : isSf
                  ? "rounded-[28px] border border-[#1d5168]"
                  : isMurim
                  ? "rounded-[28px] border border-[#d6ccb5]"
                  : isHorror
                  ? "rounded-[28px] border border-[#2d1d21]"
                  : ""
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
                    : isRomance
                    ? "bg-[linear-gradient(to_top,rgba(255,250,251,0.92)_10%,rgba(255,250,251,0.28)_48%,rgba(255,250,251,0.08)_100%)]"
                    : isSf
                    ? "bg-[linear-gradient(to_top,rgba(3,10,18,0.88)_10%,rgba(3,10,18,0.28)_48%,rgba(3,10,18,0.04)_100%)]"
                    : isMurim
                    ? "bg-[linear-gradient(to_top,rgba(244,240,228,0.88)_8%,rgba(244,240,228,0.22)_45%,rgba(244,240,228,0.06)_100%)]"
                    : isHorror
                    ? "bg-[linear-gradient(to_top,rgba(7,7,7,0.92)_8%,rgba(7,7,7,0.34)_45%,rgba(7,7,7,0.10)_100%)]"
                    : "bg-[linear-gradient(to_top,rgba(0,0,0,0.84)_8%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.06)_100%)]"
                }`}
              />
              {isHorror && (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(145,20,33,0.18),transparent_28%)]" />
                </>
              )}

              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${heroPrimaryChipClass}`}
                >
                  대표 콘텐츠
                </span>
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${heroSecondaryChipClass}`}
                >
                  무료 1화 공개
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.28em] ${
                    isRofan
                      ? "text-[#d17fa2]"
                      : isRomance
                      ? "text-[#b07a80]"
                      : isSf
                      ? "text-[#8aefff]"
                      : isMurim
                      ? "text-[#8c8f5f]"
                      : isHorror
                      ? "text-[#c97882]"
                      : theme.accentText
                  }`}
                >
                  {content.hero.eyebrow}
                </p>

                <h2
                  className={`mt-3 text-4xl font-extrabold leading-tight ${
                    isRofan
                      ? "text-[#6f4b67]"
                      : isRomance
                      ? "text-[#4f3a3f]"
                      : isSf
                      ? "text-[#e8f7ff]"
                      : isMurim
                      ? "text-[#413a2c]"
                      : isHorror
                      ? "text-[#f1ebeb]"
                      : "text-white"
                  }`}
                >
                  {content.hero.title}
                </h2>

                <p
                  className={`mt-4 max-w-2xl text-sm leading-7 ${
                    isRofan
                      ? "text-[#8f7186]"
                      : isRomance
                      ? "text-[#746166]"
                      : isSf
                      ? "text-[#8fb4c3]"
                      : isMurim
                      ? "text-[#716958]"
                      : isHorror
                      ? "text-[#9d8f91]"
                      : "text-white/75"
                  }`}
                >
                  {content.hero.desc}
                </p>

                <div
                  className={`mt-5 rounded-[20px] border px-4 py-4 text-sm ${
                    isRofan
                      ? "border-[#f6d7e4] bg-[#fff9fc] text-[#a56f86]"
                      : isRomance
                      ? "border-[#e8d7d8] bg-[#fcf8f8] text-[#8e6d72]"
                      : isSf
                      ? "border-[#214f63] bg-transparent text-[#9ceeff]"
                      : isMurim
                      ? "border-[#d5c7a4] bg-[#fbf7ec] text-[#7a6840]"
                      : isHorror
                      ? "border-[#382126] bg-[#100c0d] text-[#ccb2b6]"
                      : "border-white/12 bg-white/5 text-white/75"
                  }`}
                >
                  무료로 공개된 1화를 먼저 보고, 지금 가장 많이 주목받는 대표 콘텐츠를 확인해 보세요.
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${primaryButtonClass}`}
                  >
                    지금 보기
                  </button>

                  <button
                    type="button"
                    className={`rounded-full border px-5 py-3 text-sm font-medium transition ${secondaryButtonClass}`}
                  >
                    1화 무료로 보러 가기
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
                  : isRomance
                  ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                  : isSf
                  ? "border-[#1b4d63] bg-transparent shadow-[0_0_30px_rgba(41,175,214,0.08)]"
                  : isMurim
                  ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                  : isHorror
                  ? "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
                  : "border-white/10 bg-[#101010]/85 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.26em] ${
                  isRofan
                    ? "text-[#cf89a7]"
                    : isRomance
                    ? "text-[#b07a80]"
                    : isSf
                    ? "text-[#8aefff]"
                    : isMurim
                    ? "text-[#8c8f5f]"
                    : isHorror
                    ? "text-[#c97882]"
                    : theme.accentText
                }`}
              >
                주인공 소개
              </p>

              <h3
                className={`mt-3 text-2xl font-extrabold ${
                  isRofan
                    ? "text-[#6f4b67]"
                    : isRomance
                    ? "text-[#4f3a3f]"
                    : isSf
                    ? "text-[#e8f7ff]"
                    : isMurim
                    ? "text-[#413a2c]"
                    : isHorror
                    ? "text-[#f1ebeb]"
                    : "text-white"
                }`}
              >
                {content.protagonist.name}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  isRofan
                    ? "text-[#9a7f91]"
                    : isRomance
                    ? "text-[#746166]"
                    : isSf
                    ? "text-[#8fb4c3]"
                    : isMurim
                    ? "text-[#716958]"
                    : isHorror
                    ? "text-[#998c8f]"
                    : "text-white/55"
                }`}
              >
                {content.protagonist.role}
              </p>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isRofan
                    ? "text-[#9a7f91]"
                    : isRomance
                    ? "text-[#746166]"
                    : isSf
                    ? "text-[#8fb4c3]"
                    : isMurim
                    ? "text-[#716958]"
                    : isHorror
                    ? "text-[#998c8f]"
                    : "text-white/58"
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
                        : isRomance
                        ? "border-[#e5d6d6] bg-[#faf7f6] text-[#9b7478]"
                        : isSf
                        ? "border-[#214f63] bg-transparent text-[#8aefff]"
                        : isMurim
                        ? "border-[#d0c4a1] bg-[#f4efe0] text-[#736543]"
                        : isHorror
                        ? "border-[#4d2d33] bg-[#120e0f] text-[#c8a7ac]"
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
                  : isRomance
                  ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                  : isSf
                  ? "border-[#1b4d63] bg-transparent shadow-[0_0_30px_rgba(41,175,214,0.08)]"
                  : isMurim
                  ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                  : isHorror
                  ? "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
                  : "border-white/10 bg-[#101010]/85 shadow-[0_18px_40px_rgba(0,0,0,0.30)]"
              }`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.26em] ${
                  isRofan
                    ? "text-[#cf89a7]"
                    : isRomance
                    ? "text-[#b07a80]"
                    : isSf
                    ? "text-[#8aefff]"
                    : isMurim
                    ? "text-[#8c8f5f]"
                    : isHorror
                    ? "text-[#c97882]"
                    : theme.accentText
                }`}
              >
                서사 설명
              </p>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isRofan
                    ? "text-[#9a7f91]"
                    : isRomance
                    ? "text-[#746166]"
                    : isSf
                    ? "text-[#8fb4c3]"
                    : isMurim
                    ? "text-[#716958]"
                    : isHorror
                    ? "text-[#998c8f]"
                    : "text-white/58"
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
                        : isRomance
                        ? "border-[#eadede] bg-[#faf7f5]"
                        : isSf
                        ? "border-[#214f63] bg-transparent"
                        : isMurim
                        ? "border-[#d9cfb7] bg-[#f6f1e4]"
                        : isHorror
                        ? "border-[#2c1c20] bg-[#120e0f]"
                        : "border-white/8 bg-white/[0.03]"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${
                        isRofan
                          ? "text-[#b67a95]"
                          : isRomance
                          ? "text-[#9b7478]"
                          : isSf
                          ? "text-[#a3ebff]"
                          : isMurim
                          ? "text-[#7b6a42]"
                          : isHorror
                          ? "text-[#d7b6bb]"
                          : "text-white"
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
                isRofan
                  ? "text-[#7b5770]"
                  : isRomance
                  ? "text-[#4f3a3f]"
                  : isSf
                  ? "text-[#e8f7ff]"
                  : isMurim
                  ? "text-[#413a2c]"
                  : isHorror
                  ? "text-[#f1ebeb]"
                  : "text-[#433032]"
              }`}
            >
              지금 인기 콘텐츠
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {expandedCards.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`overflow-hidden rounded-[28px] border ${
                  isRofan
                    ? "border-[#f1d6de] bg-white/82 shadow-[0_18px_40px_rgba(192,116,142,0.08)]"
                    : isRomance
                    ? "border-[#e7d9d7] bg-white/84 shadow-[0_18px_40px_rgba(170,140,140,0.08)]"
                    : isSf
                    ? "border-[#1b4d63] bg-transparent shadow-[0_0_28px_rgba(41,175,214,0.07)]"
                    : isMurim
                    ? "border-[#ddd4bf] bg-[#f7f3e8]/86 shadow-[0_18px_40px_rgba(154,141,98,0.10)]"
                    : isHorror
                    ? "border-[#24181b] bg-[#0d0b0c]/92 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                    : "border-[#dbc9c9] bg-white/82 shadow-[0_18px_40px_rgba(120,80,86,0.08)]"
                }`}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {isSf && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,18,0.72)_8%,rgba(3,10,18,0.12)_45%,rgba(3,10,18,0.02)_100%)]" />
                  )}
                  {isMurim && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(244,240,228,0.76)_8%,rgba(244,240,228,0.14)_45%,rgba(244,240,228,0.04)_100%)]" />
                  )}
                  {isHorror && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,7,0.78)_8%,rgba(7,7,7,0.20)_45%,rgba(7,7,7,0.04)_100%)]" />
                  )}

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    무료 1화
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className={`text-sm font-semibold ${
                      isRofan
                        ? "text-[#c07a92]"
                        : isRomance
                        ? "text-[#b07a80]"
                        : isSf
                        ? "text-[#8aefff]"
                        : isMurim
                        ? "text-[#8c8f5f]"
                        : isHorror
                        ? "text-[#c97882]"
                        : "text-[#9f757a]"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <h3
                    className={`mt-2 text-2xl font-extrabold ${
                      isRofan
                        ? "text-[#563b41]"
                        : isRomance
                        ? "text-[#4f3a3f]"
                        : isSf
                        ? "text-[#e8f7ff]"
                        : isMurim
                        ? "text-[#413a2c]"
                        : isHorror
                        ? "text-[#f1ebeb]"
                        : "text-[#433032]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      isRofan
                        ? "text-[#79666b]"
                        : isRomance
                        ? "text-[#746166]"
                        : isSf
                        ? "text-[#8fb4c3]"
                        : isMurim
                        ? "text-[#716958]"
                        : isHorror
                        ? "text-[#968a8c]"
                        : "text-[#6f5f62]"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="mt-5">
                    <button
                      type="button"
                      className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${cardButtonClass}`}
                    >
                      1화 무료로 보기
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}