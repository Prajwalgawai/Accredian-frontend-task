import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get("http://localhost:8000/login");
        if (response.data.login === true) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      } catch (error) {
        console.error("Error checking login:", error);
      }
    };

    checkLogin();
  }, [history]);

  useEffect(() => {
    if (localStorage.getItem("Profile")) {
      setLogin(true);
    }
  }, [history]);

  const logoutClicked = async () => {
    try {
      const response = await axios.get("http://localhost:8000/logout");
      if (response.data === "logOut") {
        localStorage.clear();
        setLogin(false);
        history("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "rgb(42 101 206)" }}
      >
        <div className="container">
          <NavLink className="navbar-brand text-white" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                {login === false ? (
                  <NavLink to="/login" className="nav-link text-white">
                    Login
                  </NavLink>
                ) : (
                  <Link
                    className="nav-link text-white"
                    onClick={() => {
                      logoutClicked();
                    }}
                  >
                    LogOut
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
