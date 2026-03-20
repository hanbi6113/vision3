// app/ott/ott-3/[genre]/page.tsx
import { notFound } from "next/navigation";
import OttThreeShell from "@/app/components/ott/ott-3-shell";
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

export default async function OttThreeGenrePage({ params }: PageProps) {
  const { genre } = await params;

  if (!isGenreKey(genre)) {
    notFound();
  }

  return <OttThreeShell activeGenre={genre} />;
}