import React, { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  name: String;
  setFilterFormToggle: Dispatch<SetStateAction<boolean>>;
  filterFormToggle: Boolean;
}

const TableHeader = ({
  name,
  setFilterFormToggle,
  filterFormToggle,
}: HeaderProps) => {
  return (
    <th className="col-header">
      <span className="col-heading">{name}</span>
      <span
        className="filter-icon"
        onClick={() => {
          setFilterFormToggle(!filterFormToggle);
        }}
      >
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
            fill="#545F7D"
          />
        </svg>
      </span>
    </th>
  );
};

export default TableHeader;
