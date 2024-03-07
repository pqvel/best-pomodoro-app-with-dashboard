import { FC } from "react";
import { Popup, Button, Svg } from "../ui/";

type Props = {
  title: string;
  descr: string;
  iconId: string;
  confirmHandler: () => void;
  closeHandler: () => void;
};

const ConfirmPopup: FC<Props> = ({
  title,
  descr,
  iconId,
  confirmHandler,
  closeHandler,
}) => (
  <Popup
    className="flex items-center flex-col text-center"
    closePopup={closeHandler}
    size="small"
  >
    <Svg className="mb-4" iconId={iconId} width={60} height={60} />
    <div className="text-lg font-semibold mb-2">{title}</div>
    <div className="mb-6">{descr}</div>
    <div className="flex items-center justify-center w-full">
      <Button className="px-2 py-1 mr-3" onClick={closeHandler} theme="white">
        Отмена
      </Button>
      <Button className="px-2 py-1 mr-3" onClick={confirmHandler} theme="black">
        Подтвердить
      </Button>
    </div>
  </Popup>
);

export default ConfirmPopup;
