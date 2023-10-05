import { FC } from "react";
import Icons from "../../../assets/img/icons.svg";

type Props = {
  addHandler: () => void;
};

const AddTodo: FC<Props> = ({ addHandler }) => {
  return (
    <button className="flex items-center gap-3" onClick={addHandler}>
      <svg width={20} height={20}>
        <use href={`${Icons}#icon-plus`}></use>
      </svg>
      Добавить задачу
    </button>
  );
};

export default AddTodo;
