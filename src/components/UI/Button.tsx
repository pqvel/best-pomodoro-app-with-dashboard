import { FC, ReactElement, ReactNode, MouseEvent } from "react";

const buttonStyles = {
  black: "bg-black text-white border border-black",
  white: "bg-white text-black border border-grayBorder",
};

type ButtonProps = {
  children: ReactNode | ReactElement;
  disabled?: boolean;
  theme?: "black" | "white";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  theme = "black",
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`rounded px-3 py-1 ${buttonStyles[theme]}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
