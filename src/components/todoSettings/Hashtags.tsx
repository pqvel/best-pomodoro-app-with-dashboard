import { FC, useRef, MouseEvent, useMemo } from "react";
import { Button, Svg } from "../ui";
import { useSelect } from "../../core/hooks/useSelect";

type HashtagsProps = {
  hashtags: string[];
  addHashtag: (hashtags: string) => void;
  isActive: boolean;
};

const Hashtags: FC<HashtagsProps> = ({ hashtags, isActive, addHashtag }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOpen, openSelect, closeSelect, toggleSelect } = useSelect();

  const filteredHashtags = useMemo(() => {
    return hashtags.filter((hashtag) => hashtag !== inputRef.current!.value);
  }, []);

  const addHashtagHandler = () => {
    const hashtag = inputRef.current!.value;

    if (hashtag.length >= 2) {
      addHashtag(hashtag);
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
          onClick={openSelect}
        >
          <div className="flex p-2 border-b border-b-gray-300">
            <input
              className="bg-gray-50 mr-2 h-8 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              type="text"
              ref={inputRef}
            />
            <Button
              className="px-0 py-0 w-full max-w-8 h-8"
              theme="white"
              onClick={addHashtagHandler}
            >
              <Svg width={18} height={18} iconId="icon-plus" />
            </Button>
          </div>
          <ul className="flex flex-col ">
            {hashtags.fil.map((hashtag) => (
              <li className=" flex bg-slate-950 rounded-2xl">{hashtag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hashtags;
