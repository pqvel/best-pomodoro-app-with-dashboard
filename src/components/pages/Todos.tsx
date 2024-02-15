import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import Dashboard from "../dashboard/Dashboard";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setIsOpenTodoPopup } from "../../core/redux/slices/popupSlice";

const TodosPage: FC = () => {
  return (
    <MainTemplate>
      <Dashboard />
    </MainTemplate>
  );
};

export default TodosPage;
