import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import Dashboard from "../dashboard/Dashboard";
import TodoPopup from "../popups/TodoPopup";
import { useAppSelector, useAppDispatch } from "../../core/redux/app/hooks";
import { setTodoPopupActiveTodo } from "../../core/redux/slices/popupSlice";

const TodosPage: FC = () => {
  const dispatch = useAppDispatch();

  const activeTodoPopup = useAppSelector(
    (state) => state.popup.todoPupupActiveTodo
  );

  const closeActiveTodoPopup = () => {
    dispatch(setTodoPopupActiveTodo(null));
  };

  return (
    <>
      <MainTemplate>
        <Dashboard />
      </MainTemplate>

      {activeTodoPopup && (
        <TodoPopup todo={activeTodoPopup} closeHandler={closeActiveTodoPopup} />
      )}
    </>
  );
};

export default TodosPage;
