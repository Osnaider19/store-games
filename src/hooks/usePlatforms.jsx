import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPlatforms } from "../services/getPlatforms";

export function usePlatforms() {
  const { id } = useParams();
  const [date , setDate] = useState(null);
  const [ordering , setOrdering] = useState(null);
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
    ["Platforms"],
    ({pageParam = 1 }) => getPlatforms(pageParam, id , date , ordering),
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
    date, 
    setDate, 
    ordering ,
    setOrdering,
  };
}
