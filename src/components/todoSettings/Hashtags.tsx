import { FC, useRef, ChangeEvent } from "react";
import Svg from "../ui/Svg";
type HashtagsProps = {
  hashtags: string[];
  setHashtags: (hashtags: string[]) => void;
};

const Hashtags: FC<HashtagsProps> = ({ hashtags, setHashtags }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addHashtagHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setHashtags([...hashtags, e.target.value]);
    }
  };

  const removeHashtagHandler = (removeHashtag: string) => {
    setHashtags(hashtags.filter((hashtag) => hashtag !== removeHashtag));
  };

  return (
    <div>
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
  );
};

export default Hashtags;
