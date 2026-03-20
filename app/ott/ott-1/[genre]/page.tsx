// app/ott/ott-1/[genre]/page.tsx
import { notFound } from "next/navigation";
import OttOneShell from "@/app/components/ott/ott-1-shell";
import { genreKeys, isGenreKey } from "@/data/discover-data";

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

export default async function OttOneGenrePage({ params }: PageProps) {
  const { genre } = await params;

  if (!isGenreKey(genre)) {
    notFound();
  }

  return <OttOneShell activeGenre={genre} />;
}