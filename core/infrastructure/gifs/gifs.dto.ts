export type GifDTO = {
  type: "gif";
  id: string;
  url: string;
  slug: string;
  username: string;
  title: string;
  rating: string;
  images: {
    original: {
      webp: string;
    };
    "480w_still": {
      webp: string;
    };
  };
  tags: string[];
};
