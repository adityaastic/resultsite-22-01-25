import { useQuery } from "@tanstack/react-query";
import apiClient from "../constants/api-client";

const useAppsAndGames = () => {
  const {
    data: videos,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Videos"],
    queryFn: () => apiClient.get(`app-and-game/`).then((res) => res.data),
  });

  return { videos, error, isLoading, refetch };
};

export default useAppsAndGames;


