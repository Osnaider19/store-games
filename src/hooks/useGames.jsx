import { useInfiniteQuery } from "@tanstack/react-query";
import { getGames } from "../services/getGames";

export function useGames() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError
  } = useInfiniteQuery(["games"], getGames, {
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
