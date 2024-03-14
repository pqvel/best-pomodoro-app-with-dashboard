import { ChangeEvent, useState } from "react";

type UseInputReturn = {
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const useInput = (defaultValue: string = ""): UseInputReturn => {
  const [value, setValue] = useState<string>(defaultValue);

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    reset,
    changeHandler,
  };
};
