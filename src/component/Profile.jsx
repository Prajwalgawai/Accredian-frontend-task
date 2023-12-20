import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../App.css";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);

  const his = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLogin = async () => {
      let val = await axios.get("http://localhost:8000/login");
      setLogin(val.data.login);
      if (val.data.user) {
        setEmail(val.data.user[0].email);
      } else {
        his("/login");
      }
    };
    checkLogin();
  }, [login]);

  return (
    <>
      <section
        style={{
          width: "100%",
          height: "85vh",
        }}
      >
        <div className="box" style={{ color: "black" }}>
          <h2>Logged In successfully ✅</h2>
        </div>
      </section>
    </>
  );
};

export default Profile;
