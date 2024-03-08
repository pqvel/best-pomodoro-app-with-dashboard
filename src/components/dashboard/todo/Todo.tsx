import { FC } from "react";
import { ITodo } from "../../../core/models/TodoModel";
import { Svg, Button } from "../../ui";

type TodoProps = {
  todo: ITodo;
  editHandler?: () => void;
};

const Todo: FC<TodoProps> = ({ todo, editHandler }) => {
  return (
    <div className="relative flex flex-col bg-white p-3 rounded-md border border-gray-300 max-w-72 w-full">
      <h4 className="text-base font-medium mb-1">{todo.title}</h4>
      <p className="text-sm">{todo.descr}</p>
      <Button
        className="absolute right-2 top-2 px-0 py-0 w-6 h-6"
        theme="transparent"
        onClick={editHandler}
      >
        <Svg iconId="icon-options" width={20} height={20} />
      </Button>
    </div>
  );
};

export default Todo;
