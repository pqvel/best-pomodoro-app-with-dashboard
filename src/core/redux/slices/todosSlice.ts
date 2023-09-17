import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  date: number;
  timeLeft: number;
  title: string;
  descr: string;
  countPomodoros: number;
  completed: boolean;
};

type Section = {
  id: string;
  title: string;
  todos: Todo[];
};

type State = {
  dashboard: Section[];
};

const initialState: State = {
  dashboard: [{ id: "1", title: "hello", todos: [] }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodos: () => {},
    createSection: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;
      state.dashboard.push({
        title,
        id: uuid(),
        todos: [],
      });
    },
    createTodo: (
      state,
      action: PayloadAction<{ title: string; descr: string; sectionId: string }>
    ) => {
      const { title, descr, sectionId } = action.payload;
      const sectionIndex = state.dashboard.findIndex(
        (section) => section.id === sectionId
      );
      state.dashboard[sectionIndex].todos.push({
        title,
        descr,
        id: uuid(),
        date: Date.now(),
        timeLeft: 0,
        completed: false,
        countPomodoros: 1,
      });
    },
    deleteTodo: (
      state,
      action: PayloadAction<{ sectionId: string; todoId: string }>
    ) => {
      const { sectionId, todoId } = action.payload;

      const sectionIndex = state.dashboard.findIndex(
        (section) => section.id === sectionId
      );
      state.dashboard[sectionIndex].todos.filter((todo) => todo.id !== todoId);
    },
    deleteSection: (state, action: PayloadAction<{ sectionId: string }>) => {
      state.dashboard.filter(
        (section) => section.id !== action.payload.sectionId
      );
    },
    updateSection: (
      state,
      action: PayloadAction<{ sectionId: string; title: string }>
    ) => {
      const { sectionId, title } = action.payload;
      const sectionIndex = state.dashboard.findIndex(
        (section) => section.id === sectionId
      );
      state.dashboard[sectionIndex].title = title;
    },
    updateTodo: (
      state,
      action: PayloadAction<{ sectionId: string; newTodo: Todo }>
    ) => {
      const { sectionId, newTodo } = action.payload;
      const sectionIndex = state.dashboard.findIndex(
        (section) => section.id === sectionId
      );
      const todoIndex = state.dashboard[sectionIndex].todos.findIndex(
        (todo) => todo.id === newTodo.id
      );
      state.dashboard[sectionIndex].todos[todoIndex] = newTodo;
    },
  },
});

export const { createSection } = todosSlice.actions;
export const dashboardSelector = (state: RootState) => state.todos.dashboard;
export default todosSlice.reducer;
