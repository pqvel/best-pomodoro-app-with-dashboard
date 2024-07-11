import { FC } from "react";
import { Block } from "../ui/Wrappers";
import { Typography } from "../ui";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import {
  setCountPomodors,
  setPomodoroTime,
} from "../../core/redux/slices/userSettingsSlice";

const PomodoroSettings: FC = () => {
  const { countPomodors, pomodoroTime, breakTime, bigBreakTime } =
    useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  return (
    <Block className="mb-5">
      <Typography.H2>Настройки Помодоро</Typography.H2>
      <div className="mb-4">
        <Typography.H3>Количество помидоров до большого перерыва</Typography.H3>
        <input
          type="number"
          value={countPomodors}
          onChange={() => dispatch(setCountPomodors(countPomodors))}
          className="block p-2 w-full text-sm border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <Typography.H3>Время Помодоро (минуты)</Typography.H3>
        <input
          type="range"
          value={pomodoroTime}
          onChange={() => dispatch(setPomodoroTime(pomodoroTime))}
          min="1"
          max="60"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-right text-sm font-medium text-gray-700">
          {pomodoroTime} минут
        </div>
      </div>

      <div className="mb-4">
        <Typography.H3>Время Перерыва (минуты)</Typography.H3>

        <input
          type="range"
          value={breakTime}
          // onChange={handleChange(setBreakTime)}
          min="1"
          max="30"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-right text-sm font-medium text-gray-700">
          {/* {breakTime}  */}
          минут
        </div>
      </div>

      <div className="mb-4">
        <Typography.H3>Время Большого Перерыва (минуты)</Typography.H3>

        <input
          type="range"
          value={bigBreakTime}
          // onChange={handleChange(setBigBreakTime)}
          min="5"
          max="60"
          step="5"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-right text-sm font-medium text-gray-700">
          {/* {bigBreakTime} минут */} минут
        </div>
      </div>
    </Block>
  );
};

export default PomodoroSettings;
