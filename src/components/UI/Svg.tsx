import { FC } from "react";
import Icons from "@/assets/img/icons.svg";

type Props = {
  width: number | string;
  height: number | string;
  iconId: string;
  className?: string;
};

export const Svg: FC<Props> = ({ width, height, iconId, className }) => (
  <svg className={className} width={width} height={height}>
    <use href={`${Icons}#${iconId}`}></use>
  </svg>
);
