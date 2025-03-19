import React from "react";
import Intro from "./Intro";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <div className="py-4 bg-gradient-to-r from-primary to-secondary">
      <Intro />
      <NavMenu />
    </div>
  );
};

export default Header;
