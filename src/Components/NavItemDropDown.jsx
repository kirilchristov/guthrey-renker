import React from "react";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavItemDropDown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#temp"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.title.toUpperCase()}{" "}
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "white" }} />
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.subtitles.map((subtitle) => (
          <a className="dropdown-item" href="#temp" key={subtitle}>
            {subtitle.toUpperCase()}
          </a>
        ))}
      </div>
    </li>
  );
};

export default NavItemDropDown;
