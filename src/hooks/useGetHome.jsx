import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/getHome";

export function useGetHome() {
  const { data, isError, isLoading } = useQuery(["fechingHome"], getHome);

  return {
    data,
    isError,
    isLoading,
  };
}
