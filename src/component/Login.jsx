import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "../App.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const his = useNavigate();

  const onSub = async (e) => {
    e.preventDefault();
    let val = await axios.post("http://localhost:8000/login", user);
    console.log(val);
    setShow(val.data.login);
    if (val.data.msg) {
      setMsg(val.data.msg);
      localStorage.setItem("Profile", "LogIn");
    }
    // console.log(show)
  };

  useEffect(() => {
    if (show) {
      his("/profile");
      localStorage.setItem("Profile", "loggedIn");
    }
  }, [show]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLogin = async () => {
      let val = await axios.get("http://localhost:8000/login");
      console.log(val);
      if (val.data.user) {
        his("/Profile");
      }
    };
    checkLogin();
  }, []);

  const userInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container" id="formm">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            {msg ? (
              <>
                <div class="alert alert-danger alert-dismissible">
                  <Button
                    variant="contained"
                    type="button"
                    class="close"
                    data-dismiss="alert"
                  >
                    &times;
                  </Button>
                  <strong>ERROR!</strong> {msg}
                </div>
              </>
            ) : null}
            <br />
            <form onSubmit={onSub}>
              <div className="form-group">
                <h2>Login</h2>

                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={userInput}
                  required
                />
              </div>
              <div className="form-group">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={user.password}
                  onChange={userInput}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            <NavLink to="/register">create a account </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
