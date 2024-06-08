import { Route } from "react-router-dom";
import {lazy} from "react";

export const AppRouter = () => {
  const Layout = lazy(() => import("./routes/layout.tsx"));
  const Home = lazy(() => import("./routes/home.tsx"));
  const About = lazy(() => import("./routes/about.tsx"));
  const Prices = lazy(() => import("./routes/prices.tsx"));
  const Contact = lazy(() => import("./routes/contact.tsx"));
  return (
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/prices"} element={<Prices />} />
        <Route path={"/contact"} element={<Contact />} />
      </Route>
    </>
  );
};