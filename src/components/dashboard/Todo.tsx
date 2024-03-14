import { FC } from "react";
import { ITodo } from "../../core/models/TodoModel";
import { Svg, Input } from "../ui";

type TodoProps = {
  todo: ITodo;
  openTodoPopup: () => void;
};

type Priority = {
  title: string;
  value: number;
  iconColor: string;
};

const priorities: Priority[] = [
  { title: "Приоритет 1", value: 1, iconColor: "text-red-700" },
  { title: "Приоритет 2", value: 2, iconColor: "text-yellow-600" },
  { title: "Приоритет 3", value: 3, iconColor: "text-blue-600" },
  { title: "Приоритет 4", value: 4, iconColor: "" },
];

const Todo: FC<TodoProps> = ({ todo, openTodoPopup }) => {
  const priority = priorities.find((p) => p.value === todo.priority);

  return (
    <div
      className="relative flex flex-col cursor-pointer bg-white p-3 rounded-md border border-gray-300 max-w-72 w-full"
      onClick={openTodoPopup}
    >
      <div className="flex items-center pr-5">
        <Svg
          className={`mr-2 min-w-[16px] ${priority!.iconColor}`}
          width={16}
          height={16}
          iconId="icon-flag"
        />
        <h4 className="text-base font-medium w-full truncate">{todo.title}</h4>
      </div>
      {todo.descr && <p className="text-sm line-clamp-5 mt-1">{todo.descr}</p>}
      {todo.hashtags.length > 0 && (
        <div className="flex flex-wrap mt-2">
          {todo.hashtags.map((hashtag) => (
            <div
              className="bg-gray-200 text-gray-500 px-2 rounded-xl mb-1 mr-1"
              key={hashtag}
            >
              @{hashtag}
            </div>
          ))}
        </div>
      )}
      <Input.CheckboxInput className=" absolute right-3 top-3.5" />
    </div>
  );
};

export default Todo;
