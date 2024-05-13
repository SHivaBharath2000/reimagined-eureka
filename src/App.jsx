import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Card from "./card";
import Fullstack from "./Full stack";
import DataScience from "./data science";
import Ai from "./AI";
// import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route
            path="/full-stack-development"
            element={<Fullstack/>}
          />
          <Route
            path="/artificial-intelligence"
            element={<Ai/>}
          />
          <Route path="/data-science" element={<DataScience/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// App.propTypes = {
//   productname: PropTypes.string,
//   price: PropTypes.string,
// };
export default App;
