import classNames from "classnames";
import { forwardRef } from "react";
import { InputProps, InputSize } from "./types";

const sizeMap: { [key in InputSize]: string } = {
  medium: "p-3.5 text-base",
  large: "p-4.5 text-base",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      type = "text",
      size = "medium",
      className = "",
      placeholder,
      containerClassName = "",
      errorMessage,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(errorMessage);

    return (
      <div
        data-testid="input-container"
        className={classNames("relative", containerClassName)}>
        {label && (
          <label
            htmlFor={props.name}
            className="text-xs font-semibold uppercase leading-7 text-neutral-900">
            {label}
          </label>
        )}
        <div className="relative flex">
          <input
            ref={ref}
            id={id || props.name}
            type={type}
            aria-label={label}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${props.name}-error` : undefined}
            placeholder={placeholder}
            className={classNames(
              "!relative inline-flex w-full border rounded border-gray-300 bg-transparent leading-none text-gray-700 placeholder-gray-500 transition-colors duration-300 ease-in-out placeholder:text-sm focus:border-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-30",
              sizeMap[size],
              className,
              props.disabled
                ? "!hover:border-none !border-gray-300/50 !text-[#929090]"
                : hasError
                ? "border-red-500"
                : ""
            )}
            {...props}
          />
        </div>
        {hasError && (
          <span
            id={`${props.name}-error`}
            role="alert"
            data-testid="validation-alert"
            className="text-red-500 text-xs mt-1">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);
