import { FC, useState, useEffect } from "react";
import { useInterval } from "../../core/hooks/useInterval";
import { userSettingsSelector } from "../../core/redux/slices/userSettingsSlice";
import "./timer.scss";
import { useAppSelector } from "../../core/redux/app/hooks";

enum TimerMode {
  Pomodoro = "POMODORO",
  Timer = "TIMER",
}

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
  const bgColorClass = status === TimerStatus.Break ? "bg-green" : "red";
  return (
    <div className={`timer w-full h-full m-auto ${bgColorClass}`}>
      <TimerDisplay time={currTimeValue} />
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

const TimerDisplay: FC<{ time: number }> = ({ time }) => {
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
  const seconds = `${time % 60}`.padStart(2, "0");

  return (
    <div className="timer__result flex justify-center items-center">
      {minutes}:{seconds}
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
      <div className="flex justify-around">
        <button className="timer__btn" onClick={pauseHandler}>
          Пауза
        </button>
        <button className="timer__btn" onClick={stopHandler}>
          Закончить
        </button>
      </div>
    );
  }

  if (status === TimerStatus.Pause) {
    return (
      <div className="flex justify-around">
        <button className="timer__btn" onClick={continueHandler}>
          Возобновить
        </button>
        <button className="timer__btn" onClick={stopHandler}>
          Закончить
        </button>
      </div>
    );
  }

  if (status === TimerStatus.Break) {
    return (
      <div className="flex justify-around">
        <button className="timer__btn" onClick={startBreak}>
          Начать
        </button>
        <button className="timer__btn" onClick={stopHandler}>
          Пропустить
        </button>
      </div>
    );
  }

  if (status === TimerStatus.Idle) {
    return (
      <div className="flex justify-around">
        <button className="timer__btn" onClick={startHadnler}>
          Начать
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-around">
      <button className="timer__btn" onClick={startHadnler}>
        Начать
      </button>
      {/* <button className="timer__btn" onClick={pauseHandler}>
        Пауза
      </button> */}
    </div>
  );
};

export default Timer;
