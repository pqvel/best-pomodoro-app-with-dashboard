import type {
  DashboardType,
  SectionType,
} from "../../redux/slices/dashboardSlice";
import type { ITodo } from "../../models/TodoModel";

export const findDashboard = (
  dashboards: DashboardType[],
  dashboardId: string
) => {
  return dashboards.find((dashboard) => dashboard.id === dashboardId) || null;
};

export const findSection = (
  dashboards: DashboardType[],
  dashboardId: string,
  sectionId: string
) => {
  const dashboard = findDashboard(dashboards, dashboardId);
  if (!dashboard) return null;

  return dashboard.sections.find((section) => section.id === sectionId) || null;
};

export const findTodo = (
  dashboards: DashboardType[],
  dashboardId: string,
  sectionId: string,
  todoId: string
) => {
  const section = findSection(dashboards, dashboardId, sectionId);
  if (!section) return null;

  return section.todos.find((todo) => todo.id === todoId);
};
