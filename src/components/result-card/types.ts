import { Iresults } from "../../common/api/types";

export interface Iprops {
  isPending: boolean;
  isSuccess: boolean;
  error?: string;
  data?: Pick<Iresults, "items" | "total_count">;
}
