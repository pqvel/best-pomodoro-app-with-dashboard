/**
 * Popup component that renders a modal popup overlay.
 *
 * Accepts children content to display in the popup, a closePopup
 * callback to close the popup, and a PopupType to control the max
 * width.
 */
import { FC } from "react";

export const enum PopupType {
  large = "max-w-5xl ",
  medium = "max-w-3xl",
  small = "max-w-sm",
}

/**
 * Props interface for the Popup component.
 *
 * @param children - The content to render inside the popup. Can be a string, JSX element, or array of JSX elements.
 * @param closePopup - Optional callback function to close the popup.
 * @param type - Optional popup type to control the max width. Defaults to PopupType.medium.
 */
type Props = {
  children: string | JSX.Element | JSX.Element[];
  closePopup?: () => void;
  type?: PopupType;
};

const Popup: FC<Props> = ({
  children,
  closePopup,
  type = PopupType.medium,
}) => (
  <>
    <div
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10"
      onClick={closePopup}
    />
    <div
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full bg-white p-5 rounded-2xl z-10 ${type}`}
      onClick={closePopup}
    >
      {closePopup && <button onClick={closePopup}>x</button>}
      {children}
    </div>
  </>
);

export default Popup;
