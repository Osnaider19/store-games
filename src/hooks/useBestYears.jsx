import { useInfiniteQuery } from "@tanstack/react-query";
import { getBestYears } from "../services/getBestYears";
import { useState } from "react";
export function useBestYears() {
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
  } = useInfiniteQuery(
    ["bestYears"],
    ({ pageParam = 1 }) => getBestYears(pageParam, ordering),
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
    refetch,
    hasNextPage,
    isError,
    setOrdering,
    ordering,
    isRefetching,
    remove,
  };
}
