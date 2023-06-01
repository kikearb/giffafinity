import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { GifGrid } from "../../components/GifGrid.tsx";
import { Image } from "../../components/Image.tsx";
import { Gif } from "../../core/models/gifs.ts";
import { gifsService } from "../../core/services/gifs/gifs.service.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { gif } = ctx.params;
    const gifData = await gifsService.getGifById(gif);
    const relatedData = await gifsService.getRelated(gif);

    return ctx.render({ gif: gifData, related: relatedData });
  },
};

export default function Detail({
  data,
}: {
  data: { gif: Gif; related: Gif[] };
}) {
  const { gif, related } = data;

  return (
    <>
      <Head>
        <title>{gif.title}</title>
      </Head>
      <section>
        <h2 class="text-white font-bold text-h4 md:text-h3 lg:text-h2 mb-medium">
          {gif.title}
        </h2>
        <div class="mb-xlarge">
          <Image
            preview={gif.preview}
            url={gif.url}
            alt={gif.title}
            class="rounded-[4px]"
          />
        </div>
        <h3 class="text-white font-bold text-base md:text-h4 lg:text-h3 mb-medium">
          Si te gustó este guif te gustarán...
        </h3>

        <GifGrid gifs={related} />
      </section>
    </>
  );
}
