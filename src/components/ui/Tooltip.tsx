import { FC } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  message: string;
  className?: string;
};

const Tooltip: FC<Props> = ({ children, message, className = "" }) => (
  <div className={`group relative inline-flex max-w-full w-auto ${className}`}>
    {children}
    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 -translate-y-full scale-0 transition-all delay-150 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 max-w-full w-full text-center">
      {message}
    </span>
  </div>
);

export default Tooltip;
