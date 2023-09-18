import { FC, useRef } from "react";
import { useAppDispatch } from "../../../core/redux/app/hooks";
import { addSection } from "../../../core/redux/slices/dashboardSlice";

const AddSection: FC<{ dashboardId: string }> = ({ dashboardId }) => {
	const dispatch = useAppDispatch();
	const input = useRef<HTMLInputElement>(null);
	const addButton = useRef<HTMLButtonElement>(null);

	const addSectionHandler = () => {
		dispatch(addSection({ dashboardId, title: input.current!.value }));
		resetInput();
	};

	const resetInput = () => (input.current!.value = "");

	return (
		<div className="dashboard__section flex flex-col">
			<input
				className="input mb-2"
				ref={input}
				placeholder="Название раздела"
				maxLength={50}
			/>
			<div className="flex gap-2">
				<button
					className="button button-black"
					onClick={addSectionHandler}
					ref={addButton}
				>
					Добавить раздел
				</button>
				<button onClick={resetInput}>Отмена</button>
			</div>
		</div>
	);
};

export default AddSection;
