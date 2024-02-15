// import { useFormik } from "formik";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as yup from "yup";
// import { signUpAxios } from "../../Services/axios";
// import { ColorRingLoading } from "../../Services/loading";
// import { defaultToast, toastSuccess, toastWarn } from "../../Services/tostify";

// const Signup = () => {
//   // State variables
//   const [showPass, setShowPass] = useState("password");
//   const [buttonLoader, setButtonLoader] = useState(true);
//   const navigate = useNavigate();

//   // Yup validation schema
//   const userValidationSchema = yup.object().shape({
//     userName: yup
//       .string()
//       .min(2, "Enter a valid user Name")
//       .required("User Name is required"),
//     email: yup
//       .string()
//       .email("Enter a valid email address")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must have at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Password must match")
//       .required("Password is required"),
//   });

//   const init = {
//     userName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   // Formik
//   const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
//     useFormik({
//       initialValues: init,
//       validationSchema: userValidationSchema,
//       onSubmit: (values) => {
//         setButtonLoader(false);
//         signUpAxios(values).then((res) => {
//           console.log(res);

//           if (res.status === 200) {
//             toastSuccess("Sign Up Successfully");
//             defaultToast(
//               "Email might take some time to arrive.Check your Email and Verify your token and then login.If you haven't received the email, please wait for a few minutes and check again."
//             );
//             navigate("/login");
//             setButtonLoader(true);
//           } else if (res.status === 201) {
//             defaultToast(
//               "Email might take some time to arrive. Please check your spam folder."
//             );
//             setTimeout(() => {
//               defaultToast(
//                 "If you haven't received the email, please wait for a few minutes and check again."
//               );
//             }, 2 * 60 * 1000); // 2 minutes in milliseconds
//           } else if (res.response && res.response.status === 400) {
//             toastWarn("User Already Exists");
//             setButtonLoader(true);
//           }
//         });
//       },
//     });

//   return (
//     <div>
//       <div
//         className="d-flex text-start justify-content-center align-items-center m-2"
//         style={{ width: "100vw", height: "90vh" }}
//       >
//         <form className="" style={{ width: "300px" }} onSubmit={handleSubmit} >
//           <div className="mb-3">
//             <label htmlFor="usernameid" className="form-label">
//               User Name
//             </label>
//             <input
//               type="text"
//               className={
//                 errors.userName && touched.userName
//                   ? "form-control is-invalid"
//                   : "form-control"
//               }
//               value={values.userName}
//               id="usernameid"
//               name="userName"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               required
//             />
//             <div className="invalid-feedback">{errors.userName}</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               values={values.email}
//               name="email"
//               className={
//                 errors.email && touched.email !== undefined
//                   ? "form-control is-invalid"
//                   : "form-control"
//               }
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <div id="usernameHelp" className="invalid-feedback">
//               {errors.email}
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type={showPass}
//               value={values.password}
//               name="password"
//               className={
//                 errors.password && touched.password !== undefined
//                   ? "form-control is-invalid"
//                   : "form-control"
//               }
//               id="exampleInputPassword1"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <div id="usernameHelp" className="invalid-feedback">
//               {errors.password}
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Confirm Password
//             </label>
//             <input
//               type={showPass}
//               className={
//                 errors.confirmPassword && touched.confirmPassword !== undefined
//                   ? "form-control is-invalid"
//                   : "form-control"
//               }
//               value={values.confirmPassword}
//               name="confirmPassword"
//               id="exampleInputPassword1"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <div id="usernameHelp" className="invalid-feedback">
//               {errors.confirmPassword}
//             </div>
//           </div>
//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="showpasswordid"
//               onChange={() =>
//                 showPass === "password"
//                   ? setShowPass("text")
//                   : setShowPass("password")
//               }
//             />
//             <label className="form-check-label" htmlFor="showpasswordid">
//               Show Password
//             </label>
//           </div>

//           <button type="submit" className="btn btn-primary">
//             {buttonLoader ? "Create" : <ColorRingLoading />}
//           </button>
//           <br />
//           <br />
//           <div>Already Have an Account? </div>
//           <Link to="/login">Signin</Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signUpAxios } from "../../Services/axios";
import { ColorRingLoading } from "../../Services/loading";
import { defaultToast, toastSuccess, toastWarn } from "../../Services/tostify";

const Signup = () => {
  const [showPass, setShowPass] = useState("password");
  const [buttonLoader, setButtonLoader] = useState(true);
  const navigate = useNavigate();

  const userValidationSchema = yup.object().shape({
    userName: yup
      .string()
      .min(2, "Enter a valid user Name")
      .required("User Name is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Password is required"),
  });

  const init = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const renderPasswordField = (fieldName, label) => (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={showPass === "password" ? "password" : "text"}
        value={values[fieldName]}
        name={fieldName}
        className={`form-control ${
          errors[fieldName] && touched[fieldName] ? "is-invalid" : ""
        }`}
        id={fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <div className="invalid-feedback">{errors[fieldName]}</div>
    </div>
  );

  const renderInputField = (fieldName, label, type = "text") => (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={type}
        value={values[fieldName]}
        name={fieldName}
        className={`form-control ${
          errors[fieldName] && touched[fieldName] ? "is-invalid" : ""
        }`}
        id={fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <div className="invalid-feedback">{errors[fieldName]}</div>
    </div>
  );

  const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: init,
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        setButtonLoader(false);
        signUpAxios(values).then((res) => {
          console.log(res);

          if (res.status === 200) {
            toastSuccess("Sign Up Successfully");
            defaultToast(
              "Email might take some time to arrive. Check your Email and Verify your token and then login. If you haven't received the email, please wait for a few minutes and check again."
            );
            navigate("/login");
            setButtonLoader(true);
          } else if (res.status === 201) {
            defaultToast(
              "Email might take some time to arrive. Please check your spam folder."
            );
            setTimeout(() => {
              defaultToast(
                "If you haven't received the email, please wait for a few minutes and check again."
              );
            }, 2 * 60 * 1000); // 2 minutes in milliseconds
          } else if (res.response && res.response.status === 400) {
            toastWarn("User Already Exists");
            setButtonLoader(true);
          }
        });
      },
    });

  return (
    <div>
      <div
        className="d-flex text-start justify-content-center align-items-center m-2"
        style={{ width: "100vw", height: "90vh" }}
      >
        <form className="" style={{ width: "300px" }} onSubmit={handleSubmit}>
          {renderInputField("userName", "User Name")}
          {renderInputField("email", "Email address", "email")}
          {renderPasswordField("password", "Password")}
          {renderPasswordField("confirmPassword", "Confirm Password")}

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showpasswordid"
              onChange={() =>
                setShowPass((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            />
            <label className="form-check-label" htmlFor="showpasswordid">
              Show Password
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            {buttonLoader ? "Create" : <ColorRingLoading />}
          </button>
          <br />
          <br />
          <div>Already Have an Account? </div>
          <Link to="/login">Signin</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
