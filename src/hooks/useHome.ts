import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient, { gameApiClient } from "../constants/api-client";
import { IContactCard } from "../Types";

export const useHeaderTicker = () => {
  const {
    data: headerTicker,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Header Ticker"],
    queryFn: () => apiClient.get(`ticker2/`).then((res) => res.data),
  });

  return { headerTicker, error, isLoading, refetch };
};

export const useGreetingBanner = () => {
  const {
    data: greetingBanner,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Greeting Banner"],
    queryFn: () => apiClient.get(`ticker1/`).then((res) => res.data),
  });

  return { greetingBanner, error, isLoading, refetch };
};

export const useVisitors = () => {
  const {
    data: visitors,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Visitors"],
    queryFn: () =>
      gameApiClient.get(`session-key-count/`).then((res) => res.data),
  });

  return { visitors, error, isLoading, refetch };
};

export const useNoticeBanner = () => {
  const {
    data: noticeBanner,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Notice Banner"],
    queryFn: () => apiClient.get(`top-paragraph/`).then((res) => res.data),
  });

  return { noticeBanner, error, isLoading, refetch };
};

export const useContactCards = () => {
  const {
    data: contactCards,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Contact cards"],
    queryFn: () =>
      apiClient
        .get(`paragraph/`)
        .then((res) =>
          res.data.sort(
            (a: IContactCard, b: IContactCard) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
          )
        ),
  });

  return { contactCards, error, isLoading, refetch };
};

export const useInfoCardFirst = () => {
  const {
    data: InfoCardFirst,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["InfoCardFirst"],
    queryFn: () => apiClient.get(`disclaimer1/`).then((res) => res.data),
  });

  return { InfoCardFirst, error, isLoading, refetch };
};

export const useInfoCardSecond = () => {
  const {
    data: infoCardSecond,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["InfoCardSecond "],
    queryFn: () => apiClient.get(`disclaimer2/`).then((res) => res.data),
  });

  return { infoCardSecond, error, isLoading, refetch };
};




export const usePlayerData = () => {
  return useMutation({
    mutationKey: ["PlayerData"],
    mutationFn: (newUser) =>
      apiClient.post(`create-inquirie/`,newUser).then((res) => res.data),
  });
};
