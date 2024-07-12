import { ChangeEvent, FC, useMemo } from "react";
import { Block } from "../ui/Wrappers";
import { Typography } from "../ui";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import {
  setBigBreakTime,
  setBreakTime,
  setCountPomodors,
  setPomodoroTime,
} from "../../core/redux/slices/userSettingsSlice";
import { minToMs, msToMin } from "../../core/utils/format/formatTime";
import { getPluralText } from "../../core/utils/getPluralText";

const PomodoroSettings: FC = () => {
  const { countPomodors, pomodoroTime, breakTime, bigBreakTime } =
    useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const rangeHandler = (action: Function, value: number) => {
    dispatch(action(minToMs(value)));
  };

  const getPluralMinutes = (minutes: number) => {
    return getPluralText(minutes, [
      `${minutes} минута`,
      `${minutes} минуты`,
      `${minutes} минут`,
    ]);
  };

  const pomodoroTimeMinutes = useMemo(() => {
    return msToMin(pomodoroTime);
  }, [pomodoroTime]);

  const breakTimeMinutes = useMemo(() => {
    return msToMin(breakTime);
  }, [breakTime]);

  const bigBreakTimeMinutes = useMemo(() => {
    return msToMin(bigBreakTime);
  }, [bigBreakTime]);

  return (
    <Block className="mb-5">
      <Typography.H2>Настройки Помодоро</Typography.H2>
      <Setting
        title="Количество сессий до большого перерыва"
        value={countPomodors}
        changeHandler={(e) => dispatch(setCountPomodors(+e.target.value))}
        min={1}
        max={10}
        pluralText={getPluralText(countPomodors, [
          `${countPomodors} сессия`,
          `${countPomodors} сессии`,
          `${countPomodors} сессий`,
        ])}
      />
      <Setting
        title="Время работы"
        value={pomodoroTimeMinutes}
        changeHandler={(e) => rangeHandler(setPomodoroTime, +e.target.value)}
        min={5}
        max={60}
        pluralText={getPluralMinutes(pomodoroTimeMinutes)}
      />
      <Setting
        title="Время перерыва"
        value={breakTimeMinutes}
        changeHandler={(e) => rangeHandler(setBreakTime, +e.target.value)}
        min={1}
        max={30}
        pluralText={getPluralMinutes(breakTimeMinutes)}
      />

      <Setting
        title="Время большого перерыва"
        value={bigBreakTimeMinutes}
        changeHandler={(e) => rangeHandler(setBigBreakTime, +e.target.value)}
        min={5}
        max={60}
        pluralText={getPluralMinutes(bigBreakTimeMinutes)}
      />
    </Block>
  );
};

type SettingProps = {
  value: number;
  pluralText: string;
  title: string;
  min: number;
  max: number;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Setting: FC<SettingProps> = ({
  value,
  pluralText,
  title,
  min,
  max,
  changeHandler,
}) => (
  <div className="mb-4">
    <Typography.H3>{title}</Typography.H3>

    <input
      type="range"
      value={value}
      onChange={changeHandler}
      min={min}
      max={max}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
    <div className="text-right text-sm font-medium text-gray-700">
      {pluralText}
    </div>
  </div>
);

export default PomodoroSettings;
