import React from "react";

interface SubmenuItem {
  name: string;
  link: string;
  icon: string;
  [key: string]: any;
}

const SubmenuItem = ({ name, icon, link }: SubmenuItem) => {
  return (
    <a href={link} className="sidemenu-link">
      <li
        className={
          name === "Users"
            ? "submenu-items-items active"
            : "submenu-items-items"
        }
      >
        {name === "Users" && <div className="active-bar"></div>}
        <div className="icon-container">{icon}</div>
        <span className="link-text">{name}</span>
      </li>
    </a>
  );
};

export default SubmenuItem;
