import React, { useEffect, useState } from "react";
import Header from "./Header";
import InfoCard from "./InfoCard";
import PageScroll from "./PageScroll";
import Sidebar from "./Sidebar";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./Users.css";
import useTable from "./useTable";

interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  id: string;
}

const calculateNoOfPages = (users: User[], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(users.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (users: User[], page: number, rowsPerPage: number) => {
  return users.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [pageRange, setPageRange] = useState<number[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const userData = await response.json();
      // console.log(userData);

      setUsers(userData);

      // localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /* const [users, setUsers] = useState(
      JSON.parse(localStorage.getItem(userData))
    ); */

    fetchUsers();
  }, []);

  useEffect(() => {
    setPageRange(calculateNoOfPages(users, rowsPerPage));
    setVisibleUsers(sliceData(users, page, rowsPerPage));
  }, [rowsPerPage, users, page]);

  return (
    <div className="users">
      <div className="heading-container">
        <h2 className="heading">Users</h2>
      </div>
      <div className="info-card-container">
        <InfoCard type="users" amount={users.length} />
        <InfoCard type="active users" amount={users.length} />
        <InfoCard type="users with loans" amount={users.length} />
        <InfoCard type="users with savings" amount={users.length} />
      </div>
      <table className="user-data-table">
        <tr className="header-row">
          <TableHeader name="Organisation" />
          <TableHeader name="Username" />
          <TableHeader name="Email" />
          <TableHeader name="Phone Number" />
          <TableHeader name="Date Joined" />
          <TableHeader name="Status" />
          <TableHeader name="&nbsp;" />
        </tr>
        {visibleUsers.map((user) => {
          return (
            // <div>qwerty</div>
            <TableRow
              organisation={user.orgName}
              username={user.userName}
              email={user.email}
              phone={user.phoneNumber}
              dateJoined={user.createdAt}
              status={user.status}
            />
          );
        })}
      </table>
      <PageScroll
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        page={page}
        setPage={setPage}
        pageRange={pageRange}
      />
    </div>
  );
};

export default Users;
