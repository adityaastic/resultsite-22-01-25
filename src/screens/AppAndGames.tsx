import { Card } from "../Types";
// import { vid, vidPoster } from "../assets"
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAppsAndGames from "../hooks/useAppsAndGames"


// const videos = ["vid", "vid", "vid", "vid", "vid", "vid"]

export function separateDateAndTime(dateTimeString:string) {
  let datePart, timePart;
  if (dateTimeString?.includes("T")) {
    [datePart, timePart] = dateTimeString?.split("T");
  } else {
    [datePart, timePart] = dateTimeString?.split(" ");
  }
  // const [year, month, day] = datePart?.split("-");
  // const formattedDate = `${year}-${month}-${day}`;
  return { date: datePart, time: timePart };
}

const AppAndGames = () => {
  const {videos} = useAppsAndGames();
  console.log("data from appand game api",videos)
  return (
    <>
    {/* <div className="main-content">
      <div className="container">
        <div className="row">
          {videos?.map(video => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div> */}

    <div className="main-content">
      <Header/>
      <div className="container">
      <div className="row">
    {videos?.map((video:Card) => (
        <div className="col-md-6 col-xl-4">
      <div className="vid-cl">
        <h4 className="text-center pb-3">{video?.heading}</h4>
        <div className="vid-box-content">
          <div className="vid-box-head">
            <h5> <a href="https://t.me/babakchele" target="__blank"> BGM GAME 🔥  </a> </h5>
            <a href="https://core.telegram.org/widgets" target="__blank"><i className="material-symbols-outlined">send</i></a>
          </div>
          <div className="vid-box">
            <video poster={videos?.video} loop controls className="vid">
              <source src={videos?.video} />
            </video>
          </div>
          <div className="vid-box-ft">
            <div className="cont-left">
              <h5>{video?.paragraph1}</h5>
              <a href={video?.video_link} target="__blank">https://t.me/babakchele/15110</a>
            </div>
            <div className="cont-right">
              <p className="text-muted">{video.created_at}</p>
            </div>
          </div>
        </div>
        <div className="cl-box">
          {video?.paragraph2}
        </div>
      </div>
    </div>
  ))}
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AppAndGames

