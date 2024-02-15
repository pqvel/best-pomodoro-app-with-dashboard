import { FC } from "react";
import { TodoType } from "@/core/models/TodoModel";

type TodoProps = {
  todo: TodoType;
  editHandler?: () => void;
};

const Todo: FC<TodoProps> = ({ todo, editHandler }) => {
  return (
    <div className="dashboard__cart">
      <h4 className="h4">{todo.title}</h4>
      <p className="p3">{todo.descr}</p>
      <span>{todo.leftTime}</span>
      <button className="dashboard__cart-settings" onClick={editHandler}>
        :
      </button>
    </div>
  );
};

export default Todo;
