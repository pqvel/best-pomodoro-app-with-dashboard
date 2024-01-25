import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import Dashboard from "../dashboard/Dashboard";
import TodoPopup from "../popups/TodoPopup";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setIsOpenTodoPopup } from "../../core/redux/slices/popupSlice";

const TodosPage: FC = () => {
  const dispatch = useAppDispatch();
  const popup = useAppSelector((state) => state.popup);

  return (
    <>
      <MainTemplate>
        <Dashboard />
      </MainTemplate>
      <TodoPopup
        isOpen={popup.isOpenTodoPopup}
        closePopup={() => dispatch(setIsOpenTodoPopup(false))}
      />
    </>
  );
};

export default TodosPage;
