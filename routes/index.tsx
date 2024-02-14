import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import GifEngine from "../islands/GifEngine.tsx";
import { gifsService } from "../core/services/gifs/gifs.service.ts";
import { Gif } from "../core/models/gifs.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const gifsData = await gifsService.getTrendings();

    return ctx.render(gifsData);
  },
};

export default function Home({ data }: { data: Gif[] }) {
  return (
    <>
      <Head>
        <title>Guifaffinity</title>
        <meta name="description" content="Gif searcher with Gipphy API" />
      </Head>
      <section>
        <GifEngine gifs={data} />
      </section>
    </>
  );
}
