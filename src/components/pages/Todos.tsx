import { FC } from "react";
import MainTemplate from "@/components/templates/MainTemplate";
import Dashboard from "@/components/dashboard/Dashboard";

const TodosPage: FC = () => {
  return (
    <MainTemplate>
      <Dashboard />
    </MainTemplate>
  );
};

export default TodosPage;
