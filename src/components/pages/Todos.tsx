import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import Dashboard from "../dashboard/Dashboard";

const TodosPage: FC = () => {
  return (
    <MainTemplate>
      <Dashboard />
    </MainTemplate>
  );
};

export default TodosPage;
