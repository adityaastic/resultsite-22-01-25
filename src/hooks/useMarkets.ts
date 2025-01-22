import { useQuery } from "@tanstack/react-query";
import  { gameApiClient } from "../constants/api-client";
import { IMarket } from "../Types";

const useMarkets = () => {
  const {
    data: markets,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Markets"],
    queryFn: () =>
      gameApiClient
        .get(`all-market/`)
        .then((res) =>
          res.data.sort((a: IMarket, b:IMarket) => a.market_position - b.market_position)
        ),
  });

  return { markets, error, isLoading, refetch };
};

export default useMarkets;





// const fetchAllMarket = (params) =>
//   apiClient.get("all-market/", { params }).then((res) =>
//     res.data.sort((a: IMarket, b:IMarket) => a.market_position - b.market_position))

// const useMarkets = ({ date = "" } = {}) => {
//   const params = {
//     ...(date && { year_month: date }),
//   };

//   const {
//     data: markets,
//     error,
//     isLoding,
//     refetch,
//   } = useQuery({
//     queryKey: ["December Month Results", params],
//     queryFn: () => fetchAllMarket(params),
//   });

//   return { markets, error, isLoding,refetch };
// };

// export default useMarkets;
