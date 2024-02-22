import { FC, useEffect, useState } from "react";
import { Settings } from "../../core/redux/slices/userSettingsSlice";
import { useAppSelector } from "../../core/redux/app/hooks";
import { useTimer } from "../../core/hooks/useTimer";
import { msToTime } from "../../core/utils/msToTime";
import Button from "../ui/Button";

const enum TimerStatus {
  Timer = "TIMER",
  Pause = "PAUSE",
  Idle = "IDLE",
}

const enum PomodoroStatus {
  Work = "Work",
  Break = "BREAK",
  BigBreak = "BIG_BREAKE",
}

const Timer: FC = () => {
  const settings = useAppSelector((state) => state.settings);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(TimerStatus.Idle);
  const [pomodoroStatus, setPomodoroStatus] = useState<PomodoroStatus>(
    PomodoroStatus.Work
  );

  const timerTime =
    pomodoroStatus === PomodoroStatus.Work
      ? settings.pomodoroTime
      : settings.breakTime;

  const { leftTime, playTimer, pauseTimer, stopTimer } = useTimer({
    timerTime: timerTime,
  });

  useEffect(() => {
    if (leftTime === 0) {
      setTimerStatus(TimerStatus.Idle);
      setPomodoroStatus(PomodoroStatus.Break);
      stopTimer();
    }
  }, [leftTime]);

  const handleTimer = () => {
    setTimerStatus(TimerStatus.Timer);
    playTimer();
  };

  const handleBreak = () => {
    playTimer();
  };

  const handlePause = () => {
    setTimerStatus(TimerStatus.Pause);
    pauseTimer();
  };

  const handleContinue = () => {
    setTimerStatus(TimerStatus.Timer);
    playTimer();
  };

  const handleStop = () => {
    stopTimer();
  };

  const bgColorClass =
    pomodoroStatus === PomodoroStatus.Work ? "bg-red-700" : "bg-green-700";
  return (
    <div
      className={`flex flex-col gap-5 items-center justify-center rounded-lg p-5 shadow-md shadow-gray ${bgColorClass}`}
    >
      <TimerDisplay time={leftTime} settings={settings} />
      <TimerButtons
        status={timerStatus}
        startHadnler={handleTimer}
        pauseHandler={handlePause}
        continueHandler={handleContinue}
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

  // if (status === TimerStatus.Break) {
  //   return (
  //     <div className="flex items-center justify-around gap-3">
  //       <Button onClick={startBreak} theme="white">
  //         Начать
  //       </Button>
  //       <Button onClick={stopHandler} theme="black">
  //         Пропустить
  //       </Button>
  //     </div>
  //   );
  // }

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
