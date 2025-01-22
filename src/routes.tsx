import { createBrowserRouter } from "react-router-dom";

import App from "./App";
// import Home from "./screens/Home";
import AppAndGames from "./screens/AppAndGames";
import Guessing from "./screens/Guessing";
import Contact from "./screens/Contact";
import { ResultsChart } from "./screens/ResultsChart";

export const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/results-chart", element: <ResultsChart /> },
  { path: "/apps-games", element: <AppAndGames /> },
  { path: "/guessing", element: <Guessing /> },
  { path: "/contact", element: <Contact /> },
]);
