type ImageProps = {
  preview?: string;
  url: string;
  alt?: string;
  class?: string;
};

export function Image(props: ImageProps) {
  return (
    <picture>
      {!!props.preview && (
        <source srcSet={props.preview} media="(prefers-reduced-motion)" />
      )}

      <img src={props.url} alt={props.alt} class={props.class} loading="lazy" />
    </picture>
  );
}
