import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:3002/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data === "invalid username or password") {
          alert("invalid username or password");
          return;
        } else {
          localStorage.setItem("JWT_TOKEN", res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="formTemplateContainer">
        <Typography variant="h4" component="h2">
          Log in Admin
        </Typography>
        <TextField
          label={"Username..."}
          type={"text"}
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label={"Password..."}
          type={"password"}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          className="formButton"
          onClick={() => handleSubmit()}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}
