import { FC, useState } from "react";
import Svg from "./ui/Svg";

const CreateTodo: FC = () => {
  const [value, setValue] = useState("");
  return (
    <form className="flex flex-col items-start rounded-lg p-3 bg-white border border-grayBorder">
      <input
        className="font-semibold bg-transparent outline-none mb-1"
        placeholder="Название"
      />
      <textarea
        className="text-sm bg-transparent outline-none resize-none max-h-[5em] h-auto"
        placeholder="Описание"
      />
      <Counter />
    </form>
  );
};

export default CreateTodo;

const Counter: FC = ({}) => (
  <div className="flex flex-col gap-1 items-center">
    <div className="flex items-center gap-2">
      <button>
        <Svg
          className="rounded text-black bg-gray border-grayBorder flex items-center justify-center w-6 h-6"
          width={16}
          height={16}
          iconId="icon-minus"
        />
      </button>
      <input
        className="flex items-center justify-center text-center w-8 h-6 bg-white rounded"
        type="number"
      />
      <button className="rounded text-black bg-gray border-grayBorder flex items-center justify-center w-6 h-6">
        <Svg width={16} height={16} iconId="icon-plus" />
      </button>
    </div>
    <p className=" text-grayText text-xs">25 минут</p>
  </div>
);
