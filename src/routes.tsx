import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Guessing from "./screens/Guessing";
import Contact from "./screens/Contact";
import { ResultsChart } from "./screens/ResultsChart";
import AboutUs from "./screens/AboutUs";  
import Disclaimer from "./screens/Disclaimer";
import PrivacyPolicy from "./screens/PrivacyPolicy";  // ✅ Imported Privacy Policy

export const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/results-chart", element: <ResultsChart /> },
  { path: "/guessing", element: <Guessing /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/disclaimer", element: <Disclaimer /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },  // ✅ Added Privacy Policy route
]);
