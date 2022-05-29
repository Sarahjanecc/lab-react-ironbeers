import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h3>Home</h3>
      </Link>
    </nav>
  );
};

export default Header;
