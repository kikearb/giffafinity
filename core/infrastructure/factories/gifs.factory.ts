import { Gif } from "../../models/gifs.ts";
import { GifDTO } from "../gifs/gifs.dto.ts";

const buildIndividualGif = (rawGif: GifDTO): Gif => {
  return {
    id: rawGif.id,
    url: rawGif.images?.original.url,
    title: rawGif.title,
    preview: rawGif.images?.["480w_still"].url,
    ...(!!rawGif.tags && { tags: rawGif.tags }),
  };
};

const buildGifs = (rawGifs: GifDTO[]): Gif[] => {
  return rawGifs.map(buildIndividualGif);
};

export const gifsFactory = {
  buildGifs,
  buildIndividualGif,
};
