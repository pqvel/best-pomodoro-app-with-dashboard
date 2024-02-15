import { FC } from "react";
import SwitchTextInput from "../../switchTextInput/SwitchTextInput";
import Todo from "../todo/Todo";
import AddTodo from "../AddTodo";
import Svg from "../../ui/Svg";
import { useAppDispatch } from "../../../core/redux/app/hooks";
import {
  SectionType,
  createTodo,
  changeSectionTitle,
  deleteSection,
} from "../../../core/redux/slices/dashboardSlice";
import { setIsOpenTodoPopup } from "../../../core/redux/slices/popupSlice";

type SectionProps = {
  section: SectionType;
  dashboardId: string;
};

const Section: FC<SectionProps> = ({ section, dashboardId }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="dashboard__section flex flex-col gap-3">
        <SwitchTextInput
          editTextClass="input h3"
          value={section.title}
          editHandler={(value) =>
            dispatch(
              changeSectionTitle({
                dashboardId,
                sectionId: section.id,
                title: value,
              })
            )
          }
        >
          <div className="flex justify-between items-center">
            <h3 className="h3 rounded-4 px-2 py-1 bg-[#dddddd]">
              {section.title}
            </h3>
            <span onClick={(e) => e.stopPropagation()}>2</span>
            <button
              onClick={() =>
                dispatch(deleteSection({ dashboardId, sectionId: section.id }))
              }
            >
              <Svg width={24} height={24} iconId="icon-trash" />
            </button>
          </div>
        </SwitchTextInput>
        {section.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
        <AddTodo dashboardId={dashboardId} sectionId={section.id} />
      </div>
    </>
  );
};

export default Section;
