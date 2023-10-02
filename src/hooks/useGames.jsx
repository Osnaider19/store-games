import { useInfiniteQuery } from "@tanstack/react-query";
import { getGames } from "../services/getGames";
import { useState } from "react";
export function useGames() {
  const [ordering, setOrdering] = useState(null);
  const [date, setDate] = useState(null);
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
    ["games"],
    ({ pageParam = 1 }) => getGames(pageParam, ordering , date),
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
    date,
    setDate,
  };
}
