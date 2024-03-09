import { ChangeEvent, useState } from "react";

type UseInputReturn = {
  value: string;
  changeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const useInput = (): UseInputReturn => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return {
    value,
    changeHandler,
  };
};
