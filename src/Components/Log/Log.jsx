import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import { getLogDetails } from "../../Services/axios";
import { CircularLoadingWithMultipleCircle } from "../../Services/loading";
import { errorToast } from "../../Services/tostify";
import "./Log.css";
import TableComp from "./Table";

// Functional component for the Log page
const Log = () => {
   // State to track loading status
  const [loading, setLoading] = useState(true);

  // Accessing context data
  const contextData = useContext(Context);

  // Fetching log details on component mount
  useEffect(() => {
    getLogDetails()
      .then((res) => {
        setLoading(false);
        contextData.setLogData(res.data);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "ERR_NETWORK") {
          errorToast("Network Error");
        }
        setLoading(false);
        errorToast("Error");
      });
  }, []);// Empty dependency array ensures useEffect runs only once on mount
  
  return (
    <div className=" logStyle container-md">
      {loading ? (
        <div
          className="d-flex align-items-center w-100 justify-content-center"
          style={{ height: "80vh" }}
        >
          <CircularLoadingWithMultipleCircle />
        </div>
      ) : (
        <div className="tableComp ">
          <TableComp />
          {contextData.logData.length === 0 && (
            <div className="imgStyleLog">
              <img
                className="imgTag"
                src="https://www.eduplusnow.com/assets/social-img/No-Data-Found-Image.png"
                alt="No Date Found!"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Log;
