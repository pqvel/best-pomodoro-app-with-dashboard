import { FC } from "react";

type Props = {
  confirmHandler: () => void;
};

const ConfirmPopup: FC<Props> = ({ confirmHandler }) => (
  <>
    <div></div>
    <div>
      <h4></h4>
      <p></p>
      <div>
        <button onClick={confirmHandler}>Подтвердить</button>
        <button>Отмена</button>
      </div>
    </div>
  </>
);

export default ConfirmPopup;
