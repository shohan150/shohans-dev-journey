import React from "react";
import Intro from "./Intro";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <div>
      <Intro />
      <NavMenu />
    </div>
  );
};

export default Header;
