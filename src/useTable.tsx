import React from "react";
import { useState, useEffect } from "react";

const calculateRange = (users: any, rowsPerPage: any) => {
  const range = [];
  const num = Math.ceil(users.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (users: any, page: number, rowsPerPage: any) => {
  return users.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

interface User {
  organisation: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
  id: string;
}

const useTable = (page: number, rowsPerPage: any) => {
  const [users, setUsers] = useState<User[]>([]);

  const [tableRange, setTableRange] = useState<any[]>([]);
  const [slice, setSlice] = useState<any[]>([]);

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
    const range = calculateRange(users, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(users, page, rowsPerPage);
    setSlice([...slice]);
  }, [users, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
