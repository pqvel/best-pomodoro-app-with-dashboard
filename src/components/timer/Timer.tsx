import { FC, useEffect, useState } from "react";
import { Settings } from "../../core/redux/slices/userSettingsSlice";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { useTimer } from "../../core/hooks/useTimer";
import { msToTime } from "../../core/utils/msToTime";
import { setNextPomodoro } from "../../core/redux/slices/userSettingsSlice";
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
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(TimerStatus.Idle);
  const [pomodoroStatus, setPomodoroStatus] = useState<PomodoroStatus>(
    PomodoroStatus.Work
  );

  const { leftTime, playTimer, pauseTimer, stopTimer, changeTimerTime } =
    useTimer({
      initialTimerTime: settings.pomodoroTime,
    });

  useEffect(() => {
    if (leftTime !== 0) return;

    handleStop();

    if (
      pomodoroStatus === PomodoroStatus.Break ||
      pomodoroStatus === PomodoroStatus.BigBreak
    ) {
      setPomodoroStatus(PomodoroStatus.Work);
      changeTimerTime(settings.pomodoroTime);
      return;
    }

    if (settings.currentPomodoro === settings.countPomodors) {
      setPomodoroStatus(PomodoroStatus.BigBreak);
      changeTimerTime(settings.bigBreakTime);
      dispatch(setNextPomodoro(1));
    } else {
      setPomodoroStatus(PomodoroStatus.Break);
      changeTimerTime(settings.breakTime);
      dispatch(setNextPomodoro(settings.currentPomodoro + 1));
    }
  }, [leftTime]);

  const handleTimer = () => {
    setTimerStatus(TimerStatus.Timer);
    playTimer();
  };

  const handlePause = () => {
    setTimerStatus(TimerStatus.Pause);
    pauseTimer();
  };

  const handleStop = () => {
    setTimerStatus(TimerStatus.Idle);
    stopTimer();
  };

  const bgColorClass =
    pomodoroStatus === PomodoroStatus.Work ? "bg-red-700" : "bg-green-700";
  return (
    <div
      className={`flex flex-col gap-5 items-center justify-center rounded-lg p-5 shadow-md shadow-gray ${bgColorClass}`}
    >
      <TimerDisplay
        time={leftTime}
        settings={settings}
        pomodoroStatus={pomodoroStatus}
      />
      <TimerButtons
        status={timerStatus}
        startHadnler={handleTimer}
        pauseHandler={handlePause}
        stopHandler={handleStop}
      />
    </div>
  );
};

type TimerDisplayProps = {
  time: number;
  settings: Settings;
  pomodoroStatus: PomodoroStatus;
};

const TimerDisplay: FC<TimerDisplayProps> = ({
  time,
  settings,
  pomodoroStatus,
}) => {
  const { seconds, minutes } = msToTime(time);
  const countPomodorsToBigBreak =
    settings.countPomodors + 1 - settings.currentPomodoro;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-9xl text-white">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <div className="text-lg text-white font-semibold">
        {pomodoroStatus !== PomodoroStatus.BigBreak ? (
          <>До большого перерыва {countPomodorsToBigBreak} помидора</>
        ) : (
          <>Большой перерыв</>
        )}
      </div>
    </div>
  );
};

type TimerButtonsProps = {
  status: TimerStatus;
  pauseHandler: () => void;
  startHadnler: () => void;
  stopHandler: () => void;
};

const TimerButtons: FC<TimerButtonsProps> = ({
  status,
  startHadnler,
  stopHandler,
  pauseHandler,
}) => {
  if (status === TimerStatus.Timer) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button className="py-1 px-4" onClick={pauseHandler} theme="white">
          Пауза
        </Button>
        <Button className="py-1 px-4" onClick={stopHandler} theme="black">
          Закончить
        </Button>
      </div>
    );
  }

  if (status === TimerStatus.Pause) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button className="py-1 px-4" onClick={startHadnler} theme="white">
          Возобновить
        </Button>
        <Button className="py-1 px-4" onClick={stopHandler} theme="black">
          Закончить
        </Button>
      </div>
    );
  }

  if (status === TimerStatus.Idle) {
    return (
      <div className="flex items-center justify-around gap-3">
        <Button className="py-1 px-4" theme="white" onClick={startHadnler}>
          Начать
        </Button>
      </div>
    );
  }
};

export default Timer;
