// app/discover/[genre]/page.tsx
import { notFound } from "next/navigation";
import DiscoverShell from "@/app/components/discover/discover-shell";
import {
  genreKeys,
  isGenreKey,
} from "@/data/discover-data";

type PageProps = {
  params: Promise<{
    genre: string;
  }>;
};

export function generateStaticParams() {
  return genreKeys.map((genre) => ({
    genre,
  }));
}

export default async function DiscoverGenrePage({ params }: PageProps) {
  const { genre } = await params;

  if (!isGenreKey(genre)) {
    notFound();
  }

  return <DiscoverShell activeGenre={genre} />;
}