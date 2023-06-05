import { Gif } from "../core/models/gifs.ts";
import { tw } from "twind";
import { Image } from "./Image.tsx";

type GifGridProps = {
  gifs: Gif[];
};

export function GifGrid({ gifs }: GifGridProps) {
  return (
    <ul
      class="grid gap-base grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto place-content-stretch items-start"
      aria-live="polite"
    >
      {gifs.map((gif) => (
        <li key={gif.url}>
          <a href={`/${gif.id}/detail`} aria-label={`Link to ${gif.title}`}>
            <Image
              url={gif.url}
              preview={gif.preview}
              class="rounded-[4px] max-h-[200px] w-full object-cover object-center"
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
