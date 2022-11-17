import React, { Dispatch, SetStateAction, useState } from "react";
import Users from "./Users";

interface FilterFormProps {
  filterFormToggle: Boolean;
  users: any;
  // filterSearch: any;
  setQ: Dispatch<SetStateAction<string>>;
}

const FilterForm = ({
  filterFormToggle,
  users,
  // filterSearch,
  setQ,
}: FilterFormProps) => {
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(["userName", "phoneNumber", "email"]);

  // filterSearch = (users: any) => {
  //   users.filter((user: any) => {
  //     return searchParam.some((newUser) => {
  //       return (
  //         user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
  //       );
  //     });
  //   });
  // };

  return (
    <div
      className={
        filterFormToggle ? "filter-container show" : "filter-container"
      }
    >
      <div className="filter-container-inner">
        <form className="filter-form">
          <div className="form-input-container">
            <h5 className="input-title">Organisation</h5>
            <input type="text" className="filter-input" placeholder="Select" />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Username</h5>
            <input
              type="text"
              className="filter-input"
              placeholder="Username"
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Email</h5>
            <input
              type="text"
              className="filter-input"
              placeholder="Email"
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Date</h5>
            <input type="text" className="filter-input" placeholder="Date" />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Phone Number</h5>
            <input
              type="text"
              className="filter-input"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Status</h5>
            <input type="text" className="filter-input" placeholder="Select" />
          </div>
          <div className="form-buttons-container">
            <button className="filter-form-button reset-button">Reset</button>
            <button className="filter-form-button filter-button">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
