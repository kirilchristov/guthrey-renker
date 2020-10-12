import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

const NavItemDropDownAdvanced = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 990;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle p-3"
        href="#temp"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.title.toUpperCase()}{" "}
        <FontAwesomeIcon icon={faAngleDown}/>
      </a>
      <div
        className={`${isMobile ? "dropdown-menu" : "dropdown-menu advanced"}`}
        aria-labelledby="navbarDropdown"
      >
        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
          <TabList>
            <Tab tabFor="vertical-tab-one">Tab 1</Tab>
            <Tab tabFor="vertical-tab-two">Tab 2</Tab>
            <Tab tabFor="vertical-tab-three">Tab 3</Tab>
          </TabList>

          <TabPanel tabId="vertical-tab-one">
            <p>Tab 1 content</p>
          </TabPanel>

          <TabPanel tabId="vertical-tab-two">
            <p>Tab 2 content</p>
          </TabPanel>

          <TabPanel tabId="vertical-tab-three">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </div>
    </li>
  );
};

export default NavItemDropDownAdvanced;
