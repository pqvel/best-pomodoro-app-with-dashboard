import { FC } from "react";
import type { Settings } from "../../core/redux/slices/userSettingsSlice";
import { PomodoroStatus } from "./Timer";
import { msToTime } from "../../core/utils/msToTime";
// import CircularProgressBar from "../ui/CircularProgressBar";

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
    <div className="flex items-center gap-4">
      <div>
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
      {/* <hr className="block bg-white rounded-2xl w-2 h-60" /> */}

      {/* <CircularProgressbar percentage={55} text={`${2231}%`} />; */}
      {/* <div style={{ width: "100px" }}> */}
      {/* <CircularProgressBar strokeWidth={10} sqSize={200} percentage={55} /> */}
      {/* </div> */}
    </div>
  );
};

export default TimerDisplay;
