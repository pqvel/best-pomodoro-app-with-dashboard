import { FC, useRef, ChangeEvent } from "react";
import { Svg } from "@/components/UI";

type HashtagsProps = {
  hashtags: string[];
  setHashtags: (hashtags: string[]) => void;
  isActive: boolean;
};

const Hashtags: FC<HashtagsProps> = ({ hashtags, isActive, setHashtags }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(isActive);
  const addHashtagHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setHashtags([...hashtags, e.target.value]);
    }
  };

  const removeHashtagHandler = (removeHashtag: string) => {
    setHashtags(hashtags.filter((hashtag) => hashtag !== removeHashtag));
  };

  return (
    <div className=" relative">
      <button className="flex items-center justify-center rounded border border-gray-300 bg-slate-50 hover:bg-slate-100 transition outline-none text-black w-6 h-6 m-0 p-0">
        <Svg width={16} height={16} iconId="icon-tag" />
      </button>
      {isActive && (
        <div className="absolute top-full left-0 bg-white p-2">
          <ul>
            {hashtags.map((hashtag) => (
              <li className=" flex bg-slate-950 rounded-2xl">
                {hashtag}
                <button onClick={() => removeHashtagHandler(hashtag)}>
                  <Svg
                    className="text-white"
                    width={12}
                    height={12}
                    iconId="icon-close"
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex">
            <input ref={inputRef} type="text" />
            <button>
              <Svg width={16} height={16} iconId="icon-plus" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hashtags;
