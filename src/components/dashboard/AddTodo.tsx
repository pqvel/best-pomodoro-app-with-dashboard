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
      <Button className="px-2 py-1" theme="transparent" onClick={openTodoForm}>
        Добавить задачу
        <Svg className="ml-2" width={20} height={20} iconId="icon-plus" />
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
