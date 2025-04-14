import { Link, useLocation } from "react-router-dom"
import { websiteUrl } from "../assets/index.ts"
import CustomModal from "../components/CustomModal";


const tabs = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
  // { name: "FAQ", to: "/faq" },
  { name: "Disclaimer", to: "/Disclaimer" },
  { name: "Privacy Policy", to: "/privacy-policy" },

]

const Footer = () => {
  const { pathname } = useLocation()

  //  This function will scroll to the top when Home is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  
    });
  }

  return (
    <div className="footer-ft">
      <div className="container-fluid">
        <ul>
          {tabs.map((tab) => (
            <li 
              key={tab.name} 
              className={pathname === tab.to ? "active-page" : ""}
            >
            {/* i have made condition for home button */}
              {tab.name === "Home" ? (
                <Link 
                  to={tab.to} 
                  onClick={handleScrollToTop} 
                >
                  {tab.name}
                </Link>
              ) : (
                <Link to={tab.to}>{tab.name}</Link>
              )}
            </li>
          ))}
           <CustomModal />

        </ul>
        <p>
          © 2023 {websiteUrl}
        </p>
      </div>
    </div>
  )
}

export default Footer
