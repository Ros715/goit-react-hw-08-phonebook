import React, { useState } from "react";
//import styles from "./Register.module.css";
import PropTypes from "prop-types";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

function Register({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <form
      style={styles.form}
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(this.state.name, this.state.number);
        onSubmit(email, name, password);
        reset();
      }}
    >
      <label style={styles.label}>
        Email
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
      </label>

      <label style={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => {
            //console.log("name", e.currentTarget.value);
            setName(e.currentTarget.value);
          }}
        />
      </label>

      <label style={styles.label}>
        Password
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
      </label>
      <div>
        <br />
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
