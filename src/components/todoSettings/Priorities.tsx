import { FC } from "react";
import Svg from "../ui/Svg";
import { useSelect } from "../../core/hooks/useSelect";

type Priority = {
  title: string;
  value: number;
  iconColor: string;
};

type Props = {
  activePriority: number;
  setPriority: (priority: number) => void;
};

const priorities: Priority[] = [
  { title: "Приоритет 1", value: 1, iconColor: "text-red-700" },
  { title: "Приоритет 2", value: 2, iconColor: "text-yellow-600" },
  { title: "Приоритет 3", value: 3, iconColor: "text-blue-600" },
  { title: "Приоритет 4", value: 4, iconColor: "" },
];

const Priorities: FC<Props> = ({ setPriority, activePriority }) => {
  const { isOpen, openSelect } = useSelect();
  console.log(activePriority);
  return (
    <div className="relative">
      <button
        onClick={openSelect}
        className="flex items-center justify-center rounded border border-gray-300 bg-slate-50 hover:bg-slate-100 transition outline-none text-black w-8 h-8 m-0 p-0 mr-2"
      >
        <Svg
          className={priorities[activePriority - 1].iconColor}
          width={16}
          height={16}
          iconId="icon-flag"
        />
      </button>

      {isOpen && (
        <div className="absolute top-9 -left-4 flex flex-col border border-gray-300 rounded-md whitespace-nowrap overflow-hidden">
          {priorities.map((priority) => (
            <label className="bg-white hover:bg-slate-100 flex items-centers flex-shrink-0 py-2 px-3">
              <input
                className="hidden"
                name="priority"
                onChange={() => setPriority(priority.value)}
                value={priority.value}
                type="radio"
              />
              <Svg
                className={`mr-2 ${priority.iconColor}`}
                width={20}
                height={20}
                iconId="icon-flag"
              />
              {priority.title}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Priorities;
