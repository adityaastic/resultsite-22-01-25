import { useCallback, useEffect, useMemo, useState } from "react";
import useMarkets from "../hooks/useMarkets";
import { IMarket, IResult } from "../Types";
import useResults from "../hooks/useResults";
import moment from "moment";
import { getDatesOfMonth } from "../utils/time";
// import { useParams } from "react-router-dom";

export const ResultsGrid = () => {
  const colors = ['green', 'red', 'purple'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { markets } = useMarkets()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [colors.length]);


  return (
    <>
      <div className="big-table">
        <div className="row g-0">
          {markets?.filter((market: IMarket) => market.status)?.map((market: IMarket) => <div className="col-md-6 ">
            <div className="result-of ">
              <div className="boxes ">
                <span>{market.market}</span>
                <span className="text-secondary">( {market.result_time} )</span>
                <div className="new-box">
                  <span>{`{${market.previous_result?.bet_key || "Wait"}}`}</span>
                  <button className={`btn-color ${colors[currentIndex]}`}>
                    {"NEW"}
                  </button>
                  <span>[{market.latest_result?.bet_key || "Wait"}]</span>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  )
}

export const ResultsTables = () => {
  const result = useResults({ active: "True", refund: "False" });
  const { markets } = useMarkets();

  const [selectedMonthDates, setSelectedMonthDates] = useState<Date[]>([]);

  useEffect(() => {
    const month = moment().month();
    const year = moment().year();
    const dates = getDatesOfMonth(year, month);
    setSelectedMonthDates(dates);
  }, []);

  // Memoize the results to avoid unnecessary re-renders
  const memoizedResults = useMemo(() => result?.results || [], [result]);

  // Filter markets where status is true (active markets)
  const activeMarkets = useMemo(() => {
    return markets?.filter((market: IMarket) => market.status === true);
  }, [markets]);

  // Function to generate table rows, memoized to avoid unnecessary re-renders
  const generateTableRows = useCallback(() => {
    return selectedMonthDates?.map((date) => (
      <tr key={date.toString()}>
        <th>{moment(date).format("DD MM YYYY")}</th>
        {activeMarkets?.map((market: IMarket) => {
          const resultForMarket = memoizedResults?.find(
            (res: IResult) =>
              res.market_name === market.market &&
              moment(res.created_at).format("DD MM YYYY") === moment(date).format("DD MM YYYY")
          );
          return (
            <td key={market.id} style={{ width: "5%", textAlign: "center" }}>
              {resultForMarket ? resultForMarket.bet_key : ""}
            </td>
          );
        })}
      </tr>
    ));
  }, [selectedMonthDates, memoizedResults, activeMarkets]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
        <div className="col-11" style={{ border: "3px solid black" }}>
          <div className="all-game-chart-title">All Game Yearly Charts</div>

          <div className="table-responsive green-table">
            <table className="table table-bordered table-hover ">
              <thead>
                <tr>
                  {activeMarkets && <th scope="col" style={{ width: "5%" }}>Date</th>}
                  {activeMarkets?.map((market: IMarket) => (
                    <th key={market.id} scope="col">{market.market}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{generateTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};