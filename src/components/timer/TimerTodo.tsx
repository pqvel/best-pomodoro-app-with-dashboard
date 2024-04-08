import { FC } from "react";
import { ITodo } from "../../core/models/TodoModel";

type Props = {
  todo: ITodo;
};

const TimerTodo: FC<Props> = ({ todo }) => {
  const { title, descr } = todo;
  return (
    <div className="flex p-4 rounded-lg bg-gray-300 shadow-md shadow-gray">
      <div className=" flex flex-col gap-1">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-wrap break-all	">{descr}</p>
      </div>
      <div></div>
    </div>
  );
};

export default TimerTodo;
