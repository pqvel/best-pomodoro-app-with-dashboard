import { FC } from "react";
import Popup from "../ui/Popup";
import { PopupType } from "../ui/Popup";

type Todo = {
  title: string;
  descr: string;
  id: string;
  priority: number;
  countPomodors: number;
  deadline: Date;
};

type Priority = {
  priority: number;
  style: string;
};

const priorities: Priority[] = [
  { priority: 1, style: "" },
  { priority: 2, style: "" },
  { priority: 3, style: "" },
  { priority: 4, style: "" },
  { priority: 5, style: "" },
];

const TodoPopup: FC = () => {
  return (
    <Popup type={PopupType.large}>
      <form className="flex">
        <div className="flex flex-col w-2/3 mr-5">
          <input
            className="rounded-lg py-2 px-3 bg-neutral-100 outline-none mb-3"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="rounded-lg py-2 px-3 bg-neutral-100 outline-none resize-none"
            placeholder="Description"
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
          <fieldset className="flex">
            <legend className=" mb-2">Приоритет задачи</legend>
            {priorities.map(({ priority, style }) => (
              <label
                key={priority}
                className={`flex items-center justify-center rounded-sm cursor-pointer bg-slate-500 w-6 h-6 mr-3 ${style}`}
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

          <label className="flex flex-col">
            Дата завершения задачи:
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value="2018-06-12T19:30"
              min="2018-06-07T00:00"
              max="2018-06-14T00:00"
            />
          </label>
        </div>
      </form>
    </Popup>
  );
};

export default TodoPopup;
