import { FC, MouseEvent } from "react";
import { Svg, Button, Tooltip } from "../ui";
import SwitchTextInput from "../switchTextInput/SwitchTextInput";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import ConfirmPopup from "../popups/ConfirmPopup";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { usePopup } from "../../core/hooks/usePopup";
import { setTodoPopupActiveTodo } from "../../core/redux/slices/popupSlice";
import {
  SectionType,
  changeSectionTitle,
  deleteSection,
} from "../../core/redux/slices/dashboardSlice";
import { ITodo } from "../../core/models/TodoModel";

type SectionProps = {
  section: SectionType;
  dashboardId: string;
};

const Section: FC<SectionProps> = ({ section, dashboardId }) => {
  const dispatch = useAppDispatch();
  const { togglePopup, isOpen } = usePopup();

  const openDeleteSectionPopup = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    togglePopup();
  };

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

  const openTodoPopup = (todo: ITodo) => {
    dispatch(
      setTodoPopupActiveTodo({
        dashboardId,
        sectionId: section.id,
        todoId: todo.id,
      })
    );
  };

  return (
    <>
      <div className="flex flex-col gap-3 w-72 mr-5">
        <SwitchTextInput
          className="w-72"
          currentValue={section.title}
          editHandler={editSectionTitle}
        >
          <div className="flex justify-between items-center">
            <Tooltip className=" max-w-[240px]" message={section.title}>
              <h3 className="rounded-4 px-2 py-1 bg-slate-300 bg-opacity-60 rounded-sm font-semibold text-lg truncate">
                {section.title}
              </h3>
            </Tooltip>

            <Button
              className="p-1 ml-2 shrink-0"
              theme="transparent"
              onClick={openDeleteSectionPopup}
            >
              <Svg width={24} height={24} iconId="icon-trash" />
            </Button>
          </div>
        </SwitchTextInput>
        {section.todos.map((todo) => (
          <Todo
            todo={todo}
            openTodoPopup={() => openTodoPopup(todo)}
            key={todo.id}
          />
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
