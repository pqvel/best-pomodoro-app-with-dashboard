import { ChangeEvent, FC, LegacyRef, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setTodoPopupSectionId } from "../../core/redux/slices/popupSlice";
import { useForm } from "react-hook-form";
import { createTodo } from "../../core/redux/slices/dashboardSlice";
import { setScrollHeight } from "../../core/utils/setScrollHeight";
import Svg from "../ui/Svg";
import Hashtags from "../todoSettings/Hashtags";
import Priorities from "../todoSettings/Priorities";

// тултип это подсказка, нужно поменять названия
type AddTodoProps = {
  dashboardId: string;
  sectionId: string;
};

const AddTodo: FC<AddTodoProps> = ({ dashboardId, sectionId }) => {
  const dispatch = useAppDispatch();

  const todoPopupSectionId = useAppSelector(
    (state) => state.popup.todoPopupSectionId
  );

  const { handleSubmit } = useForm();

  const handleCreateTodo = () => {};

  if (sectionId !== todoPopupSectionId) {
    return (
      <AddTodoButton
        openTodoForm={() => dispatch(setTodoPopupSectionId(sectionId))}
      />
    );
  }

  return <AddTodoForm handleCreateTodo={handleSubmit(handleCreateTodo)} />;
};

type AddTodoFormProps = {
  handleCreateTodo: () => void;
};

const AddTodoForm: FC<AddTodoFormProps> = ({ handleCreateTodo }) => {
  const [priority, setPriority] = useState<number>(4);

  return (
    <form
      className="bg-white rounded-lg border border-gray-300 p-3"
      onSubmit={handleCreateTodo}
    >
      <input
        className="p-0 w-full font-semibold outline-none mb-1"
        placeholder="Заголовок"
      />
      <textarea
        className="p-0 w-full text-sm outline-none max-h-40 mb-3 resize-none"
        placeholder="Описание"
        onChange={setScrollHeight}
      />
      <div className="flex"></div>
      <div className="flex">
        <Priorities setPriority={setPriority} activePriority={priority} />
        <Hashtags setHashtags={() => {}} hashtags={[]} isActive={false} />
      </div>
    </form>
  );
};

type AddTodoButtonProps = {
  openTodoForm: () => void;
};

const AddTodoButton: FC<AddTodoButtonProps> = ({ openTodoForm }) => (
  <button className="flex items-center gap-3" onClick={openTodoForm}>
    <Svg width={20} height={20} iconId="icon-plus" />
    Добавить задачу
  </button>
);

export default AddTodo;
