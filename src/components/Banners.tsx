import { Link } from 'react-router-dom'
import { websiteUrl } from '../assets/index.ts'
import { useGreetingBanner, useNoticeBanner, useVisitors } from "../hooks/useHome.ts"
import { useLatestResults } from "../hooks/useResults.ts"

export const GreetingBanner = () => {
  const { greetingBanner } = useGreetingBanner()
  const { visitors } = useVisitors()

  return (
    <div className="profile-container">
      <div className="container profile-content">
        <div className="profile-img">
          <Link to="/">{websiteUrl}</Link>
        </div>
        <div className="babaji-name" >
          {/* {(greetingBanner && !isLoading) &&  */}
          <div className="name1" 
          dangerouslySetInnerHTML={{ __html: greetingBanner?.ticker }}
          style={{fontSize:"1.5rem"}}
          >
            {/* Welcome to BGM Game */}
          </div>
          {/* } */}
        </div>
        {/* <div className="cl-change"> */}
        <div className="">
          <span>TOTAL VISITORS COUNT : {visitors && visitors["total_visitor"]}</span>
        </div>
      </div>
    </div>
  )
}




export const NoticeBanner = () => {
  const { noticeBanner, isLoading } = useNoticeBanner()

  return (
    <>
      {
        (noticeBanner && !isLoading) && <div className="card-inner" dangerouslySetInnerHTML={{ __html: noticeBanner[0]?.paragraph }} ></div>
      }
    </>
  )
}

export const ResultsBanner = () => {
  const { latestResults } = useLatestResults();

  return (
    <div
      className="results-banner-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "vh",
        background: "linear-gradient(135deg,rgb(245, 169, 18) 0%, #fda085 100%)",
        padding: "40px",
        color: "#fff",
        marginBottom:'20px'
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "20px"}}>
        LIVE RESULT 
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Latest Declared Result */}
        <div
          style={{
            background: "darkgreen",
            width: "14rem",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(250, 248, 248, 0.2)",
            textAlign: "center",
            border:"2px solid white"
          }}
        >
          <h5 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            {latestResults?.latest_declared_result?.market_name || "Loading..."}
          </h5>
          <p style={{ margin: "0.5rem 0 0" }}>
            {latestResults?.latest_declared_result?.bet_key || "Waiting"}
          </p>
        </div>

        {/* Next Declared Result */}
        <div
          style={{
            background: "#D87B2E",
            width: "14rem",
            padding: "5px",
            borderRadius: "15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            border:"2px solid white"
          }}
        >
          <h5 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            {latestResults?.next_declared_result?.market_name || "Loading..."}
          </h5>
          <p style={{ margin: "0.5rem 0 0" }}>
            {latestResults?.next_declared_result?.bet_key || "Waiting"}
          </p>
        </div>
      </div>

      
    </div>
  );
};
