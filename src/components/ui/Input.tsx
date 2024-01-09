import { FC } from "react";

type Props = {
  placeholder: string;
};

export const TextInput: FC<Props> = ({ placeholder }) => (
  <input
    className="w-full px-2 py-2 border border-grayBorder rounded-sm"
    placeholder={placeholder}
  />
);

export const Textarea = () => {
  return <Textarea></Textarea>;
};
