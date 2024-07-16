import { FC, KeyboardEvent, useMemo, useState } from "react";
import { Button, Svg } from "../ui";
import { useSelect } from "../../core/hooks/useSelect";

type HashtagsProps = {
  hashtags: string[];
  addHashtag: (hashtags: string) => void;
};

const Hashtags: FC<HashtagsProps> = ({ hashtags, addHashtag }) => {
  const [value, setValue] = useState<string>("");
  const { isOpen, closeSelect, toggleSelect } = useSelect();

  const filteredHashtags = useMemo(() => {
    if (value.length === 0) return [];
    return hashtags.filter((hashtag) => hashtag.includes(value)).slice(0);
  }, [value]);

  const addHashtagHandler = () => {
    if (value.length >= 2) {
      addHashtag(value);
      setValue("");
      closeSelect();
    }
  };

  const enterPriority = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addHashtagHandler();
    }
  };

  return (
    <div className=" relative">
      <Button
        className="px-0 py-0 w-8 h-8"
        theme="white"
        onClick={toggleSelect}
      >
        <Svg width={18} height={18} iconId="icon-tag" />
      </Button>
      {isOpen && (
        <div
          className="absolute top-9 -left-4 flex flex-col border bg-white border-gray-300 rounded-md whitespace-nowrap overflow-hidden w-64"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex p-2">
            <input
              className="bg-gray-50 mr-2 h-8 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              type="text"
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={enterPriority}
              value={value}
            />
            <Button
              className="px-0 py-0 w-full max-w-[32px] h-8"
              theme="white"
              onClick={addHashtagHandler}
            >
              <Svg width={18} height={18} iconId="icon-plus" />
            </Button>
          </div>
          {filteredHashtags.length > 0 && (
            <div className="flex flex-col border-t border-t-gray-300">
              {filteredHashtags.map((hashtag) => (
                <label className=" cursor-pointer" key={hashtag}>
                  {hashtag}
                  <input
                    className="hidden"
                    name="hashtag"
                    type="radio"
                    value={hashtag}
                  />
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hashtags;
