import { FC, useState } from "react";
import { useInterval } from "../../core/hooks/useInterval";
import { Settings } from "../../core/redux/slices/userSettingsSlice";

import Button from "../ui/Button";
import { useAppSelector } from "../../core/redux/app/hooks";

enum TimerStatus {
  Break = "BREAK",
  Timer = "TIMER",
  Pause = "PAUSE",
  Idle = "IDLE",
}

const Timer: FC = () => {
  const settings = useAppSelector((state) => state.settings);
  const { startInterval, stopInterval } = useInterval();
  const [currTimeValue, setCurrTimeValue] = useState<number>(
    settings.pomodoroTime
  );
  const [status, setStatus] = useState<TimerStatus>(TimerStatus.Idle);

  const start = (): void => {
    const startTime = Date.now();

    setStatus(TimerStatus.Timer);
    startInterval(() => {
      const currTime = Math.round(
        (startTime - Date.now()) / 1000 + settings.pomodoroTime
      );
      setCurrTimeValue(currTime);

      if (currTime <= 0) {
        setStatus(TimerStatus.Break);
        setCurrTimeValue(settings.breakTime);
        stopInterval();
      }
    }, 1000);
  };

  const pause = () => {
    setStatus(TimerStatus.Pause);
    stopInterval();
  };

  const stop = () => {
    setStatus(TimerStatus.Idle);
    setCurrTimeValue(settings.pomodoroTime);
    stopInterval();
  };

  const continueTimer = () => {
    const startTime = Date.now();
    setStatus(TimerStatus.Timer);
    startInterval(() => {
      const newCurrTime =
        Math.floor((startTime - Date.now()) / 1000) + currTimeValue;
      setCurrTimeValue(newCurrTime);
      if (currTimeValue <= 0) {
        setStatus(TimerStatus.Break);
        setCurrTimeValue(settings.breakTime);
        stopInterval();
      }
    }, 1000);
  };

  const startBreak = () => {
    const startTime = Date.now();
    startInterval(() => {
      const newCurrTime =
        Math.floor((startTime - Date.now()) / 1000) + currTimeValue;
      setCurrTimeValue(newCurrTime);
      if (currTimeValue <= 0) {
        setStatus(TimerStatus.Idle);
        setCurrTimeValue(settings.pomodoroTime);
        stopInterval();
      }
    }, 1000);
  };
  const bgColorClass = status === TimerStatus.Break ? "bg-green" : "bg-red";
  return (
    <div
      className={`flex flex-col gap-5 items-center justify-center rounded-lg p-5 shadow-md shadow-gray ${bgColorClass}`}
    >
      <TimerDisplay time={currTimeValue} settings={settings} />
      <TimerButtons
        status={status}
        startHadnler={start}
        pauseHandler={pause}
        continueHandler={continueTimer}
        stopHandler={stop}
        startBreak={startBreak}
      />
    </div>
  );
};

const TimerDisplay: FC<{ time: number; settings: Settings }> = ({
  time,
  settings,
}) => {
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
  const seconds = `${time % 60}`.padStart(2, "0");

  return (
    <div className="flex flex-col gap-4">
      <div className="text-9xl text-white font-semibold">
        {minutes}:{seconds}
      </div>
      <div className="  text-lg text-white font-semibold">
        До большого перерыва {settings.countPomodors - settings.currentPomodoro}{" "}
        помидора
      </div>
    </div>
  );
};

type TimerButtonsProps = {
  status: TimerStatus;
  pauseHandler: () => void;
  startHadnler: () => void;
  stopHandler: () => void;
  continueHandler: () => void;
  startBreak: () => void;
};

const TimerButtons: FC<TimerButtonsProps> = ({
  status,
  startHadnler,
  continueHandler,
  stopHandler,
  pauseHandler,
  startBreak,
}) => {
  if (status === TimerStatus.Timer) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button onClick={pauseHandler} theme="white">
          Пауза
        </Button>
        <Button onClick={stopHandler} theme="black">
          Закончить
        </Button>
      </div>
    );
  }

  if (status === TimerStatus.Pause) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button onClick={continueHandler} theme="white">
          Возобновить
        </Button>
        <Button onClick={stopHandler} theme="white">
          Закончить
        </Button>
      </div>
    );
  }

  if (status === TimerStatus.Break) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button onClick={startBreak} theme="white">
          Начать
        </Button>
        <Button onClick={stopHandler} theme="white">
          Пропустить
        </Button>
      </div>
    );
  }

  if (status === TimerStatus.Idle) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button onClick={startHadnler} theme="white">
          Начать
        </Button>
      </div>
    );
  }
};

export default Timer;
