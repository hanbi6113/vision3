// app/rankings/page.tsx
import Link from "next/link";

const imagePool = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);
const pickImage = (index: number) => imagePool[index % imagePool.length];

const rankingList = [
  { rank: 1, title: "Glass Midnight", subtitle: "Neo-noir Series", image: pickImage(5), href: "/watch/glass-midnight" },
  { rank: 2, title: "Ash Protocol", subtitle: "Sci-Fi Thriller", image: pickImage(6), href: "/watch/ash-protocol" },
  { rank: 3, title: "Silent Harbor", subtitle: "Mystery Film", image: pickImage(7), href: "/watch/silent-harbor" },
  { rank: 4, title: "Velvet Burn", subtitle: "Original Drama", image: pickImage(8), href: "/watch/velvet-burn" },
  { rank: 5, title: "Moon Archive", subtitle: "SF Drama", image: pickImage(9), href: "/watch/moon-archive" },
  { rank: 6, title: "Night Bloom", subtitle: "Original Series", image: pickImage(10), href: "/watch/night-bloom" },
  { rank: 7, title: "Crimson Shore", subtitle: "Thriller Film", image: pickImage(11), href: "/watch/crimson-shore" },
  { rank: 8, title: "After Silence", subtitle: "Mystery Drama", image: pickImage(12), href: "/watch/after-silence" },
  { rank: 9, title: "Blue Corridor", subtitle: "Sci-Fi Series", image: pickImage(13), href: "/watch/blue-corridor" },
  { rank: 10, title: "Last Passenger", subtitle: "Drama Film", image: pickImage(14), href: "/watch/last-passenger" },
  { rank: 11, title: "Neon Chamber", subtitle: "Action Series", image: pickImage(15), href: "/watch/neon-chamber" },
  { rank: 12, title: "Crown of Mist", subtitle: "Fantasy Drama", image: pickImage(16), href: "/watch/crown-of-mist" },
];

function RankingPosterOnlyCard({
  rank,
  title,
  image,
  href,
}: {
  rank: number;
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.10)_42%,rgba(0,0,0,0.48)_100%)]" />
        <div className="absolute left-4 top-3 text-6xl font-black text-white/90">
          {rank}
        </div>
      </div>
    </Link>
  );
}

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,122,255,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(132,42,255,0.14),transparent_25%),linear-gradient(to_bottom,rgba(9,11,18,0.94),rgba(5,6,8,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(5,6,8,1),rgba(5,6,8,0))]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-8 pt-[90px] md:px-8 md:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Rankings
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                인기순위
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                지금 Vision3에서 가장 많이 보고 있는 작품들을 모은 랭킹 페이지야. 메인 Top 10보다 더 넓게 보고 바로 재생할 수 있게 확장했어.
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
              전체
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
            <button
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
            >
              오늘 기준
            </button>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {rankingList.map((item) => (
            <RankingPosterOnlyCard
              key={item.rank}
              rank={item.rank}
              title={item.title}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}