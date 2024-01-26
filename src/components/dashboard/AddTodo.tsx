import { FC } from "react";
import Icons from "../../assets/img/icons.svg";

const AddTodo = () => {
	const;
};

const AddTodoForm = () => {
	const createTodo = () => {};

	return (
		<form>
			<input />
			<textarea />
		</form>
	);
};

const AddTodoButton: FC = () => {
	return (
		<button className="flex items-center gap-3">
			<svg width={20} height={20}>
				<use href={`${Icons}#icon-plus`}></use>
			</svg>
			Добавить задачу
		</button>
	);
};

export default AddTodoButton;
