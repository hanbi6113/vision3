// app/ott/ott-2/[genre]/page.tsx
import { notFound } from "next/navigation";
import OttTwoShell from "@/app/components/ott/ott-2-shell";
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

export default async function OttTwoGenrePage({ params }: PageProps) {
  const { genre } = await params;

  if (!isGenreKey(genre)) {
    notFound();
  }

  return <OttTwoShell activeGenre={genre} />;
}