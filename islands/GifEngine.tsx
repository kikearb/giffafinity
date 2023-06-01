import { useState, useEffect } from "preact/hooks";
import { Image } from "../components/Image.tsx";
import { Gif } from "../core/models/gifs.ts";
import SearchBar from "./SearchBar.tsx";

type GifListProps = {
  gifs: Gif[];
};

export default function GifEngine({ gifs }: GifListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <div class="mb-medium">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
      <h2 class="flex items-center gap-small mb-medium">
        <img src="/arrow.svg" class="w-[24px] w-[32px]" alt="" />

        <span class="text-white font-bold text-h4 md:text-h3 lg:text-h2">
          Los guif más trendings del momento
        </span>
      </h2>

      <ul
        class="grid gap-base grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto"
        aria-live="polite"
      >
        {gifs
          ?.filter((gif) =>
            searchTerm.length > 0
              ? gif.title.toLowerCase().includes(searchTerm)
              : !!gif
          )
          .map((gif) => (
            <li key={gif.url}>
              <a href={`/${gif.id}/detail`} aria-label={`Link to ${gif.title}`}>
                <Image
                  url={gif.url}
                  preview={gif.preview}
                  class="rounded-[4px] motion-reduce:animate-none"
                  alt=""
                />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
