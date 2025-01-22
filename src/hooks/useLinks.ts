import { useQuery } from "@tanstack/react-query";
import apiClient from "../constants/api-client";

const useLinks = () => {
  const {
    data: contact,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Contact us"],
    queryFn: () => apiClient.get(`game-setting-list/`).then((res) => res.data),
  });

  return { contact, error, isLoading, refetch };
};

export default useLinks;


