import { FC } from "react";
import { Button, Svg } from "../ui";
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
  const { isOpen, openSelect, closeSelect, toggleSelect } = useSelect();

  const handleChangePriority = (priority: number) => {
    console.log(priority);
    setPriority(priority);
    closeSelect();
  };

  return (
    <div className="relative">
      <Button
        className="px-0 py-0 w-8 h-8 mr-2"
        theme="white"
        onClick={toggleSelect}
      >
        <Svg
          className={priorities[activePriority - 1].iconColor}
          width={18}
          height={18}
          iconId="icon-flag"
        />
      </Button>

      {isOpen && (
        <div
          className="absolute top-9 -left-4 flex flex-col border border-gray-300 rounded-md whitespace-nowrap overflow-hidden"
          onClick={openSelect}
        >
          {priorities.map((priority) => (
            <label
              className={`bg-white hover:bg-slate-200 flex items-centers flex-shrink-0 py-2 px-3 ${
                priority.value === activePriority ? "bg-slate-200" : "bg-white"
              }`}
              key={priority.value}
            >
              <input
                className="hidden"
                name="priority"
                onChange={() => handleChangePriority(priority.value)}
                value={priority.value}
                type="radio"
                checked={priority.value === activePriority}
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
