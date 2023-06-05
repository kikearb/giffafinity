type ImageProps = {
  preview?: string;
  url: string;
  alt?: string;
  class?: string;
  width?: string;
  height?: string;
};

export function Image(props: ImageProps) {
  return (
    <picture>
      {!!props.preview && (
        <source srcSet={props.preview} media="(prefers-reduced-motion)" />
      )}

      <img
        src={props.url}
        alt={props.alt}
        class={props.class}
        loading="lazy"
        width={props.width ?? "200"}
        height={props.height ?? "200"}
      />
    </picture>
  );
}
