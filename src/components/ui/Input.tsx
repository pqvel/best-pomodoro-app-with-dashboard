import { ChangeEvent, FC, LegacyRef } from "react";
import { Svg } from "./index";

interface InputProps {
  className?: string;
  placeholder?: string;
  ref?: LegacyRef<HTMLInputElement>;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface TextInputProps extends InputProps {}

const TextInput: FC<TextInputProps> = ({
  className = "",
  placeholder = "",
  ref = null,
  value,
  onChange,
}) => (
  <input
    className={`bg-gray-50 mr-2 h-8 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ${className}`}
    placeholder={placeholder}
    ref={ref}
    value={value}
    onChange={onChange}
  />
);

interface CheckboxInputProps extends InputProps {
  // checked: boolean;
}

const CheckboxInput: FC<CheckboxInputProps> = ({
  className = "",
  // checked,
  ref = null,
  value = "",
  onChange,
}) => (
  <div className={`inline-flex items-center ${className}`}>
    <label className="relative flex items-centerrounded-full cursor-pointer">
      <input
        type="checkbox"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
        // checked={checked}
        value={value}
        ref={ref}
        onChange={onChange}
      />
      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <Svg width={16} height={16} iconId="icon-check" />
      </span>
    </label>
  </div>
);

export const Input = {
  TextInput,
  CheckboxInput,
};
