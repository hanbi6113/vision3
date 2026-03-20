// app/series/[genre]/page.tsx
import { notFound } from "next/navigation";
import SeriesShell from "@/app/components/series/series-shell";
import type { GenreKey } from "@/data/discover-data";

const validGenres: GenreKey[] = ["rofan", "romance", "sf", "murim", "horror"];

type PageProps = {
  params: Promise<{
    genre: string;
  }>;
};

export default async function SeriesGenrePage({ params }: PageProps) {
  const { genre } = await params;
  const parsedGenre = genre as GenreKey;

  if (!validGenres.includes(parsedGenre)) {
    notFound();
  }

  return <SeriesShell activeGenre={parsedGenre} />;
}