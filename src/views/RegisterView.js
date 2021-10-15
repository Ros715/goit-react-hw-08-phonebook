import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import { Formik } from "formik";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import authOperations from "../redux/auth/auth-operations";

//npm i @material-ui/core
//npm install formik

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegisterView = () => {
  const dispatch = useDispatch();

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      //console.log(values);
      /*
      setTimeout(() => {
        //alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      */
      setSubmitting(false);
      dispatch(authOperations.register(values));
    },
    [dispatch]
  );

  return (
    <div style={{ marginLeft: "40px", width: "400px" }}>
      <h1>Registration</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => {
          //console.log(values, errors, touched);
          return (
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={
                  isSubmitting ||
                  !(
                    Object.keys(touched).length ===
                      Object.keys(INITIAL_VALUES).length &&
                    Object.keys(errors).length === 0
                  )
                }
              >
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterView;
