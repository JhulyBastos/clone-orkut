import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function SearchInput({ ...props }: InputProps) {
  return (
    <div className="flex items-center w-full h-12 bg-dark-70 gap-4 border-2 border-dark-40 rounded-lg px-6 py-4">
      <Search color="#B4AEAE" className="cursor-pointer" />
      <input
        type="text"
        placeholder="Pesquisar no blog"
        className="bg-transparent placeholder:text-xl w-full outline-none "
        onChange={(evento) => setInputValue(evento.target.value)}
      />
    </div>
  );
}
