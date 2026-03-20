// app/movies/[genre]/page.tsx
import { notFound } from "next/navigation";
import MoviesShell from "@/app/components/movies/movies-shell";
import type { GenreKey } from "@/data/discover-data";

const validGenres: GenreKey[] = ["rofan", "romance", "sf", "murim", "horror"];

type PageProps = {
  params: Promise<{
    genre: string;
  }>;
};

export default async function MoviesGenrePage({ params }: PageProps) {
  const { genre } = await params;
  const parsedGenre = genre as GenreKey;

  if (!validGenres.includes(parsedGenre)) {
    notFound();
  }

  return <MoviesShell activeGenre={parsedGenre} />;
}