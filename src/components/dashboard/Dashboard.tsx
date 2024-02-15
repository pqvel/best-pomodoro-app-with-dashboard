import { FC } from "react";
import SwitchTextInput from "../switchTextInput/SwitchTextInput";
import Section from "./section/Section";
import Tooltip from "../tooltip/Tooltip";
import AddSection from "./addSection/AddSection";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { changeDashboardTitle } from "../../core/redux/slices/dashboardSlice";
import "./dashboard.scss";

const Dashboard: FC = () => {
  const dashboard = useAppSelector((state) => state.dashboard[0]);
  const dispatch = useAppDispatch();
  return (
    <>
      <section className="dashboard flex flex-col h-full overflow-x-auto w-full cursor-grab">
        <SwitchTextInput
          editTextClass="input h2 mb-5"
          value={dashboard.title}
          editHandler={(value) =>
            dispatch(
              changeDashboardTitle({ dashboardId: dashboard.id, title: value })
            )
          }
        >
          <h2 className="h2 mb-5">{dashboard.title}</h2>
        </SwitchTextInput>
        <div className="flex flex-row gap-5 w-fit">
          {dashboard.sections.map((section) => (
            <Section
              section={section}
              dashboardId={dashboard.id}
              key={section.id}
            />
          ))}
          {/* sections end */}
          <AddSection dashboardId={dashboard.id} />
        </div>
        <Tooltip>Нажмите на любой текст который захотите изменить</Tooltip>
      </section>
    </>
  );
};

export default Dashboard;
