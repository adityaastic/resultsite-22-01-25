import { useCallback, useEffect, useMemo, useState } from "react";
import useMarkets from "../hooks/useMarkets";
import { Card, IMarket, IResult } from "../Types";
import useResults from "../hooks/useResults";
import moment from "moment";
import { getDatesOfMonth } from "../utils/time";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Function to get the current month in YYYY-MM format
function getCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}

function getMonthFromDate(dateString: string) {
  const date = moment(dateString, "YYYY-MM");
  return {
    year: date.year(),
    month: date.month(),
  };
}

export const ResultsChart = () => {
  const [market, setMarket] = useState<string | undefined>(undefined);
  const [date, setDate] = useState(getCurrentMonth());
  const { results: rawResults } = useResults({ date, market, active: "yes", refund: "no" });
  const { markets } = useMarkets();

  const [selectedMonthDates, setSelectedMonthDates] = useState<Date[]>([]);

  useEffect(() => {
    const { year, month } = getMonthFromDate(date);
    const dates = getDatesOfMonth(year, month);
    setSelectedMonthDates(dates);
  }, [date]);

  // Ensure results is always an array
  const memoizedResults = useMemo(() => {
    return Array.isArray(rawResults) ? rawResults : [];
  }, [rawResults]);

  const memoizedMarkets = useMemo(() => markets, [markets]);

  const filteredResults = useMemo(() => {
    if (!market) return memoizedResults;
    return memoizedResults.filter((result: IResult) => result.market_name === market);
  }, [memoizedResults, market]);

  const generateTableRows = useCallback(() => {
    return selectedMonthDates?.map((date) => (
      <tr key={date.toString()}>
        <th>{moment(date).format("DD MM YYYY")}</th>
        {memoizedMarkets?.map((market: IMarket) => {
          const resultForMarket = filteredResults.find((res: IResult) =>
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
  }, [selectedMonthDates, filteredResults, memoizedMarkets]);

  return (
    <>
      <div className="main-content">
        <Header />
        <div className="container-fluid">
          <div className="form-inline mob-block">
            <div className="form-group me-3">
              <div className="select-input">
                <input
                  type="month"
                  id="monthInput"
                  className="form-control"
                  placeholder="MM-YYYY"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group me-3">
              <select
                className="form-select"
                aria-label="Default select example"
                value={market}
                onChange={(e) => setMarket(e.target.value)}
              >
                <option value="">Select Market</option>
                {markets?.map((market: Card) => (
                  <option value={market.market} key={market.market}>
                    {market.market}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-responsive green-table">
            <table className="table table-bordered table-hover ">
              <thead>
                <tr>
                  {memoizedMarkets && <th scope="col" style={{ width: "5%" }}>Date</th>}
                  {memoizedMarkets?.map((market: IMarket) => (
                    <th key={market.id} scope="col">{market.market}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generateTableRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
