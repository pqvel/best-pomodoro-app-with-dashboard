import { FC } from "react";

const TimerTodo: FC<{}> = ({}) => {
  return (
    <div className="flex p-4 rounded-lg bg-gray shadow-md shadow-gray">
      <div className=" flex flex-col gap-1">
        <h5 className="text-lg font-semibold">Сделать готдовой отчет</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est
          provident quod porro accusamus dicta et similique iure, iusto soluta
          nobis repudiandae autem expedita amet laborum, sed, molestias dolores
          voluptatem?
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default TimerTodo;
