// components/movies/movies-shell.tsx
import MediaShell from "@/app/components/media/media-shell";
import type { GenreKey } from "@/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

export default function MoviesShell({ activeGenre }: Props) {
  return <MediaShell activeGenre={activeGenre} mode="movies" />;
}