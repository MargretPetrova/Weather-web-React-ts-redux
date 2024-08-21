import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Result from "./Pages/Main/components/Result/Result";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="site-content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="location" element={<Result/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
