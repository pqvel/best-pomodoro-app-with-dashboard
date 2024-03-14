import { FC } from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Timer from "../timer/Timer";
import TimerTodo from "../timer/TimerTodo";

const TimerPage: FC = () => {
  return (
    <MainTemplate>
      <div className="flex flex-col gap-4 max-w-2xl mt-10 mx-auto">
        <Timer />
        <TimerTodo />
        <Link
          to="/todos"
          className="flex items-center justify-center rounded px-3 py-2 bg-black text-white shadow-md shadow-gray"
        >
          Выбрать задачу
        </Link>
      </div>
    </MainTemplate>
  );
};

export default TimerPage;
