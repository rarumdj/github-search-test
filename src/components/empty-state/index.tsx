import React from "react";
import { Iprops } from "./types";
import classNames from "classnames";

const EmptyState = ({ message, isError }: Iprops) => {
  return (
    <div
      data-testid="empty-state"
      className="min-h-44 w-full flex  items-center justify-center">
      <p
        className={classNames("m-auto h-full flex text-center md:text-sm text-xs", {
          "text-red-600": isError,
        })}>
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
