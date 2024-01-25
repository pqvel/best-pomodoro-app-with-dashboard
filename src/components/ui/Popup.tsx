import { FC, RefObject } from "react";
import Icons from "../../assets/img/icons.svg";
import { createPortal } from "react-dom";

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
  ref?: RefObject<HTMLElement>;
};

const Popup: FC<Props> = ({
  isOpen,
  children,
  closePopup,
  type = PopupType.medium,
  ref = null,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10"
        onClick={closePopup}
      />
      <div
        ref={ref as RefObject<HTMLElement>}
        className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-32px)] bg-white p-5 rounded-lg z-10 ${type}`}
      >
        {closePopup && (
          <button
            className="absolute right-0 top-0 p-2 cursor-pointer"
            onClick={closePopup}
          >
            <svg width={20} height={20}>
              <use href={`${Icons}#icon-close`} />
            </svg>
          </button>
        )}
        {children}
      </div>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

export default Popup;
