import { FC } from "react";
import { ITodo } from "../../../core/models/TodoModel";
import { Svg, Button } from "../../ui";

type TodoProps = {
  todo: ITodo;
  editHandler?: () => void;
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

const Todo: FC<TodoProps> = ({ todo, editHandler }) => {
  const flagClass = priorities.find(
    (priority) => priority.value === todo.priority
  )!.iconColor;
  return (
    <div className="relative flex flex-col bg-white p-3 rounded-md border border-gray-300 max-w-72 w-full">
      <div>
        <Svg
          className={`flex ${flagClass}`}
          width={14}
          height={14}
          iconId="icon-flag"
        />
        <h4 className="text-base font-medium mb-1">{todo.title}</h4>
      </div>

      <p className="text-sm">{todo.descr}</p>
      <Button
        className="absolute right-2 top-2 px-0 py-0 w-6 h-6"
        theme="transparent"
        onClick={editHandler}
      >
        <Svg iconId="icon-options" width={20} height={20} />
      </Button>
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
    </div>
  );
};

export default Todo;
