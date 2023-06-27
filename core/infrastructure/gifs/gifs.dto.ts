export type GifDTO = {
  type: "gif";
  id: string;
  url: string;
  slug: string;
  username: string;
  title: string;
  rating: string;
  images: {
    preview_webp: {
      url: string;
    };
    "480w_still": {
      url: string;
    };
  };
  tags: string[];
};
