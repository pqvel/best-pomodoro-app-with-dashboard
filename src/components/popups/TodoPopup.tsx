import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Popup } from "../ui";
import Priorities from "../todoSettings/Priorities";
import Hashtags from "../todoSettings/Hashtags";
import { ITodo } from "../../core/models/TodoModel";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { setScrollHeight } from "../../core/utils/setScrollHeight";

type Props = {
  todo: ITodo;
  closeHandler: () => void;
  setCurrentTodo: () => void;
};

const TodoPopup: FC<Props> = ({ todo, closeHandler, setCurrentTodo }) => {
  const dispatch = useAppDispatch();
  const [isChanged, setChanged] = useState<boolean>(false);
  const [changedTodo, setChangedTodo] = useState<ITodo>(todo);

  useEffect(() => {}, []);

  const confirmChanges = () => {};

  const rejectChanges = () => {
    setChangedTodo(todo);
  };

  const setCurrentTodoHandler = () => {
    setCurrentTodo();
    closeHandler();
  };

  return (
    <Popup size="small" closePopup={closeHandler}>
      <div className="flex mb-4">
        <Priorities activePriority={1} setPriority={(priority: number) => {}} />
        <Hashtags hashtags={[]} addHashtag={() => {}} />
      </div>
      <input
        className="p-0 w-full font-semibold outline-none mb-1"
        placeholder="Заголовок"
        // onChange={(e) => setTitle(e.target.value)}
        value={todo.title}
      />
      <textarea
        className="p-0 w-full text-sm outline-none mb-3 resize-none scrollbar-thumb-sky-700 scrollbar-track-sky-300 max-h-80"
        placeholder="Описание"
        onChange={setScrollHeight}
        value={todo.descr}
      />

      <TodoPopupButtons
        isChanged={isChanged}
        confirmChanges={confirmChanges}
        rejectChanges={rejectChanges}
        setCurrentTodo={setCurrentTodoHandler}
      />
    </Popup>
  );
};

export default TodoPopup;

type TodoPopupButtonsProps = {
  isChanged: boolean;
  confirmChanges: () => void;
  rejectChanges: () => void;
  setCurrentTodo: () => void;
};

const TodoPopupButtons: FC<TodoPopupButtonsProps> = ({
  isChanged,
  confirmChanges,
  rejectChanges,
  setCurrentTodo,
}) => {
  if (isChanged) {
    return (
      <div className="flex justify-end">
        <Button className="px-4 py-1 mr-3" theme="gray">
          Отмена
        </Button>
        <Button className="px-4 py-1">Сохранить</Button>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <Link
        className="flex items-center justify-center cursor-pointer rounded bg-slate-950 text-white hover:bg-black px-4 py-1"
        to="/"
        onClick={setCurrentTodo}
      >
        Начать
      </Link>
    </div>
  );
};
