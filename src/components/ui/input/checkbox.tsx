import classNames from "classnames";
import { forwardRef } from "react";
import { CheckboxProps } from "./types";

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, label, className = "", ...props }, ref) => {
    const isRadio = props.type === "radio";

    return (
      <div
        className={classNames(`relative flex flex-col justify-center`, {
          [className as string]: className,
        })}>
        <div className="flex items-center">
          <input
            id={id ?? name}
            ref={ref}
            name={name}
            aria-label={label}
            type={isRadio ? "radio" : "checkbox"}
            className={classNames(
              "relative mr-2 inline-flex h-4 w-4 cursor-pointer rounded  border border-primary-200 bg-primary-50 text-primary-100 outline-none checked:border-primary-200 checked:bg-primary-50 checked:text-primary-50 hover:border-primary-200 checked:hover:border-primary-200 checked:hover:bg-primary-50 focus:ring-primary-100 active:hover:border-primary-200 active:hover:bg-primary-50",
              props.type === "radio" ? "custom-radio !rounded-full" : "!rounded"
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={name}
              className="leading-1 text-xs font-semibold uppercase text-neutral-900">
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);
