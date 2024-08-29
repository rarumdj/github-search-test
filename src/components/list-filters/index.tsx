import { getSearchName } from "../../common/utils";
import Button from "../ui/buttons";
import { Iprops } from "./types";

const ListFilters = ({ handleClearSearch, params }: Iprops) => {
  return (
    <div className="mt-7">
      <div className="flex items-center gap-3">
        <div>Keywords:</div>

        {Object.entries(params).map((item, index) => (
          <span
            key={index}
            data-testid="badge"
            className="bg-gray-200 border px-3 py-1 whitespace-nowrap rounded-lg text-sm">
            {getSearchName(item[0])}: {item[1]}
          </span>
        ))}

        <Button
          onClick={handleClearSearch}
          className="h-3 ml-auto bg-transparent text-xs font-medium whitespace-nowrap items-center gap-1 flex  w-fit"
          type="button">
          <span className="text-base mb-0.5">x</span> Clear search
        </Button>
      </div>
    </div>
  );
};

export default ListFilters;
