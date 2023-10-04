import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getTags } from "../services/getTags";

export function useTags() {
  const { name } = useParams();
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
    ["Tags"],
    ({pageParam = 1 }) => getTags(pageParam, name , date , ordering),
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
