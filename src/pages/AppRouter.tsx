import { Route } from "react-router-dom";
import {lazy} from "react";

export const AppRouter = () => {
  const Layout = lazy(() => import("./routes/layout.tsx"));
  const Home = lazy(() => import("./routes/home.tsx"));
  const About = lazy(() => import("./routes/about.tsx"));
  const Prices = lazy(() => import("./routes/prices.tsx"));
  const Contact = lazy(() => import("./routes/contact.tsx"));
  return (
      <Route path="/crossfit/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/crossfit/about"} element={<About />} />
        <Route path={"/crossfit/prices"} element={<Prices />} />
        <Route path={"/crossfit/contact"} element={<Contact />} />
      </Route>
  );
};