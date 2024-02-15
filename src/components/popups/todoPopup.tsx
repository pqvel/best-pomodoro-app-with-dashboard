import { ChangeEvent, FC, useState } from "react";
import Popup from "../ui/Popup";
import DateTimeLocal from "../ui/DateTimeLocal";
import { PopupType } from "../ui/Popup";
import { useAppDispatch } from "../../core/redux/app/hooks";

import { useForm } from "react-hook-form";
type Priority = {
  priority: number;
  style: string;
};

const priorities: Priority[] = [
  { priority: 1, style: "bg-lime-600 hover:bg-lime-700" },
  { priority: 2, style: "bg-sky-600 hover:bg-sky-700" },
  { priority: 3, style: "bg-yellow-400 hover:bg-yellow-500" },
  { priority: 4, style: "bg-orange-600 hover:bg-orange-700" },
  { priority: 5, style: "bg-red-600 hover:bg-red-700" },
];

type Props = {
  isOpen: boolean;
  closePopup: () => void;
};

const TodoPopup: FC<Props> = ({ isOpen, closePopup }) => {
  const dispatch = useAppDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<TodoConstructorType>();

  const createTodoHandler = () => {
    // dispatch(
    // 	createTodo({
    // 		dashboardId,
    // 	})
    // );
  };

  return (
    <Popup isOpen={isOpen} closePopup={closePopup} type={PopupType.medium}>
      <form className="flex">
        <div className="flex flex-col w-2/3 mr-5">
          <input
            className="rounded-lg py-2 px-3 bg-neutral-100 outline-none mb-3"
            type="text"
            placeholder="Title"
            // {...register("title")}
          />
          <textarea
            className="rounded-lg py-2 px-3 bg-neutral-100 outline-none resize-none h-full"
            placeholder="Description"
            // {...register("descr")}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="flex">
            Помидоры
            <div>
              <button>-</button>
              <input type="number" value={0} />
              <button>+</button>
            </div>
          </label>
          <fieldset
            className="flex cursor-default"
            // {...register("priority")}
          >
            <legend className=" mb-2">Приоритет задачи</legend>
            {priorities.map(({ priority, style }) => (
              <label
                key={priority}
                className={`flex items-center justify-center transition rounded cursor-pointer text-white w-6 h-6 mr-3 hover:shadow-md ${style}`}
              >
                {priority}
                <input
                  className="hidden"
                  type="radio"
                  name="priority"
                  value={priority}
                />
              </label>
            ))}
          </fieldset>
        </div>
      </form>
    </Popup>
  );
};

export default TodoPopup;

const TodoPopupButtons = () => {
  return <div></div>;
};
