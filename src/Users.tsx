import React, { useEffect, useState } from "react";
import FilterForm from "./FilterForm";
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
  const [filterFormToggle, setFilterFormToggle] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["userName", "phoneNumber", "email"]);

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

  const filterSearch = (users: User[]) => {
    return users.filter((user: any) => {
      return searchParam.some((newUser) => {
        return (
          user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  useEffect(() => {
    /* const [users, setUsers] = useState(
      JSON.parse(localStorage.getItem(userData))
    ); */

    fetchUsers();
  }, []);

  useEffect(() => {
    setPageRange(calculateNoOfPages(filterSearch(users), rowsPerPage));
    // const qUsers = filterSearch(users);
    setVisibleUsers(sliceData(filterSearch(users), page, rowsPerPage));
  }, [rowsPerPage, users, page, q]);

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
        <thead>
          <tr className="header-row">
            <TableHeader
              name="Organisation"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="Username"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="Email"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="Phone Number"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="Date Joined"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="Status"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
            <TableHeader
              name="&nbsp;"
              setFilterFormToggle={setFilterFormToggle}
              filterFormToggle={filterFormToggle}
            />
          </tr>
        </thead>
        <tbody>
          <FilterForm
            filterFormToggle={filterFormToggle}
            users={users}
            setQ={setQ}
          />
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
        </tbody>
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
