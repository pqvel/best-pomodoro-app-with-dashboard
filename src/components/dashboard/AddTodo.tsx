import { FC } from "react";
import { Svg, Button } from "../ui";
import TodoForm from "../forms/TodoForm";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setAddTodoPopupSectionId } from "../../core/redux/slices/popupSlice";

type AddTodoProps = {
  dashboardId: string;
  sectionId: string;
};

const AddTodo: FC<AddTodoProps> = ({ dashboardId, sectionId }) => {
  const dispatch = useAppDispatch();
  const { addTodoPopupSectionId } = useAppSelector((state) => state.popup);

  const openTodoForm = () => {
    dispatch(setAddTodoPopupSectionId(sectionId));
  };

  if (sectionId !== addTodoPopupSectionId) {
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
      closeForm={() => dispatch(setAddTodoPopupSectionId(""))}
    />
  );
};

export default AddTodo;
