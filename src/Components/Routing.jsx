import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Routing.css";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import MaxPage from "./Max/MaxPage";
import ZamilPage from "./Zamil/ZamilPage";
import NurulizzahPage from "./Nurulizzah/NurulizzahPage";

const Routing = () => {
  return (
    <Router>
      {/* Link uses a prop to, this is how we call the link */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="MaxPage">Max's Page</Link>
        <Link to="ZamilPage">Max's Page</Link>
        <Link to="NurulizzahPage">Max's Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="MaxPage" element={<MaxPage />}></Route>
        <Route path="ZamilPage" element={<ZamilPage />}></Route>
        <Route path="NurulizzahPage" element={<NurulizzahPage />}></Route>
        {/* Error Page always comes to the bottom */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
