import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-brand-color text-dark-40",
    outline: "bg-dark-60 text-brand-color",
  };
  return (
    <button
      {...props}
      className={`${variants[variant]} flex items-center justify-center w-[336px] h-[47px] p-4 rounded-lg font-semibold`}
    >
      {children}
    </button>
  );
}
