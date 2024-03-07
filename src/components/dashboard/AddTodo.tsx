import { FC } from "react";
import { useForm } from "react-hook-form";
import Svg from "../ui/Svg";
import TodoForm from "../forms/TodoForm";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setTodoPopupSectionId } from "../../core/redux/slices/popupSlice";
import { createTodo } from "../../core/redux/slices/dashboardSlice";
import { TodoModel } from "../../core/models/TodoModel";

// тултип это подсказка, нужно поменять названия
type AddTodoProps = {
  dashboardId: string;
  sectionId: string;
};

const AddTodo: FC<AddTodoProps> = ({ dashboardId, sectionId }) => {
  const todoPopupSectionId = useAppSelector(
    (state) => state.popup.todoPopupSectionId
  );

  const { handleSubmit } = useForm();

  if (sectionId !== todoPopupSectionId) {
    return (
      <AddTodoButton
        openTodoForm={() => dispatch(setTodoPopupSectionId(sectionId))}
      />
    );
  }

  return (
    <TodoForm
      dashboardId={dashboardId}
      sectionId={sectionId}
      closeForm={() => dispatch(setTodoPopupSectionId(""))}
    />
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
