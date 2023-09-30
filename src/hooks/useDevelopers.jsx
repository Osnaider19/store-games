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
  } = useInfiniteQuery(["games"], () => getDevelopers({ pageParam : 1 ,   name} ), {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnMount: false,
  });
  const games = data?.pages?.flatMap((page) => page.games) ?? [];

  return {
    games,
    error,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
  };
}
