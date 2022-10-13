import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
