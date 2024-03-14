import { FC } from "react";
import { Tooltip } from "../ui";
import SwitchTextInput from "../switchTextInput/SwitchTextInput";
import Section from "./Section";
import AddSectionForm from "../forms/AddSectionForm";
import { addSection } from "../../core/redux/slices/dashboardSlice";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { changeDashboardTitle } from "../../core/redux/slices/dashboardSlice";

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector((state) => state.dashboard[0]);

  const editHandler = (title: string) => {
    dispatch(changeDashboardTitle({ dashboardId: dashboard.id, title }));
  };

  const createSection = (title: string) => {
    dispatch(addSection({ dashboardId: dashboard.id, title: title }));
  };

  return (
    <section className="flex flex-col bg-gray-400 bg-opacity-10 h-full p-5 m-5 rounded-lg w-full cursor-grab">
      <SwitchTextInput
        className="mb-4 w-72"
        currentValue={dashboard.title}
        editHandler={editHandler}
      >
        <Tooltip message={dashboard.title}>
          <h2 className="rounded-4 px-2 py-1 bg-slate-300 bg-opacity-60 rounded-sm text-2xl font-bold truncate">
            {dashboard.title}
          </h2>
        </Tooltip>
      </SwitchTextInput>
      <div className="flex flex-row">
        {dashboard.sections.map((section) => (
          <Section
            section={section}
            dashboardId={dashboard.id}
            key={section.id}
          />
        ))}
        <AddSectionForm createSection={createSection} />
      </div>
    </section>
  );
};

export default Dashboard;
