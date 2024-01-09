import { FC } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  closePopup?: () => void;
};

const Popup: FC<Props> = ({ children, closePopup }) => (
  <>
    <div
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10"
      onClick={closePopup}
    />
    <div
      className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-sm w-full bg-white p-5 rounded-2xl z-10"
      onClick={closePopup}
    >
      {closePopup && <button onClick={closePopup}>x</button>}
      {children}
    </div>
  </>
);

export default Popup;
