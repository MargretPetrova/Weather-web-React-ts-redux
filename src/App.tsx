import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main";
import Result from "./Pages/Result/Result";
import { useSelector } from "react-redux";


function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
 
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="location" element={<Result/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
