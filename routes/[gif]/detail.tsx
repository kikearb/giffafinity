import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { GifGrid } from "../../components/GifGrid.tsx";
import { Image } from "../../components/Image.tsx";
import { Tag } from "../../components/Tag.tsx";
import { Gif } from "../../core/models/gifs.ts";
import { gifsService } from "../../core/services/gifs/gifs.service.ts";
import { tagsService } from "../../core/services/tags/tags.service.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { gif } = ctx.params;
    const gifData = await gifsService.getGifById(gif);
    const relatedData = await gifsService.getRelated(gif);

    const tags = tagsService.getGifsTags(relatedData);

    return ctx.render({ gif: gifData, related: relatedData, tags });
  },
};

export default function Detail({
  data,
}: {
  data: { gif: Gif; related: Gif[]; tags: (string | undefined)[] };
}) {
  const { gif, related, tags } = data;

  return (
    <>
      <Head>
        <title>{gif.title}</title>
      </Head>
      <section>
        <h2 class="text-white font-bold text-h4 md:text-h3 lg:text-h2 mb-medium">
          {gif.title}
        </h2>
        <div class="flex gap-base mb-xlarge items-center flex-col md:flex-row">
          <div class="flex-shrink-0 grow-0 md:max-w-[50%] md:w-[50%] md:h-auto">
            <Image
              preview={gif.preview}
              url={gif.url}
              alt={gif.title}
              class="rounded-[4px]"
              width="100%"
              height="auto"
            />
          </div>
          <div class="flex gap-small flex-wrap">
            {tags.slice(0, 10).map((tag) => !!tag && <Tag name={tag} />)}
          </div>
        </div>
        <h3 class="text-white font-bold text-base md:text-h4 lg:text-h3 mb-medium">
          Si te gustó este guif te gustarán...
        </h3>

        <GifGrid gifs={related} />
      </section>
    </>
  );
}
