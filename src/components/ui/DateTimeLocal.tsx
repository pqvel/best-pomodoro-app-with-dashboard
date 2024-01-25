import { FC } from "react";

/**
 * @todo добавитьзначения по умолчанию для min и max
 */

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string;
  max?: string;
};

const DateTimeLocal: FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  min = "",
  max = "",
}) => {
  return (
    <label className="flex flex-col">
      {placeholder}
      <input
        className=" border border-gray-400 outline-none cursor-pointer rounded px-2 py-1 bg-gray-50  hover:shadow active:shadow-slate-300 focus:shadow-slate-300"
        type="datetime-local"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </label>
  );
};

export default DateTimeLocal;
