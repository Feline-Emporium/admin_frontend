import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

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
