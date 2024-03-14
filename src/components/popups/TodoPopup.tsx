import { FC, useState } from "react";
import { Popup } from "../ui";
import type { ITodo } from "../../core/models/TodoModel";
import { setCurrentTodoId } from "../../core/redux/slices/userSettingsSlice";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { Link } from "react-router-dom";

type Props = {
  todo: ITodo;
  closeHandler: () => void;
};

const TodoPopup: FC<Props> = ({ todo, closeHandler }) => {
  const dispatch = useAppDispatch();
  const [changedTodo, setChangedTodo] = useState<ITodo>(todo);

  const confirmChanges = () => {};

  const rejectChanges = () => {
    setChangedTodo(todo);
  };

  const setCurrentTodo = () => {
    dispatch(setCurrentTodoId(todo.id));
  };

  return (
    <Popup size="medium" closePopup={closeHandler}>
      <h3>{todo.title}</h3>
      <p>{todo.descr}</p>
      <Link to="/timer" onClick={setCurrentTodo}>
        Начать
      </Link>
    </Popup>
  );
};

export default TodoPopup;
