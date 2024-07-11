import { FC, ReactNode } from "react";

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

const titleStyles = {
  1: "text-2xl",
  2: "text-2xl",
  3: "text-2xl",
  4: "text-2xl",
  5: "text-2xl",
  6: "text-2xl",
};

const Title: FC<TitleProps> = ({ level, children }) => {
  const TagName = `h${level}`;
  return <TagName>{children}</TagName>;
};
