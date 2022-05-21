import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import useAuthContext from "../../hooks/useAuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuthContext();

  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Fragment>
      <div className="Navbar">
        <div
          onClick={onToggle}
          className={
            toggle
              ? "change"
              : "navbar1" && "navbar2" && "navbar3" && "NavbarInside"
          }
        >
          <div className="navBar1"></div>
          <div className="navBar2"></div>
          <div className="navBar3"></div>
        </div>
        {toggle ? (
          <Fragment>
            <div className="NavShow">
              <div className="Linkss" onClick={onToggle}>
                <Link to="/">Home</Link>
                {isLoggedIn && (
                  <Fragment>
                    <Link to="/category">Start a Quiz</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/account">Account</Link>
                  </Fragment>
                )}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {isLoggedIn ? (
                  <Link onClick={logout}>Logout</Link>
                ) : (
                  <Link to="/auth/login">Sign in</Link>
                )}

                {/* {user.admin === true && <Link to="/admin">Admin Panel</Link>} */}
                {/* Shows Admin Link if user is Admin */}
              </div>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
