import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Users = () => {
  return (
    <div className="users">
      <Header />
      <Sidebar />
      <div className="main">
        <h2 className="heading">Users</h2>
      </div>
    </div>
  );
};

export default Users;
