import { FC, MouseEvent } from "react";
import SwitchTextInput from "../../switchTextInput/SwitchTextInput";
import Todo from "../todo/Todo";
import {
  SectionType,
  addTodo,
  changeSectionTitle,
  deleteSection,
} from "../../../core/redux/slices/dashboardSlice";
import Icons from "../../../assets/img/icons.svg";
import { useAppDispatch } from "../../../core/redux/app/hooks";
import AddTodo from "../addTodo/AddTodo";
import AddTodoPopup from "../../popups/todoPopup/AddTodoPopup";
import { usePopup } from "../../../core/hooks/usePopup";

type SectionProps = {
  section: SectionType;
  dashboardId: string;
};

const Section: FC<SectionProps> = ({ section, dashboardId }) => {
  const dispatch = useAppDispatch();
  const addTodoPopup = usePopup();

  const toggleAddTodoPopupHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addTodoPopup.togglePopup();
  };

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
            <button onClick={(e) => e.stopPropagation()}>
              <svg
                width={24}
                height={24}
                onClick={() =>
                  dispatch(
                    deleteSection({ dashboardId, sectionId: section.id })
                  )
                }
              >
                <use href={`${Icons}#icon-trash`}></use>
              </svg>
            </button>
          </div>
        </SwitchTextInput>
        {section.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
        <AddTodo addHandler={addTodoPopup.togglePopup} />
      </div>

      {addTodoPopup.isOpen && (
        <AddTodoPopup
          isOpen={addTodoPopup.isOpen}
          closeHandler={toggleAddTodoPopupHandler}
        />
      )}
    </>
  );
};

export default Section;
