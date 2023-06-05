type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps) {
  return (
    <span class="rounded-full bg-semiblack text-h4 text-white px-base py-tiny">
      #{name}
    </span>
  );
}
