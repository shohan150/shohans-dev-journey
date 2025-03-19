import React from "react";
import Intro from "./Intro";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <div className="pb-0 bg-gradient-to-r from-primary to-secondary">
      <Intro />
      <NavMenu />
    </div>
  );
};

export default Header;
