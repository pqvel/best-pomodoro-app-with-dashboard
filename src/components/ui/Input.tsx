import { ChangeEvent, FC, LegacyRef } from "react";

interface InputProps {
  placeholder?: string;
  ref?: LegacyRef<HTMLInputElement>;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface TextInputProps extends InputProps {}

export const TextInput: FC<TextInputProps> = ({
  placeholder = "",
  ref = null,
  value,
  onChange,
}) => (
  <input
    className="bg-gray-50 mr-2 h-8 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
    placeholder={placeholder}
    ref={ref}
    value={value}
    onChange={onChange}
  />
);

export const Input = {
  TextInput,
};
