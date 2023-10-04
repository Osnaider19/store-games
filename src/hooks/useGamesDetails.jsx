import { useQuery } from "@tanstack/react-query";
import { getGamesDetails } from "../services/getDetailsGames";
import { useParams } from "react-router-dom";
export function useGamesDetails() {
  const { id } = useParams();
  const { data, isLoading, refetch , isFetching } = useQuery(
    ["detailsGames"],
    () => getGamesDetails(id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
  return {
    data,
    isLoading,
    refetch,
    isFetching,
  };
}
