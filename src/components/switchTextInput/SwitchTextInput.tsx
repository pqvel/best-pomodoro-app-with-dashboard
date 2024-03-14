import { FC, useRef, useState, KeyboardEvent } from "react";
import { Input, Button } from "../ui";
import { useInput } from "../../core/hooks/useInput";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  currentValue?: string;
  editHandler: (value: string) => void;
};

const enum Views {
  Editing = "EDITING",
  IDLE = "IDLE",
}

const SwitchTextInput: FC<Props> = ({
  children,
  currentValue = "",
  className = "",
  editHandler,
}) => {
  const [currentView, setCurrentView] = useState<Views>(Views.IDLE);
  const { value, changeHandler } = useInput(currentValue);
  const editButton = useRef<HTMLButtonElement>(null);

  const confirmChanges = () => {
    if (value.length === 0) return;
    editHandler(value);
    setCurrentView(Views.IDLE);
  };

  const onEnterEditHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") setCurrentView(Views.Editing);
  };

  if (currentView === Views.Editing) {
    return (
      <div className={className}>
        <Input.TextInput
          className="h-9"
          value={value}
          onChange={changeHandler}
        />
        <div className="flex mt-2">
          <Button
            disabled={!value}
            ref={editButton}
            className="py-1 px-2 mr-2"
            theme="black"
            onClick={confirmChanges}
          >
            Сохранить
          </Button>
          <Button
            className="py-1 px-2"
            theme="transparent"
            onClick={() => setCurrentView(Views.IDLE)}
          >
            Отмена
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      aria-label={`Редактировать название ${currentValue}`}
      tabIndex={0}
      role="button"
      onClick={() => setCurrentView(Views.Editing)}
      onKeyDown={onEnterEditHandler}
    >
      {children}
    </div>
  );
};

export default SwitchTextInput;
