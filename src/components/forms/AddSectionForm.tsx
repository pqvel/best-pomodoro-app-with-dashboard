import { FC } from "react";
import { Button, Input } from "../ui";
import { useInput } from "../../core/hooks/useInput";

type Props = {
  createSection: (title: string) => void;
};

const AddSectionForm: FC<Props> = ({ createSection }) => {
  const { value, changeHandler, reset } = useInput();

  const createSectionHandler = () => {
    createSection(value);
    reset();
  };

  return (
    <form className="flex flex-col w-72">
      <Input.TextInput
        className="h-9"
        placeholder="Название раздела"
        onChange={changeHandler}
        value={value}
      />
      <div className="flex mt-2">
        <Button
          className="px-2 py-1 mr-2"
          disabled={value.length === 0}
          onClick={createSectionHandler}
        >
          Добавить раздел
        </Button>

        <Button className="px-2 py-1" theme="transparent" onClick={reset}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default AddSectionForm;
