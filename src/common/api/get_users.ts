import { Iparams } from "../hooks/types";
import { stringifyParameters } from "../utils";
import axiosClient from "./axiosClient";
import { Iresults } from "./types";

export const get_users = async (
  params?: Partial<Iparams>
): Promise<Iresults> => {
  const param = stringifyParameters(params);
  const { data } = await axiosClient.get(`/search/users${param}`);
  return data;
};
