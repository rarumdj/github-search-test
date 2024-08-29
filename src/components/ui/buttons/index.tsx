import classNames from "classnames";
import { forwardRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import { buttonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, buttonProps>((props, ref) => {
  const { children, className, loading, ...rest } = props;

  return (
    <button
      ref={ref}
      className={classNames(
        "medium inline-flex w-full items-center justify-center rounded p-3 xl:p-4 text-sm font-semibold transition-all border group relative overflow-hidden active:opacity-90 bg-green-400 text-black disabled:bg-green-200 disabled:opacity-30 border-transparent",
        rest.disabled ? "cursor-not-allowed" : "",
        { [className as string]: className }
      )}
      aria-busy={loading}
      aria-live={loading ? "assertive" : "off"}
      aria-disabled={rest.disabled}
      {...rest}>
      {loading ? (
        <ThreeDots height={14} color="#fff" aria-label="Loading spinner" />
      ) : (
        children
      )}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  );
});

export default Button;
