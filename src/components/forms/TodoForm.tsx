import { useState, FC, useRef } from "react";
import { Button, Svg } from "../ui";
import Priorities from "../todoSettings/Priorities";
import Hashtags from "../todoSettings/Hashtags";
import { useAppDispatch } from "../../core/redux/app/hooks";
import { setScrollHeight } from "../../core/utils/setScrollHeight";
import { createTodo } from "../../core/redux/slices/dashboardSlice";
import { TodoModel } from "../../core/models/TodoModel";

type TodoFormProps = {
  dashboardId: string;
  sectionId: string;
  closeForm: () => void;
};

const TodoForm: FC<TodoFormProps> = ({ closeForm, dashboardId, sectionId }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [priority, setPriority] = useState<number>(4);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const addTodo = () => {
    const todo = new TodoModel({
      title,
      descr,
      priority,
      hashtags,
    });

    dispatch(
      createTodo({
        dashboardId,
        sectionId,
        todo,
      })
    );

    closeForm();
  };

  const addHashtag = (newHashtag: string) => {
    if (hashtags.includes(newHashtag)) return;
    setHashtags([...hashtags, newHashtag]);
  };

  const removeHashtag = (hashtag: string) => {
    setHashtags((hashtags) => hashtags.filter((h) => h !== hashtag));
  };

  return (
    <form
      className="bg-white rounded-lg border border-gray-300 p-3"
      onSubmit={addTodo}
    >
      <input
        className="p-0 w-full font-semibold outline-none mb-1"
        placeholder="Заголовок"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="p-0 w-full text-sm outline-none max-h-40 mb-3 resize-none  scrollbar-thumb-sky-700 scrollbar-track-sky-300"
        placeholder="Описание"
        onChange={(e) => {
          setScrollHeight(e);
          setDescr(e.target.value);
        }}
      />
      {hashtags && (
        <div className="flex flex-wrap mb-2">
          {hashtags.map((hashtag) => (
            <Button
              className="px-2 rounded-xl mb-1 mr-1"
              theme="gray"
              key={hashtag}
              onClick={() => removeHashtag(hashtag)}
            >
              @{hashtag}
              <Svg
                className="ml-1"
                height={14}
                width={14}
                iconId="icon-close"
              />
            </Button>
          ))}
        </div>
      )}

      <div className="flex">
        <Priorities setPriority={setPriority} activePriority={priority} />
        <Hashtags addHashtag={addHashtag} hashtags={hashtags} />
        <div className="flex ml-auto">
          <Button
            className="px-0 py-0 h-8 w-8 mr-2"
            theme="gray"
            onClick={closeForm}
          >
            <Svg width={20} height={20} iconId="icon-close" />
          </Button>
          <Button className="px-0 py-0 h-8 w-8" onClick={addTodo}>
            <Svg width={20} height={20} iconId="icon-plus" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
