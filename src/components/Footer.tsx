import { Link, useLocation } from "react-router-dom"
import { websiteUrl } from "../assets/index.ts"

const tabs = [
  { name: "HomeTest", to: "/" },
  { name: "AboutTest", to: "/" },
  { name: "ContactTest", to: "/contact" },
  { name: "FAQTest", to: "/" },
  { name: "DisclaimerTest", to: "/" },
  { name: "Privacy PolicyTest", to: "/" },
  { name: "SitemapTest", to: "/" },
]

const Footer = () => {
  const { pathname } = useLocation()

  return (
    <div className="footer-ft">
      <div className="container-fluid">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.name} className={pathname === tab.to ? "active-page" : ""}>
              <Link to={tab.to}>{tab.name} </Link>
            </li>
          ))}
        </ul>
        <p>
          © 2023 {websiteUrl}
        </p>
      </div>
    </div>
  )
}

export default Footer
