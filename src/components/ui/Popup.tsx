import { FC } from "react";
import { createPortal } from "react-dom";
import Svg from "./Svg";

const popupSizes: { small: string; medium: string; large: string } = {
  small: "max-w-sm",
  medium: "max-w-3xl",
  large: "max-w-5xl ",
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
  size?: "small" | "medium" | "large";
  className?: string;
  closePopup?: () => void;
};

const Popup: FC<Props> = ({
  children,
  size = popupSizes.medium,
  className,
  closePopup,
}) => {
  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10"
        onClick={closePopup}
      />
      <div
        className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-32px)] bg-white p-5 rounded-lg z-10 ${popupSizes[size]} ${className}`}
      >
        {closePopup && (
          <button
            className="absolute right-0 top-0 p-2 cursor-pointer"
            onClick={closePopup}
          >
            <Svg width={20} height={20} iconId="icon-close" />
          </button>
        )}
        {children}
      </div>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

export default Popup;
