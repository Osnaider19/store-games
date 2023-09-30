import { useInfiniteQuery } from "@tanstack/react-query";
import { getDevelopers } from "../services/getDevelopers";
import { useParams } from "react-router-dom";

export function useDevelopers() {
  const { name } = useParams();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    refetch,
  } = useInfiniteQuery(
    ["developers"],
    ({pageParam = 1 }) => getDevelopers(pageParam, name),
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    }
  );
  

  return {
    data,
    error,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
    refetch,
  };
}
