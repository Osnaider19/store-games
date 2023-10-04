import { useInfiniteQuery } from "@tanstack/react-query";
import { getGenres } from "../services/getGenres";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function useGenres() {
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
    ["Genres"],
    ({pageParam = 1 }) => getGenres(pageParam, name , date , ordering),
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
