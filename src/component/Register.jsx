import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const onSub = async (e) => {
    e.preventDefault();
    if (user?.password !== user?.confirmPassword) {
      setMsg("Both passwords must match");
    } else {
      let val = await axios.post("http://localhost:8000/register", user);
      if (val.data.msg) {
        setMsg(val.data.msg);
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      let val = await axios.get("http://localhost:8000/login");

      if (val.data.user) {
        navigate("/profile");
        // console.log(val.data.user[0].email);
      }
    };
    checkLogin();
  }, []);

  const userInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="container" id="formm">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            {msg ? (
              <>
                <div className="alert alert-danger alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert">&times;</button>
                  <strong>ERROR!</strong> {msg}
                </div>
              </>
            ) : null}
            <br />
            <form onSubmit={onSub}>
              <h2>Register</h2>

              <div className="form-group">
                <TextField id="outlined-basic" label="Username" variant="outlined" type="text" className="form-control" placeholder="Enter Username" name="userName" value={user.userName} onChange={userInput} required />
              </div>

              <div className="form-group">
                <TextField id="outlined-basic" label="Email address" variant="outlined" type="email" className="form-control" placeholder="Enter email" name="email" value={user.email} onChange={userInput} required />
              </div>

              <div className="form-group">
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="form-control" placeholder="Enter password" name="password" value={user.password} onChange={userInput} required />
              </div>

              <div className="form-group">
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" className="form-control" placeholder="Enter confirmed password" name="confirmPassword" value={user.confirmPassword} onChange={userInput} required />
              </div>

              <Button variant="contained" type="submit" className="btn btn-primary">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
