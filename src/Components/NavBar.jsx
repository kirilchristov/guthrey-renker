import React from "react";
import NavItemDropDown from "./NavItemDropDown";
import NavItemDropDownAdvanced from "./NavItemDropDownAdvanced";
import NavItemRegular from "./NavItemRegular";
import SocialBar from "./SocialBar";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="wrapper">
          <div className="main-container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <NavItemDropDown
                  title={"Home"}
                  subtitles={["Home 1", "Home 2", "Home 3"]}
                />
                <NavItemDropDownAdvanced title={"Lifestyle"} />
                <NavItemRegular title={"Technology"} />
                <NavItemDropDown
                  title={"Video"}
                  subtitles={["Video 1", "Video 2", "Video 3"]}
                />
                <NavItemRegular title={"Travel"} />
                <NavItemDropDown
                  title={"Features"}
                  subtitles={["Feature 1", "Feature 2", "Feature 3"]}
                />
              </ul>
            </div>
            <div className="social-links">
              <SocialBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
