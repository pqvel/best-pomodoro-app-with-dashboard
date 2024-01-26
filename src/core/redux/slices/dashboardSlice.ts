import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { v4 as uuid } from "uuid";
import { TodoModel, TodoType } from "../../models/TodoModel";

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

const initialState: DashboardType[] = [
	{
		id: uuid(),
		title: "Задачи",
		sections: [
			{
				id: uuid(),
				title: "Новые",
				todos: [
					new TodoModel({
						title: "Сделать годовой отчет",
						descr: "Дописать последние страницы",
						countPomodors: 5,
						deadline: 100,
						priority: 1,
					}),
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
		createTodo: (
			state,
			action: PayloadAction<{
				dashboardId: string;
				sectionId: string;
				todo: TodoType;
			}>
		) => {
			const { dashboardId, sectionId, todo } = action.payload;

			const dashboardIndex = state.findIndex(
				(dashboard) => dashboard.id === dashboardId
			);

			const sectionIndex = state[dashboardIndex].sections.findIndex(
				(section) => section.id === sectionId
			);

			state[dashboardIndex].sections[sectionIndex].todos.push(todo);
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
	createTodo,
	deleteTodo,
} = dashboardSlice.actions;
export const dashboardSelector = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;
