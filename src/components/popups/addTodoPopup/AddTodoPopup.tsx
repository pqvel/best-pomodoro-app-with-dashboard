import { FC, useState } from "react";
import Icons from "../../../assets/img/icons.svg";

// type Props = {
//   addHandler: () => void;
// };

const priorities: string[] = ["p1", "p2", "p3", "p4", "p5"];

const AddTodoPopup: FC = () => {
  const [activePriority, setActivePriority] = useState<string | null>(null);

  const changeActivePriorityHandler = (priority: string) => {
    alert(activePriority);
    setActivePriority(() => (priority === activePriority ? priority : null));
  };

  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full bg-black opacity-50 z-10"></div>
      <form className="flex gap-4 fixed left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] rounded-[12px] p-5 bg-white z-20">
        <div className="flex flex-col gap-3">
          <input
            className="border border-grayBorder py-1 px-2 rounded"
            placeholder="Название"
          />
          <textarea
            className="border border-grayBorder py-1 px-2 h-60 rounded"
            placeholder="Описание"
          />
        </div>
        <div>
          <fieldset className="flex">
            <legend>Приоритет задачи</legend>
            {priorities.map((priority) => (
              <label>
                <input
                  type="radio"
                  value={priority}
                  checked={priority === activePriority}
                  onChange={() => changeActivePriorityHandler(priority)}
                />
                {priority}
              </label>
            ))}
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default AddTodoPopup;
