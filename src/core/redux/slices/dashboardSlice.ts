import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { v4 as uuid } from "uuid";

export type DashboardType = {
  id: string;
  title: string;
  sections: SectionType[];
};

export type SectionType = {
  id: string;
  title: string;
  todos: TodoType[];
};

export type TodoType = {
  id: string;
  title: string;
  descr: string;
  leftTime: number;
};

const initialState: DashboardType[] = [
  {
    id: uuid(),
    title: "Задачи",
    sections: [
      {
        id: uuid(),
        title: "Новые",
        todos: [
          {
            id: uuid(),
            title: "Сделать годовой отчет",
            descr:
              "Проверить чтобы все совпадало по ТО, а также дописать последние страницы",
            leftTime: 3000,
          },
        ],
      },
    ],
  },
];

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addDashboard: (state, action: PayloadAction<{ title: string }>) => {
      state.push({
        id: uuid(),
        title: action.payload.title,
        sections: [],
      });
    },
    deleteDashboard: (state, action: PayloadAction<{ id: string }>) => {
      state = state.filter((dashboard) => dashboard.id !== action.payload.id);
    },
    changeDashboardTitle: (
      state,
      action: PayloadAction<{ dashboardId: string; title: string }>
    ) => {
      const { dashboardId, title } = action.payload;
      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );
      state[dashboardIndex].title = title;
    },
    addSection: (
      state,
      action: PayloadAction<{ dashboardId: string; title: string }>
    ) => {
      const { dashboardId, title } = action.payload;
      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );
      state[dashboardIndex].sections.push({
        id: uuid(),
        title,
        todos: [],
      });
    },
    deleteSection: (
      state,
      action: PayloadAction<{ dashboardId: string; sectionId: string }>
    ) => {
      const { dashboardId, sectionId } = action.payload;

      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );

      state[dashboardIndex].sections = state[dashboardIndex].sections.filter(
        (section) => section.id !== sectionId
      );
    },
    changeSectionTitle: (
      state,
      action: PayloadAction<{
        dashboardId: string;
        sectionId: string;
        title: string;
      }>
    ) => {
      const { dashboardId, sectionId, title } = action.payload;
      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );
      const sectionIndex = state[dashboardIndex].sections.findIndex(
        (section) => section.id === sectionId
      );
      state[dashboardIndex].sections[sectionIndex].title = title;
    },
    addTodo: (
      state,
      action: PayloadAction<{
        dashboardId: string;
        sectionId: string;
        title: string;
      }>
    ) => {
      const { dashboardId, sectionId, title } = action.payload;
      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );
      const sectionIndex = state[dashboardIndex].sections.findIndex(
        (section) => section.id === sectionId
      );

      state[dashboardIndex].sections[sectionIndex].todos.push({
        id: uuid(),
        title,
        descr: "",
        leftTime: 0,
      });
    },
    deleteTodo: (
      state,
      action: PayloadAction<{
        dashboardId: string;
        sectionId: string;
        todoId: string;
      }>
    ) => {
      const { dashboardId, sectionId, todoId } = action.payload;
      const dashboardIndex = state.findIndex(
        (dashboard) => dashboard.id === dashboardId
      );
      const sectionIndex = state[dashboardIndex].sections.findIndex(
        (section) => section.id === sectionId
      );
      state[dashboardIndex].sections[sectionIndex].todos = state[
        dashboardIndex
      ].sections[sectionIndex].todos.filter((todo) => todo.id !== todoId);
    },
    // changeTodo: () => {

    // }
  },
});

export const {
  addDashboard,
  deleteDashboard,
  changeDashboardTitle,
  addSection,
  deleteSection,
  changeSectionTitle,
  addTodo,
  deleteTodo,
} = dashboardSlice.actions;
export const dashboardSelector = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;
