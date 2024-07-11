import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// export const TextContainer: FC<ChildrenProps> = ({ children }) => {
//   return <div className="w-full max-w-5xl mx-auto">{children}</div>;
// };

export const Block: FC<Props> = ({ children, className = "" }) => (
  <div className={clsx("p-5 bg-white rounded-xl", className)}>{children}</div>
);

export const Container: FC<Props> = ({ children, className = "" }) => (
  <div className={clsx(" mx-auto w-full max-w-5xl px-3 lg:px-5", className)}>
    {children}
  </div>
);
