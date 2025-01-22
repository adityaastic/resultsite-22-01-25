import { useQuery } from "@tanstack/react-query";
import apiClient, { gameApiClient } from "../constants/api-client";

const useResults = ({ date = '', market = '', active='',refund='' } = {}) => {
  const params = {
    ...(date && {year_month: date }),
    ...(market && { market }),
    ...(active && { active }),
    ...(refund && { refund }),


  }

  const { data: results, error, isLoading, refetch } = useQuery({
    queryKey: [' Results ', params],
    queryFn: () => apiClient.get(`result-list-live-result/`, { params }).then(res => res.data),
  });

  return { results, error, isLoading, refetch }
};

export default useResults

export const useLatestResults = () => {
  const {
    data: latestResults,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Latest Results"],
    queryFn: () => gameApiClient.get(`latest-two-result/`).then((res) => res.data),
  });

  return { latestResults, error, isLoading, refetch };
};