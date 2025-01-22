import { GreetingBanner, ResultsBanner } from "../components/Banners.tsx"
import { ContactCards, ContactCards2, ContactCards3, InfoCard } from "../components/Cards.tsx"
import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"
import { ResultsGrid, ResultsTables } from "../components/Results.tsx"
import { HeaderTicker, FooterTicker } from "../components/Ticker.tsx"
// import Links from "../components/Links.tsx"


const Home = () => {
  return (
    <>
    <div className="main-content">
      <Header/>
      {/* ==========> TICKER <========== */}
      <HeaderTicker />

      {/* ==========> BANNER <========== */}
      <GreetingBanner />

      {/* ==========> CONTENT <========== */}
      <div className="card-container">
        {/* <NoticeBanner /> */}

        <ResultsBanner />

        <ContactCards />

        <ResultsGrid />

        <ContactCards2 />

        <ResultsTables />

        <ContactCards3 />

        <InfoCard />

        <FooterTicker />
      </div>

      {/* ==========> LINKS <========== */}
      {/* <Links /> */}
    </div>
      <Footer/>
    </>
  )
}

export default Home