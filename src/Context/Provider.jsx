import { subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  // State for user authentication status
  const [navFlag, setNavFlag] = useState(false);

  // State for modals
  const [isComposeRecipientModalOpen, setComposeRecipientModalOpen] =
    useState(false);
  const [isExampleModalOfExcelOpen, setExampleModalOfExcelOpen] =
    useState(false);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);

  // State for log data and time range
  const [logData, setLogData] = useState([]);
  const [timeStamp, setTimeStamp] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Checks user authentication on component mount
  useEffect(() => {
    if (localStorage.getItem("x-Auth-token")) {
      setNavFlag(true);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        navFlag,
        setNavFlag,
        isComposeRecipientModalOpen,
        setComposeRecipientModalOpen,
        isExampleModalOfExcelOpen,
        setExampleModalOfExcelOpen,
        isPreviewModalOpen,
        setPreviewModalOpen,
        logData,
        setLogData,
        timeStamp,
        setTimeStamp,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
