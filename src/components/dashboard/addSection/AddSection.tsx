import { ChangeEvent, KeyboardEvent, FC, useRef, useState } from "react";
import { useAppDispatch } from "@/core/redux/app/hooks";
import { addSection } from "@/core/redux/slices/dashboardSlice";

const AddSection: FC<{ dashboardId: string }> = ({ dashboardId }) => {
  const dispatch = useAppDispatch();
  const input = useRef<HTMLInputElement>(null);
  const [isDisabledBtn, setDisabledBtn] = useState<boolean>(true);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDisabledBtn(e.target.value === "");
  };

  const enterHandler = (
    e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.key === "Enter" && addSectionHandler();
  };

  const addSectionHandler = () => {
    dispatch(addSection({ dashboardId, title: input.current!.value }));
    resetInput();
  };

  const resetInput = () => {
    input.current!.value = "";
    setDisabledBtn(true);
  };

  return (
    <div className="dashboard__section flex flex-col">
      <input
        className="input mb-2"
        ref={input}
        onChange={changeHandler}
        onKeyDown={enterHandler}
        placeholder="Название раздела"
        type="text"
        maxLength={50}
      />
      <div className="flex gap-2">
        <button
          className="button button-black"
          onKeyDown={enterHandler}
          onClick={addSectionHandler}
          disabled={isDisabledBtn}
        >
          Добавить раздел
        </button>
        <button onClick={resetInput}>Отмена</button>
      </div>
    </div>
  );
};

export default AddSection;
