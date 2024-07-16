import { FC } from "react";
import type { ITodo } from "../../core/models/TodoModel";

type Props = {
  todo: ITodo;
};

const TimerTodo: FC<Props> = ({ todo }) => {
  const { title, descr } = todo;
  return (
    <div className="flex p-4 rounded-lg bg-gray-300 shadow-md shadow-gray">
      <div className="flex flex-col gap-1">
        <h5 className="text-lg font-semibold text-wrap break-all truncate line-clamp-2">
          {title}
        </h5>
        <p className="text-wrap break-all truncate line-clamp-5">{descr}</p>
      </div>
      <div></div>
    </div>
  );
};

export default TimerTodo;
