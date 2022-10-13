import React from "react";
import "./Sidebar.css";
import SubmenuItem from "./SubmenuItem";

const Sidebar = () => {
  interface Submenu {
    name: string;
    link: string;
    icon: string;
    [key: string]: any;
  }

  const customerSubmenu: Submenu[] = [
    { name: "Users", link: "#", icon: "#" },
    { name: "Guarantors", link: "#", icon: "#" },
    { name: "Loans", link: "#", icon: "#" },
    { name: "Decision Models", link: "#", icon: "#" },
    { name: "Savings", link: "#", icon: "#" },
    { name: "Loan Requests", link: "#", icon: "#" },
    { name: "Whitelist", link: "#", icon: "#" },
    { name: "Karma", link: "#", icon: "#" },
  ];

  const businessesSubmenu: Submenu[] = [
    { name: "Organisation", link: "#", icon: "#" },
    { name: "Loan Products", link: "#", icon: "#" },
    { name: "Savings Products", link: "#", icon: "#" },
    { name: "Fees and Charges", link: "#", icon: "#" },
    { name: "Transactions", link: "#", icon: "#" },
    { name: "Services", link: "#", icon: "#" },
    { name: "Service account", link: "#", icon: "#" },
    { name: "Settlements", link: "#", icon: "#" },
    { name: "Reports", link: "#", icon: "#" },
  ];

  const settingsSubmenu: Submenu[] = [
    { name: "Preferences", link: "#", icon: "#" },
    { name: "Fees and Pricing", link: "#", icon: "#" },
    { name: "Audit Logs", link: "#", icon: "#" },
    { name: "Systems Messages", link: "#", icon: "#" },
  ];

  const submenus: { name: string; items: Array<Submenu> }[] = [
    { name: "Customers", items: customerSubmenu },
    { name: "Businesses", items: businessesSubmenu },
    { name: "Settings", items: settingsSubmenu },
  ];

  return (
    <div className="sidebar">
      <ul className="submenus">
        {submenus.map((submenu) => {
          return (
            <li className="submenu">
              <h3 className="submenu-heading">{submenu.name}</h3>
              <ul className="submenu-items">
                {submenu.items.map((submenuItem) => {
                  return (
                    <SubmenuItem
                      name={submenuItem.name}
                      link={submenuItem.link}
                      icon={submenuItem.icon}
                    />
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="logout-option">
        <a href="#" className="sidemenu-link">
          <div className="submenu-items-items">
            <div className="icon-container">#</div>
            <span className="link-text">Logout</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
