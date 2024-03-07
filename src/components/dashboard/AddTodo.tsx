import { ChangeEvent, FC, LegacyRef, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/redux/app/hooks";
import { setTodoPopupSectionId } from "../../core/redux/slices/popupSlice";
import { useForm } from "react-hook-form";
import { createTodo } from "../../core/redux/slices/dashboardSlice";
import { setScrollHeight } from "../../core/utils/setScrollHeight";
import Svg from "../ui/Svg";
import Hashtags from "../todoSettings/Hashtags";
import Priorities from "../todoSettings/Priorities";
import Button from "../ui/Button";

// тултип это подсказка, нужно поменять названия
type AddTodoProps = {
  dashboardId: string;
  sectionId: string;
};

const AddTodo: FC<AddTodoProps> = ({ dashboardId, sectionId }) => {
  const dispatch = useAppDispatch();

  const todoPopupSectionId = useAppSelector(
    (state) => state.popup.todoPopupSectionId
  );

  const { handleSubmit } = useForm();

  const handleCreateTodo = () => {};

  if (sectionId !== todoPopupSectionId) {
    return (
      <AddTodoButton
        openTodoForm={() => dispatch(setTodoPopupSectionId(sectionId))}
      />
    );
  }

  return (
    <AddTodoForm
      handleCreateTodo={handleSubmit(handleCreateTodo)}
      closeForm={() => dispatch(setTodoPopupSectionId(""))}
    />
  );
};

type AddTodoFormProps = {
  handleCreateTodo: () => void;
  closeForm: () => void;
};

const AddTodoForm: FC<AddTodoFormProps> = ({ handleCreateTodo, closeForm }) => {
  const [priority, setPriority] = useState<number>(4);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const addHashtag = (newHashtag: string) => {
    setHashtags([...hashtags, newHashtag]);
  };

  const removeHashtag = (hashtag: string) => {
    setHashtags((hashtags) => hashtags.filter((h) => h !== hashtag));
  };

  return (
    <form
      className="bg-white rounded-lg border border-gray-300 p-3"
      onSubmit={handleCreateTodo}
    >
      <input
        className="p-0 w-full font-semibold outline-none mb-1"
        placeholder="Заголовок"
      />
      <textarea
        className="p-0 w-full text-sm outline-none max-h-40 mb-3 resize-none"
        placeholder="Описание"
        onChange={setScrollHeight}
      />
      <div className="flex"></div>
      <div className="flex">
        <Priorities setPriority={setPriority} activePriority={priority} />
        <Hashtags
          addHashtag={addHashtag}
          hashtags={hashtags}
          isActive={false}
        />
        <div className="flex ml-auto">
          <Button
            className="px-0 py-0 h-8 w-8 mr-2"
            theme="gray"
            onClick={closeForm}
          >
            <Svg width={20} height={20} iconId="icon-close" />
          </Button>
          <Button className="px-0 py-0 h-8 w-8" onClick={handleCreateTodo}>
            <Svg width={20} height={20} iconId="icon-plus" />
          </Button>
        </div>
      </div>
    </form>
  );
};

type AddTodoButtonProps = {
  openTodoForm: () => void;
};

const AddTodoButton: FC<AddTodoButtonProps> = ({ openTodoForm }) => (
  <button className="flex items-center gap-3" onClick={openTodoForm}>
    <Svg width={20} height={20} iconId="icon-plus" />
    Добавить задачу
  </button>
);

export default AddTodo;
