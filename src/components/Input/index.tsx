import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-dark-60 w-[336px] h-[51px] p-4 rounded-lg"
    />
  );
}
