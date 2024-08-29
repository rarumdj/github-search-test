import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
} from "react";

export type InputSize = "medium" | "large";
export type InputVarients = "primary" | "secondary" | "tertiary";

export type InputProps = {
  label?: string;
  size?: InputSize;
  className?: string;
  errorMessage?: string;
  containerClassName?: string;
  ref?: Ref<HTMLInputElement>;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export type DebouncedInputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  prependIcon?: ReactElement;
  prependText?: string;
  prependPosition?: "left" | "right";
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> &
  InputProps;

export type CheckboxProps = {
  id?: string;
  name?: string;
  label?: string;
  className?: string;
  group?: ReactNode;
  ref?: Ref<HTMLInputElement>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
