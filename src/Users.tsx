import React from "react";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Sidebar from "./Sidebar";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./Users.css";

const Users = () => {
  return (
    <div className="users">
      <div className="heading-container">
        <h2 className="heading">Users</h2>
      </div>
      <div className="info-card-container">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
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
        <TableRow
          organisation="Lendsqr"
          username="Adedeji"
          email="adedeji@lendsqr.com"
          phone="08078903721"
          dateJoined="May 15, 2020 10:00 AM"
          status="Inactive"
        />
        <TableRow
          organisation="Irorun"
          username="Debby Ogana"
          email="debby2@irorun.com"
          phone="08160780928"
          dateJoined="Apr 30, 2020 10:00 AM"
          status="Pending"
        />
      </table>
      <div className="page-scroll">
        <div className="page-scroll-left">
          <span className="scroll-text">Scrolling</span>
          <div className="scroll-amount-container">
            <span className="scroll-amount">100</span>
            <span className="arrow-down-icon">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z"
                  fill="#213F7D"
                />
              </svg>
            </span>
          </div>
          <span className="scroll-text">out of 100</span>
        </div>
        <div className="page-scroll-right">
          <div className="arrow-left-container">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z"
                fill="#213F7D"
              />
            </svg>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">1</span>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">2</span>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">3</span>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">...</span>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">15</span>
          </div>
          <div className="scroll-page">
            <span className="scroll-page-number">16</span>
          </div>
          <div className="arrow-right-container">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z"
                fill="#213F7D"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
