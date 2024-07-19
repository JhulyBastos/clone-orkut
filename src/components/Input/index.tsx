import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-dark-60 w-[336px] h-[51px] p-4 rounded-lg"
    />
  );
}

export const InputProfile = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="bg-dark-60 w-3/4 h-12 p-4 rounded-lg outline-none"
      />
    );
  }
);
