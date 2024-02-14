import { useState } from "preact/hooks";
import { Image } from "../components/Image.tsx";

type SearchBarProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleSubmit = () => {
    onChange(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target?.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      handleSubmit();
    }
  };

  return (
    <form class="w-full flex rounded-[8px] overflow-hidden" role="search">
      <input
        type="text"
        name="Buscador"
        placeholder="¿Qué quieres buscar?"
        class="w-full p-mini "
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        class="bg-lightGreen p-mini"
        onClick={handleSubmit}
        aria-label="buscar"
      >
        <Image url="/lupa.svg" width="30" height="30" alt="" />
      </button>
    </form>
  );
}
