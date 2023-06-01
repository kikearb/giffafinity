import { useState } from "preact/hooks";

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
    <div>
      <input type="text" onInput={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
