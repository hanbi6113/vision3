// app/watch/[slug]/writer/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWatchTitleBySlug, watchCatalog } from "@/data/watch-data";
import WatchBackground from "@/app/watch/_components/watch-background";
import {
  getSelectedEpisode,
  hallButtonStyleByGenre,
  themeByGenre,
  writerDescByGenre,
  writerNameByGenre,
} from "@/app/watch/_lib/watch-theme";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    episode?: string;
    returnTo?: string;
  }>;
};

function getWriterWorks(slug: string, genre: string) {
  return [...watchCatalog]
    .filter((item) => item.genre === genre)
    .sort((a, b) => {
      const aScore = a.slug === slug ? 5 : 0;
      const bScore = b.slug === slug ? 5 : 0;
      return bScore - aScore;
    });
}

export default async function WriterPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const title = getWatchTitleBySlug(slug);

  if (!title) {
    notFound();
  }

  const theme = themeByGenre[title.genre];
  const hallButtonStyle = hallButtonStyleByGenre[title.genre];
  const selectedEpisode = getSelectedEpisode(
    title.episodes,
    resolvedSearchParams.episode
  );

  const originReturnTo = resolvedSearchParams.returnTo;
  const backHref =
    originReturnTo || `/watch/${title.slug}?episode=${selectedEpisode.number}`;

  const currentWriterPath = `/watch/${title.slug}/writer?episode=${
    selectedEpisode.number
  }${
    originReturnTo ? `&returnTo=${encodeURIComponent(originReturnTo)}` : ""
  }`;

  const writerName = writerNameByGenre[title.genre];
  const writerWorks = getWriterWorks(title.slug, title.genre);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <WatchBackground genre={title.genre} />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-[50px] md:px-8 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Link
            href={backHref}
            className="rounded-full border px-4 py-2 text-sm font-semibold transition"
            style={hallButtonStyle}
          >
            <span style={{ color: hallButtonStyle.color }}>← 이전으로</span>
          </Link>
        </div>

        <section className="mx-auto max-w-3xl text-center">
          <h1
            className={`text-3xl font-extrabold tracking-tight md:text-[36px] ${theme.title}`}
          >
            {writerName} 작가
          </h1>

          <p className={`mt-5 text-sm leading-7 ${theme.body}`}>
            {writerDescByGenre[title.genre]}
          </p>
        </section>

        <section className="mt-10">
          <h2 className={`mb-5 text-center text-3xl font-extrabold ${theme.title}`}>
            작가 작품
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {writerWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/watch/${work.slug}?returnTo=${encodeURIComponent(currentWriterPath)}`}
                className={`overflow-hidden rounded-[26px] border transition ${theme.shellBorder} ${theme.shell}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={work.coverImage}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.86)_100%)]" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xl font-semibold text-white">{work.title}</p>
                    <p className="mt-1 text-sm text-white/72">{work.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}