import { gifsRepository } from "../../infrastructure/gifs/gifs.repository.ts";

const getTrendings = gifsRepository.getTrendings;

const getRelated = gifsRepository.getRelated;

const getGifById = gifsRepository.getGifById;

export const gifsService = {
  getTrendings,
  getRelated,
  getGifById,
};
