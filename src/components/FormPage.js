import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Job Email"
          name="job_email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          style={{ marginBottom: "20px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ padding: "15px 30px", fontSize: "18px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormPage;
