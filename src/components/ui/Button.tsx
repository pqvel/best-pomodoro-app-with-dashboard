import { FC, ReactElement, ReactNode, MouseEvent } from "react";

const buttonStyles = {
  black: "bg-black text-white",
  white: "bg-white text-black border border-grayBorder",
};

type ButtonProps = {
  children: ReactNode | ReactElement;
  theme?: "black" | "white";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ children, theme = "black", onClick }) => {
  return (
    <button
      className={`rounded px-3 py-2 ${buttonStyles[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
