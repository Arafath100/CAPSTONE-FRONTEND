import { useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

// Functional component for rendering the log table
function TableComp() {
  // Accessing context data
  const contextData = useContext(Context);

  // Hook for navigation
  const navigate = useNavigate();

  return (
    <>
    <br />
    <Table striped className="text-start table-dark table-bordered border-info" style={{ overflowX: "auto" }}>
      <thead>
        <tr className="text-uppercase">
          <th>S.no</th>
          <th>Date(Day Month Date Year)</th>
          <th>Time</th>
          <th>Enveloped Email</th>
          <th>Total Emails</th>
          <th>Success</th>
          <th>Rejected</th>
          <th>Subject</th>
          <th>view</th>
        </tr>
      </thead>
      <tbody>
        {contextData.logData.map((data, inx) => {
          return (
            <tr key={`${inx}`}>
              <td>{inx + 1}</td>
              <td>{new Date(data.time).toDateString()}</td>
              <td>{new Date(data.time).toLocaleTimeString()}</td>
              <td>{data.from}</td>
              <td>{data.to.length}</td>
              <td>{data.accepted.length}</td>
              <td>{data.rejected.length}</td>
              <td>{data.subject}</td>
              <td>
                <Button
                  size="sm"
                  onClick={() => navigate("/login/info", { state: data })}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="View More Details"
                >
                  {/* <TbInfoSquareRounded /> */}
                  <FaInfoCircle />
                </Button>
                <Tooltip id="my-tooltip" place="bottom"></Tooltip>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </>
  );
}

export default TableComp;
