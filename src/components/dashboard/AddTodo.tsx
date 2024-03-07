import { FC } from "react";
import { Svg, Button } from "../ui";
import TodoForm from "../forms/TodoForm";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setTodoPopupSectionId } from "../../core/redux/slices/popupSlice";

type AddTodoProps = {
  dashboardId: string;
  sectionId: string;
};

const AddTodo: FC<AddTodoProps> = ({ dashboardId, sectionId }) => {
  const dispatch = useAppDispatch();
  const { todoPopupSectionId } = useAppSelector((state) => state.popup);

  const openTodoForm = () => {
    dispatch(setTodoPopupSectionId(sectionId));
  };

  if (sectionId !== todoPopupSectionId) {
    return (
      <Button onClick={openTodoForm}>
        <Svg width={20} height={20} iconId="icon-plus" /> Добавить задачу
      </Button>
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

export default AddTodo;
