import { FC } from "react";
import MainTemplate from "../templates/MainTemplate";
import ChooseContentImage from "../account/ChooseContentImage";
import PomodoroSettings from "../account/PomodoroSettings";

const AccountPage: FC = () => {
  return (
    <MainTemplate>
      <ChooseContentImage />
      <PomodoroSettings />
    </MainTemplate>
  );
};

export default AccountPage;
