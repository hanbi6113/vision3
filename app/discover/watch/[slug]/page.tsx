// app/discover/watch/[slug]/page.tsx
import { notFound } from "next/navigation";
import DiscoverWatchShell from "@/app/components/discover/discover-watch-shell";
import {
  discoverFreeSlugByGenre,
  getWatchTitleBySlug,
} from "@/data/watch-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    returnTo?: string;
  }>;
};

export default async function DiscoverWatchPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const title = getWatchTitleBySlug(slug);

  if (!title) {
    notFound();
  }

  const allowedSlugs = discoverFreeSlugByGenre[title.genre] ?? [];
  const isSeriesDiscoverTitle =
    allowedSlugs.includes(title.slug) && title.mode === "series";

  if (!isSeriesDiscoverTitle) {
    notFound();
  }

  const returnTo = resolvedSearchParams.returnTo || `/discover/${title.genre}`;

  return <DiscoverWatchShell title={title} returnTo={returnTo} />;
}