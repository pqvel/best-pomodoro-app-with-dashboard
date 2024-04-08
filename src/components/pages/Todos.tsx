import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import Dashboard from "../dashboard/Dashboard";
import TodoPopup from "../popups/TodoPopup";
import { useAppSelector, useAppDispatch } from "../../core/redux/app/hooks";
import { setTodoPopupActiveTodo } from "../../core/redux/slices/popupSlice";
import { findTodo } from "../../core/utils/find";
import { setCurrentTodoPomodoro } from "../../core/redux/slices/userSettingsSlice";

const TodosPage: FC = () => {
  const dispatch = useAppDispatch();

  const { dashboardId, sectionId, todoId } = useAppSelector(
    (state) => state.popup.todoPupupActiveTodo
  );
  const todo = useAppSelector((state) =>
    findTodo(state.dashboard, dashboardId, sectionId, todoId)
  );

  const closeActiveTodoPopup = () => {
    dispatch(
      setTodoPopupActiveTodo({ todoId: "", dashboardId: "", sectionId: "" })
    );
  };

  const setCurrentTodo = () => {
    dispatch(setCurrentTodoPomodoro({ dashboardId, sectionId, todoId }));
  };

  return (
    <>
      <MainTemplate>
        <Dashboard />
      </MainTemplate>

      {todo && (
        <TodoPopup
          todo={todo}
          setCurrentTodo={setCurrentTodo}
          closeHandler={closeActiveTodoPopup}
        />
      )}
    </>
  );
};

export default TodosPage;
