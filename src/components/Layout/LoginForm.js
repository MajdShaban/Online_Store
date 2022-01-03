import React from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { clearCart } from "../../redux/action/prodactActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const LoginForm = ({ activeSignUp, close }) => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string().required("No name provided."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(clearCart());
    close();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `Thank you ${values.name}`,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <h3 className={`text-center text-dark  ${styles.title}`}>Login</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formItem}>
          <label htmlFor="name">Username</label>
          <i className="bi bi-person-fill text-primary fs-3"></i>
          <input
            type="text"
            id="name"
            placeholder="Tyoe your username"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className={`${styles.formItem} ${styles.password}`}>
          <label htmlFor="password">Password</label>
          <i className="bi bi-lock-fill text-primary fs-3"></i>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Type your password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger fs-6 my-4">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className="text-center">
          <button type="submit" className={`btn col-8  ${styles.loginBtn}  `}>
            LOGIN
          </button>
        </div>
        <p className="text-center fs-7" style={{ fontSize: "12px" }}>
          Or Sign Up Using{" "}
        </p>
        <div className={`d-flex justify-content-center ${styles.icon}`}>
          <i
            className="bi bi-twitter mx-1 fs-3"
            style={{ color: "#1DA1F2" }}
          ></i>
          <i
            className="bi bi-google mx-1 fs-3"
            style={{ color: "#DB4437" }}
          ></i>
          <i
            className="bi bi-facebook mx-1 fs-3 "
            style={{ color: "#4267B2" }}
          ></i>
        </div>
        <div className="text-center">
          <p>Or Sign Up Using</p>
          <span className="btn fw-bold " onClick={activeSignUp}>
            SIGN UP
          </span>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
