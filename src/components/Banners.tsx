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
          <div className="name" 
          dangerouslySetInnerHTML={{ __html: greetingBanner?.ticker }}
          style={{fontSize:"1.5rem"}}
          >
            {/* Welcome to BGM Game */}
          </div>
          {/* } */}
        </div>
        {/* <div className="cl-change"> */}
        <div className="">
          <span>TOTAL VISITORS: {visitors && visitors["total_visitor"]}</span>
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
  const { latestResults } = useLatestResults()


  console.log("((((((((((((((((((((((((((((((((((((",latestResults)

  return (
    <div className="card-inner result-inner" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", height:"16rem"}}>
      <div className="live-result-div" style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
        <h3 style={{fontSize:"4rem", fontWeight:"400",fontFamily: "KoPub Batang"}}>LIVE RESULT</h3>
      </div>
      <div style={{display:"flex", flexDirection:"row", width:"44%", justifyContent:"space-between", alignItems:"center"}}>
      <div className="" style={{background:"#D87B2E", maxWidth:"14rem", width:"14rem", height:"auto !important", padding:"0.5rem 0.5rem",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"10rem", border:"0.1rem solid #FFFFFF"}} >
        <h5>{latestResults?.latest_declared_result?.market_name}</h5>
        <p style={{margin:"0", padding:"0"}}> {latestResults?.latest_declared_result?.bet_key || "Waiting"}</p>
      </div>
      <div className="" style={{background:"#D87B2E", maxWidth:"14rem", width:"14rem", height:"auto !important",padding:"0.5rem 0.5rem", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"10rem", border:"0.1rem solid #FFFFFF"}} >
        <h5>{latestResults?.next_declared_result?.market_name}</h5>
        <p style={{margin:"0", padding:"0"}}> {latestResults?.next_declared_result?.bet_key || "Waiting"}</p>
      </div>
      </div>
    </div>
  )
}