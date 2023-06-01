import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
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
  data: { gif: Gif; relatedData: any };
}) {
  const { gif } = data;

  return (
    <>
      <Head>
        <title>{gif.title}</title>
      </Head>
      <section>{gif.title}</section>
    </>
  );
}
