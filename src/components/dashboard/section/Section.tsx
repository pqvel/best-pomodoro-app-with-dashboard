import { FC } from "react";
import { Svg, Button } from "../../ui";
import SwitchTextInput from "../../switchTextInput/SwitchTextInput";
import Todo from "../todo/Todo";
import AddTodo from "../AddTodo";
import ConfirmPopup from "../../popups/ConfirmPopup";
import { useAppDispatch } from "../../../core/redux/app/hooks";
import { usePopup } from "../../../core/hooks/usePopup";
import {
  SectionType,
  changeSectionTitle,
  deleteSection,
} from "../../../core/redux/slices/dashboardSlice";

type SectionProps = {
  section: SectionType;
  dashboardId: string;
};

const Section: FC<SectionProps> = ({ section, dashboardId }) => {
  const dispatch = useAppDispatch();
  const { togglePopup, isOpen } = usePopup();

  const deleteSectionHandler = () => {
    dispatch(deleteSection({ dashboardId, sectionId: section.id }));
  };

  const editSectionTitle = (title: string) => {
    dispatch(
      changeSectionTitle({
        dashboardId,
        sectionId: section.id,
        title,
      })
    );
  };

  return (
    <>
      <div className="dashboard__section flex flex-col gap-3 w-72">
        <SwitchTextInput
          editTextClass="w-72"
          value={section.title}
          editHandler={editSectionTitle}
        >
          <div className="flex justify-between items-center">
            <h3 className="h3 rounded-4 px-2 py-1 bg-[#dddddd]">
              {section.title}
            </h3>
            <span onClick={(e) => e.stopPropagation()}>2</span>
            <Button className="p-1" theme="transparent" onClick={togglePopup}>
              <Svg width={24} height={24} iconId="icon-trash" />
            </Button>
          </div>
        </SwitchTextInput>
        {section.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
        <AddTodo dashboardId={dashboardId} sectionId={section.id} />
      </div>
      {isOpen && (
        <ConfirmPopup
          title="Вы уверены?"
          descr="Все задачи из текущей секции будут удалены без возможности восстановления."
          iconId="icon-alert"
          confirmHandler={deleteSectionHandler}
          closeHandler={togglePopup}
        />
      )}
    </>
  );
};

export default Section;
