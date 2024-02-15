import { FC } from "react";
import { createPortal } from "react-dom";
import { Svg } from "@/components/UI";

export const enum PopupType {
  large = "max-w-5xl ",
  medium = "max-w-3xl",
  small = "max-w-sm",
}
type Props = {
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[];
  closePopup?: () => void;
  type?: PopupType;
};

export const Popup: FC<Props> = ({
  isOpen,
  children,
  closePopup,
  type = PopupType.medium,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10"
        onClick={closePopup}
      />
      <div
        className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-32px)] bg-white p-5 rounded-lg z-10 ${type}`}
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
