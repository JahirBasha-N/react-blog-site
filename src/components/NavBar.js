import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navBar">
        <Link to="/home"> Feed </Link>
        <Link to="/create"> Create Post </Link>
      </div>
    </Fragment>
  );
};

export default NavBar;
