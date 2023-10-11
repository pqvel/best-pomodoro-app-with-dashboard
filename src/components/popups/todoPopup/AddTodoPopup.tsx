import { motion } from "framer-motion";
import { FC, MouseEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Priority = {
  priority: number;
  bgColor: string;
};

const priorities: Priority[] = [
  { priority: 1, bgColor: "bg-redIcon" },
  { priority: 2, bgColor: "bg-orangeIcon" },
  { priority: 3, bgColor: "bg-yellowIcon" },
  { priority: 4, bgColor: "bg-greenIcon" },
  { priority: 5, bgColor: "bg-blueIcon" },
];

type Props = {
  isOpen: boolean;
  closeHandler: (e: MouseEvent<HTMLElement>) => void;
};

type FormValues = {
  priority: number;
  pomidors: number;
  deadline: string;
};

const AddTodoPopup: FC<Props> = ({ isOpen, closeHandler, createTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      priority: 1,
      pomidors: 1,
      deadline: "",
    },
  });

  const addTodoHandler: SubmitHandler<FormValues> = (data) => {
    console.log("Выбранное значение:", data.priority);
  };
  return (
    // <animated.div styles={styles}>
    <>
      <button
        className=" anima fixed left-0 top-0 w-full h-full bg-black opacity-50 z-10 cursor-default"
        onClick={closeHandler}
      ></button>
      <form
        className="fixed flex flex-col left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] rounded-[12px] p-5 bg-white z-20 gap-3 cursor-default"
        onSubmit={handleSubmit(addTodoHandler)}
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <input
              className="border border-grayBorder py-1 px-2 rounded w-80 max-w-xs"
              placeholder="Название"
            />
            <textarea
              className="border border-grayBorder py-1 px-2 rounded h-60 w-80 resize-none"
              placeholder="Описание"
            />
          </div>
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-4">Дополнительно:</legend>
            <fieldset className="flex gap-1">
              <legend className="mb-2 text-sm">Приоритет задачи:</legend>
              {priorities.map(({ priority, bgColor }) => (
                <div key={priority}>
                  <input
                    id={`priority-${priority}`}
                    className="peer hidden"
                    type="radio"
                    value={priority}
                    {...register("priority", {
                      min: 1,
                      max: 100,
                      required: true,
                    })}
                  />
                  <label
                    className={` peer-checked:border-black peer-checked:border-2 ${bgColor} peer-checked:outline flex items-center justify-center w-6 h-6 rounded-[4px] border border-grayBorder text-white cursor-pointer`}
                    htmlFor={`priority-${priority}`}
                  >
                    {priority}
                  </label>
                </div>
              ))}
            </fieldset>

            <label className="flex flex-col gap-2 text-sm">
              Помидоры:
              <input
                className="border border-grayBorder py-1 px-2 rounded w-16"
                type="number"
                {...register("pomidors")}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Срок выполнения:
              <input
                className="border border-grayBorder py-1 px-2 rounded cursor-pointer"
                type="date"
                {...register("deadline")}
              />
            </label>
          </fieldset>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button
            className="rounded border-none w-24 h-9 text-white bg-black"
            onClick={closeHandler}
          >
            Отмена
          </button>
          <button
            type="submit"
            className="rounded border-none w-24 h-9 text-white bg-red"
          >
            Создать
          </button>
        </div>
      </form>
      {/* </animated.div> */}
    </>
  );
};

export default AddTodoPopup;
