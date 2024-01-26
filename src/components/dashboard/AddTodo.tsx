import { FC } from "react";
import Icons from "../../assets/img/icons.svg";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setTodoPopupSectionId } from "../../core/redux/slices/popupSlice";
import { useForm } from "react-hook-form";
import { createTodo } from "../../core/redux/slices/dashboardSlice";

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
      <AddTodoButton openTodoForm={() => setTodoPopupSectionId(sectionId)} />
    );
  }

  return <AddTodoForm handleCreateTodo={handleSubmit(handleCreateTodo)} />;
};

type AddTodoFormProps = {
  handleCreateTodo: () => void;
};

const AddTodoForm: FC<AddTodoFormProps> = ({ handleCreateTodo }) => {
  return (
    <form onSubmit={handleCreateTodo}>
      <input />
      <textarea />
      <div>{/* <button>Создать</button> */}</div>
    </form>
  );
};

type AddTodoButtonProps = {
  openTodoForm: () => void;
};

const AddTodoButton: FC<AddTodoButtonProps> = ({ openTodoForm }) => (
  <button className="flex items-center gap-3" onClick={openTodoForm}>
    <svg width={20} height={20}>
      <use href={`${Icons}#icon-plus`}></use>
    </svg>
    Добавить задачу
  </button>
);

export default AddTodoButton;
