import { gifsFactory } from "../factories/gifs.factory.ts";

const API_KEY = "p7yQKvPnKhFotkCZdfb7XSbO6bFgdKHn";

const TRENDING_ENDPOINT = "https://api.giphy.com/v1/gifs/trending";
const RELATED_ENDPOINT = "https://api.giphy.com/v1/gifs/related";
const DATA_ENDPOINT = "https://api.giphy.com/v1/gifs";

const getTrendings = async () => {
  const response = await fetch(`${TRENDING_ENDPOINT}?api_key=${API_KEY}`, {
    cache: "reload",
  });

  try {
    const { data } = await response.json();

    return gifsFactory.buildGifs(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getRelated = async (id: string) => {
  const response = await fetch(
    `${RELATED_ENDPOINT}?gif_id=${id}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`,
    {
      cache: "reload",
    }
  );

  try {
    const { data } = await response.json();

    return gifsFactory.buildGifs(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getGifById = async (id: string) => {
  const response = await fetch(`${DATA_ENDPOINT}/${id}?api_key=${API_KEY}`, {
    cache: "reload",
  });

  try {
    const { data } = await response.json();

    return gifsFactory.buildIndividualGif(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const gifsRepository = {
  getTrendings,
  getRelated,
  getGifById,
};
