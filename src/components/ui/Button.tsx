import {
  FC,
  ReactElement,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
  LegacyRef,
} from "react";

const buttonStyles = {
  black: "bg-slate-950 text-white hover:bg-black",
  white: "border border-gray-300 bg-slate-50 hover:bg-slate-100 text-black",
  transparent: "bg-none text-black  hover:bg-gray-200",
  gray: "bg-gray-200 text-gray-500 hover:text-gray-600 hover:bg-gray-300",
};

type ButtonProps = {
  children: ReactNode | ReactElement;
  disabled?: boolean;
  className?: string;
  theme?: "black" | "white" | "transparent" | "gray";
  iconId?: string;
  ref?: LegacyRef<HTMLButtonElement>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  theme = "black",
  ref = null,
  onClick,
  onKeyDown,
}) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer rounded ${buttonStyles[theme]} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      ref={ref}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
