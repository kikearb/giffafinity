import { Gif } from "../../models/gifs.ts";

const getGifsTags = (gifs: Gif[]): (string | undefined)[] => {
  const gifsTags = gifs.map((gif) => gif.tags);

  const flattenArray = gifsTags.flat();
  return [...new Set(flattenArray)];
};

export const tagsService = {
  getGifsTags,
};
