import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmailAxios } from "../../Services/axios";
import inv from "../../assets/404.svg";
import verifiedImg from "../../assets/giphy.webp";

// Email Verification Component
const Emailverify = () => {
  const [status, setStatus] = useState("loading");
  const [timer, setTimer] = useState(5);
  const { string } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await verifyEmailAxios(string);
        if (response.status === 200) {
          setStatus("success");
        }
      } catch (error) {
        console.error(error);
        if (error.response?.data.message === "invalid credential") {
          setStatus("invalid");
        } else {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [string]);

  useEffect(() => {
    if (status === "success" && timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (timer === 0 || status === "invalid") {
      navigate("/login");
    }
  }, [status, timer, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      {status === "loading" ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : status === "invalid" ? (
        <img src={inv} alt="" />
      ) : (
        <div>
          <img src={verifiedImg} alt="" />
          <hr />
          <h3>Login page in</h3>
          <h4>{timer}</h4>
        </div>
      )}
    </div>
  );
};

export default Emailverify;
