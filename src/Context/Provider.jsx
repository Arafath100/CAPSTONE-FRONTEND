import { subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  // State for user authentication status
  const [navFlag, setNavFlag] = useState(false);

  // State for modals
  const [composeRecipientModalOpen, setComposeRecipientModalOpen] = useState(false);
  const [exampleModalOfExcelOpen, setExampleModalOfExcelOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

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
        composeRecipientModalOpen,
        setComposeRecipientModalOpen,
        exampleModalOfExcelOpen,
        setExampleModalOfExcelOpen,
        previewModalOpen,
        setPreviewModalOpen,
        logData,
        setLogData,
        timeStamp,
        setTimeStamp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
