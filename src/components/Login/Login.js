import React, { useState } from "react";
import styles from "./Login.module.css";
import PropTypes from "prop-types";

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form
      className={styles.form}
      style={{ marginBottom: "32px" }}
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(this.state.name, this.state.number);
        onSubmit(email, password);
        reset();
      }}
    >
      <p>Email</p>
      <input
        type="email"
        name="email"
        value={email}
        required
        onChange={(e) => {
          //console.log("name", e.currentTarget.value);
          setEmail(e.currentTarget.value);
        }}
      />

      <p>Password</p>
      <input
        type="password"
        value={password}
        name="password"
        required
        onChange={(e) => {
          //console.log("number", e.currentTarget.value);
          setPassword(e.currentTarget.value);
        }}
      />
      <div>
        <br />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
