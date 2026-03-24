// app/continue-watching/page.tsx
import Link from "next/link";
import MediaGridCard from "@/app/_components/media-grid-card";

const imagePool = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);
const pickImage = (index: number) => imagePool[index % imagePool.length];

const continueWatchingList = [
  {
    title: "Glass Midnight",
    subtitle: "EP 07 · 74% 시청",
    progress: "74%",
    image: pickImage(1),
    href: "/watch/glass-midnight",
  },
  {
    title: "Ash Protocol",
    subtitle: "EP 03 · 48% 시청",
    progress: "48%",
    image: pickImage(2),
    href: "/watch/ash-protocol",
  },
  {
    title: "Silent Harbor",
    subtitle: "EP 05 · 63% 시청",
    progress: "63%",
    image: pickImage(3),
    href: "/watch/silent-harbor",
  },
  {
    title: "Velvet Burn",
    subtitle: "EP 02 · 29% 시청",
    progress: "29%",
    image: pickImage(4),
    href: "/watch/velvet-burn",
  },
  {
    title: "Moon Archive",
    subtitle: "EP 09 · 82% 시청",
    progress: "82%",
    image: pickImage(5),
    href: "/watch/moon-archive",
  },
  {
    title: "Night Bloom",
    subtitle: "EP 04 · 36% 시청",
    progress: "36%",
    image: pickImage(6),
    href: "/watch/night-bloom",
  },
  {
    title: "Blue Corridor",
    subtitle: "EP 08 · 67% 시청",
    progress: "67%",
    image: pickImage(7),
    href: "/watch/blue-corridor",
  },
  {
    title: "Last Passenger",
    subtitle: "EP 01 · 12% 시청",
    progress: "12%",
    image: pickImage(8),
    href: "/watch/last-passenger",
  },
];

export default function ContinueWatchingPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,122,255,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(132,42,255,0.14),transparent_25%),linear-gradient(to_bottom,rgba(9,11,18,0.94),rgba(5,6,8,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(5,6,8,1),rgba(5,6,8,0))]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-8 pt-[90px] md:px-8 md:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Continue Watching
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                계속 시청하기
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                최근에 보던 작품을 바로 이어볼 수 있는 공간이야. 진도와 최근 시청 흐름을 기준으로 다시 이어지는 구조로 정리했어.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              메인으로 돌아가기
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              최근 본 순
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              진도 높은 순
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              시리즈
            </button>
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              영화
            </button>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {continueWatchingList.map((item) => (
            <MediaGridCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              progress={item.progress}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}