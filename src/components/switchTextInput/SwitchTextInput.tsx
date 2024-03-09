import { FC, useEffect, useRef, useState } from "react";
import { Input, Button } from "../ui";

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
  value,
  editHandler,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const editInput = useRef<HTMLInputElement>(null);
  const editButton = useRef<HTMLButtonElement>(null);

  const changeHandler = () => {
    editButton.current!.disabled = editInput.current!.value === "";
  };

  const toggleEditText = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const confirmChanges = () => {
    const value = editInput.current!.value;
    editHandler(value);
    toggleEditText();
  };

  useEffect(() => {
    if (isEdit) editInput.current?.focus();
  }, [isEdit]);

  if (isEdit) {
    return (
      <div>
        <Input.TextInput placeholder="" />
        <input
          ref={editInput}
          className={editTextClass + " mb-2"}
          onChange={changeHandler}
          defaultValue={value}
        />
        <div className="flex">
          <Button className="py-1 px-2 mr-2" theme="black">
            Сохранить
          </Button>
          <Button className="py-1 px-2" theme="transparent">
            Отмена
          </Button>
          {/* <button
            ref={editButton}
            className="button button-black"
            onClick={confirmChanges}
          >
            Сохранить
          </button>
          <button className="button button-gray" onClick={toggleEditText}>
            Отмена
          </button> */}
        </div>
      </div>
    );
  }

  return <div onClick={toggleEditText}>{children}</div>;
};

export default SwitchTextInput;
