import React from "react";

const NavItemRegular = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" id="navbarSingle" href="#home">
        {props.title.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItemRegular;