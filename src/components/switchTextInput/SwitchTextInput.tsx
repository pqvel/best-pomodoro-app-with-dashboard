import { FC, useEffect, useRef, useState } from "react";
import { Input, Button } from "../ui";
import { useInput } from "../../core/hooks/useInput";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  editTextClass: string;
  value: string;
  editHandler: (value: string) => void;
};
// нужно хранить пред состояние текста
const SwitchTextInput: FC<Props> = ({
  children,
  editTextClass,
  // value as defaultValue,
  editHandler,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { value, changeHandler } = useInput();
  const editButton = useRef<HTMLButtonElement>(null);

  const toggleEditText = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const confirmChanges = () => {
    // const value = editInput.current!.value;
    editHandler(value);
    toggleEditText();
  };

  if (isEdit) {
    return (
      <div>
        <Input.TextInput
          placeholder=""
          value={value}
          onChange={changeHandler}
        />
        <div className="flex">
          <Button
            disabled={!value}
            ref={editButton}
            className="py-1 px-2 mr-2"
            theme="black"
          >
            Сохранить
          </Button>
          <Button
            className="py-1 px-2"
            theme="transparent"
            onClick={toggleEditText}
          >
            Отмена
          </Button>
        </div>
      </div>
    );
  }

  return <div onClick={toggleEditText}>{children}</div>;
};

export default SwitchTextInput;
