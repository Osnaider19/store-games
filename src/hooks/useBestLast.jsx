import { useInfiniteQuery } from "@tanstack/react-query";
import { getBestLast } from "../services/getBestLast";
import { useState } from "react";
export function useBestLast() {
  const [ordering, setOrdering] = useState(null);
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    refetch,
    isRefetching,
    remove,
    isSuccess
  } = useInfiniteQuery(
    ["bestLast"],
    ({ pageParam = 1 }) => getBestLast(pageParam, ordering),
    {
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
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
    refetch,
    hasNextPage,
    isError,
    setOrdering,
    ordering,
    isRefetching,
    remove,
    isSuccess
  };
}
