import React from "react";

interface FilterFormProps {
  filterFormToggle: Boolean;
}

const FilterForm = ({ filterFormToggle }: FilterFormProps) => {
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
            />
          </div>
          <div className="form-input-container">
            <h5 className="input-title">Email</h5>
            <input type="text" className="filter-input" placeholder="Email" />
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
