import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type Todo = {
    id: string
    date: string
    timeLeft: number
    title: string
    descr: string
    countPomodoros: number
    completed: boolean
}

type TodoList = {
    id: string
    title: string
    todos: Todo[]
}

type State = {
    dashboard: TodoList[]
}

const initialState: State = {
    dashboard: [
        {id: '1', title: 'hello', todos: []}
    ]    
}
  

export const todosSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    deleteTodos: () => {

    },
    createTodoList: (state, action: PayloadAction<{title: string, pos: number}>) => {
        const { title, pos } = action.payload;
        state.dashboard = [...state.dashboard.slice(0, pos), { id: Math.random().toString(), title, todos: []}, ...state.dashboard.slice(pos - 1, state.dashboard.length)]
    }
  },
});

export const { createTodoList } = todosSlice.actions;
export const dashboardSelector = (state: RootState) => state.todos.dashboard;
export default todosSlice.reducer;