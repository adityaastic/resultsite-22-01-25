import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { name: "Home", to: "/" },
  { name: "Results chart", to: "/results-chart" },
  { name: "App & Games", to: "/apps-games" },
  // { name: "Guessing", to: "/guessing" },
]

const Header = () => {
  const { pathname } = useLocation()

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY > 0;
      setIsScrolled(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`header-tabs ${isScrolled ? 'scrolled' : ''}`}>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.to} className={pathname === tab.to ? "active-page" : ""}>
            <Link to={tab.to}>{tab.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header