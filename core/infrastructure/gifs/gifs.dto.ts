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
      url: string;
    };
    "480w_still": {
      url: string;
    };
  };
};
