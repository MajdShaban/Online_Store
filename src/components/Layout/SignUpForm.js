import React from "react";
import styles from "./LoginForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { clearCart } from "../../redux/action/prodactActions";
import { useDispatch } from "react-redux";

const SignUpForm = ({ hiddenSignUp, close }) => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string().required("No name provided."),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    agree: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(clearCart());
    close();
    Swal.fire({
      icon: "success",
      title: `Thank you ${values.name}`,
      text: "Sign Up Success",
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      agree: false,
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  console.log("SignUpForm Render");

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-center fw-bold my-4">Sign Up</h2>
      <p className="text-muted">
        Create your account. It's free and only takes a minute
      </p>

      <div className={`${styles.control}`}>
        <label htmlFor="name">Name</label>
        <i className="bi bi-person-fill text-primary fs-3"></i>
        <input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* <div className={`${styles.control} mx-2`}>
          <label htmlFor="lname">Last Name</label>
          <i className="bi bi-person-fill text-primary fs-3"></i>
          <input id="lname" type="text" placeholder="Last Name" />
        </div> */}

      <div className={styles.control}>
        <label htmlFor="password">Password</label>
        <i className="bi bi-lock-fill text-primary fs-3"></i>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
      </div>

      {/* <div className={styles.control}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          placeholder="Confirm Password"
          id="confirmPassword"
        />
      </div> */}

      <div className={styles.control}>
        <label htmlFor="email">Email</label>
        <i className="bi bi-envelope-open-fill text-primary fs-3"></i>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>

      <input
        type="checkbox"
        id="checkbox"
        name="agree"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.agree}
      />
      <label htmlFor="checkbox" className="mx-2">
        I accept <span className="text-success">Term Of Use</span> &{" "}
        <span className="text-success">Privacy Policy</span>
      </label>
      {formik.touched.agree && formik.errors.agree ? (
        <div className="text-danger">{formik.errors.agree}</div>
      ) : null}

      <button type="submit" className={`btn col-12 ${styles.loginBtn}  `}>
        Sign Up Now
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <span className="btn" onClick={hiddenSignUp}>
          Sign In
        </span>
      </p>
    </form>
  );
};

// function SignUpForm({ hiddenSignUp, close }) {
//   return (
//     <form>
//       <h2 className="text-center fw-bold my-4">Sign Up</h2>
//       <p className="text-muted">
//         Create your account. It's free and only takes a minute
//       </p>

//       <div className={`${styles.control}`}>
//         <label htmlFor="name">Name</label>
//         <i className="bi bi-person-fill text-primary fs-3"></i>
//         <input id="name" type="text" placeholder="Name" />
//       </div>

//       {/* <div className={`${styles.control} mx-2`}>
//           <label htmlFor="lname">Last Name</label>
//           <i className="bi bi-person-fill text-primary fs-3"></i>
//           <input id="lname" type="text" placeholder="Last Name" />
//         </div> */}

//       <div className={styles.control}>
//         <label htmlFor="password">Password</label>
//         <i className="bi bi-lock-fill text-primary fs-3"></i>
//         <input type="password" placeholder="Password" id="password" />
//       </div>

//       {/* <div className={styles.control}>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="confirmPassword"
//           placeholder="Confirm Password"
//           id="confirmPassword"
//         />
//       </div> */}

//       <div className={styles.control}>
//         <label htmlFor="email">Email</label>
//         <i className="bi bi-envelope-open-fill text-primary fs-3"></i>
//         <input type="email" placeholder="Email" id="email" />
//       </div>

//       <input type="checkbox" id="checkbox" />
//       <label htmlFor="checkbox" className="mx-2">
//         I accept <span className="text-success">Term Of Use</span> &{" "}
//         <span className="text-success">Privacy Policy</span>
//       </label>
//       <button
//         type="button"
//         className={`btn col-12 ${styles.loginBtn}  `}
//         onClick={close}
//       >
//         Sign Up Now
//       </button>
//       <p className="text-center">
//         Already have an account?{" "}
//         <span className="btn" onClick={hiddenSignUp}>
//           Sign In
//         </span>
//       </p>
//     </form>
//   );
// }

export default SignUpForm;
