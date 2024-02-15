import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { passResetAxios } from "../../Services/axios";
import { ColorRingLoading } from "../../Services/loading";
import { errorToast, toastSuccess } from "../../Services/tostify";

// Functional component for the password reset form
const PasswordRes = () => {
  // State for the email input and button status
  const [email, setEmail] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);

    passResetAxios({ email })
      .then((res) => {
        setIsButtonLoading(false);
        if (res.status === 200) {
          setEmail("");
          toastSuccess("Reset link generated successfully. Check your email.");
        }
      })
      .catch((err) => {
        setIsButtonLoading(false);
        if (err.response.status === 401) {
          errorToast("Invalid Credentials");
          setEmail("");
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-2 p-2" style={{ height: "80vh" }}>
      <div>
        <h4 className="text-start">Password Reset Form :</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Registered Email-id"
              aria-label="Recipient's username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="button-addon2"
              required
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              {isButtonLoading ? <ColorRingLoading /> : "Send"}
            </button>
          </div>
        </form>
        <div className="form-text">
          Enter your valid email Id above and hit the send button to get the
          password reset mail in your E-mail
        </div>
        <br />
        <div className="w-100 text-align-left d-flex">
          <Link to="/login">Login page</Link>
          <div className="ms-auto">
            <Link to="/signup">Signup page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRes;
