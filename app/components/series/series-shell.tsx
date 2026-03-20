// components/series/series-shell.tsx
import MediaShell from "@/app/components/media/media-shell";
import type { GenreKey } from "@/data/discover-data";

type Props = {
  activeGenre: GenreKey;
};

export default function SeriesShell({ activeGenre }: Props) {
  return <MediaShell activeGenre={activeGenre} mode="series" />;
}