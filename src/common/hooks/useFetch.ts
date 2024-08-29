import { useMutation } from "@tanstack/react-query";
import { get_users } from "../api/get_users";
import { Iparams } from "./types";

export const useFetch = () => {
  const useFetchUsers = () =>
    useMutation({
      mutationFn: (data: Partial<Iparams>) => get_users(data),
    });

  return { useFetchUsers };
};
