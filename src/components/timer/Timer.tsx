import { FC, useEffect, useState } from "react";
import { Settings } from "../../core/redux/slices/userSettingsSlice";
import { useAppSelector } from "../../core/redux/app/hooks";
import { useTimer } from "../../core/hooks/useTImer";
import { msToTime } from "../../core/utils/msToTime";
import Button from "../ui/Button";

enum TimerStatus {
  Break = "BREAK",
  Timer = "TIMER",
  Pause = "PAUSE",
  Idle = "IDLE",
}

const Timer: FC = () => {
  const settings = useAppSelector((state) => state.settings);
  const [status, setStatus] = useState<TimerStatus>(TimerStatus.Idle);

  const { leftTime, playTimer, pauseTimer, stopTimer } = useTimer({
    timerTime: settings.pomodoroTime,
  });

  useEffect(() => {
    if (leftTime <= 0) setStatus(TimerStatus.Idle);
  }, [leftTime]);

  const handleTimer = () => {
    setStatus(TimerStatus.Timer);
    playTimer();
  };

  const handleBreak = () => {
    playTimer();
  };

  const handlePause = () => {
    pauseTimer();
  };

  const handleStop = () => {
    stopTimer();
  };

  const bgColorClass =
    status === TimerStatus.Break ? "bg-green-700" : "bg-red-700";
  return (
    <div
      className={`flex flex-col gap-5 items-center justify-center rounded-lg p-5 shadow-md shadow-gray ${bgColorClass}`}
    >
      <TimerDisplay time={leftTime} settings={settings} />
      <TimerButtons
        status={status}
        startHadnler={handleTimer}
        pauseHandler={handlePause}
        continueHandler={playTimer}
        stopHandler={handleStop}
        startBreak={handleBreak}
      />
    </div>
  );
};

const TimerDisplay: FC<{ time: number; settings: Settings }> = ({
  time,
  settings,
}) => {
  const { seconds, minutes } = msToTime(time);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-9xl text-white">
        <span>{minutes}</span>:<span>{seconds}</span>
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
        <Button onClick={stopHandler} theme="black">
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
        <Button onClick={stopHandler} theme="black">
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
