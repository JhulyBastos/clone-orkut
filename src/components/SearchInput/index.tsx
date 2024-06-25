import { Search } from "lucide-react";

interface InputProps extends ComponentProps<"input"> {}

export function SearchInput({ ...props }: InputProps) {
  return (
    <div className="flex w-4/5  bg-dark-30 gap-4 border-2 border-dark-40 rounded-lg px-6 py-4">
      <Search
        color="#E07B67"
        onClick={searchButton}
        className="cursor-pointer"
      />
      <input
        type="text"
        placeholder="Pesquisar no blog"
        className="bg-transparent placeholder:text-xl w-full text-dark-60 focus:outline-none"
        onChange={(evento) => setInputValue(evento.target.value)}
      />
    </div>
  );
}
