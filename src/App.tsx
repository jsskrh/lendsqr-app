import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Users from "./Users";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <Sidebar />}
      <div className="main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
