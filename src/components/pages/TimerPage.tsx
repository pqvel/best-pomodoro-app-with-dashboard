import { FC } from "react";
import { Link } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Timer from "../timer/Timer";
import TimerTodo from "../timer/TimerTodo";
import { useAppSelector } from "../../core/redux/app/hooks";
import { findTodo } from "../../core/utils/find";

const TimerPage: FC = () => {
  const { dashboardId, sectionId, todoId } = useAppSelector(
    (state) => state.popup.todoPupupActiveTodo
  );

  const todo = useAppSelector((state) =>
    findTodo(state.dashboard, dashboardId, sectionId, todoId)
  );

  return (
    <MainTemplate>
      <section className="flex flex-col gap-4 max-w-2xl mt-10 mx-auto lg:m-5 lg:max-w-full">
        <Timer />
        {todo && <TimerTodo todo={todo} />}
        <Link
          to="/todos"
          className="flex items-center justify-center rounded px-3 py-2 bg-black text-white shadow-md shadow-gray"
        >
          Выбрать задачу
        </Link>
      </section>
    </MainTemplate>
  );
};

export default TimerPage;
