import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import logo from "./mail.png";
import "./Navbar.css";
import { IoHome, IoSend, IoSettingsSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { FaPowerOff  } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

// Functional component for the navigation bar
function NavComp() {
  const navigate = useNavigate();
  const contextData = useContext(Context);

  // Function to handle user logout
  function handleLogout() {
    localStorage.clear();
    contextData.setNavFlag(false);
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand onClick={() => navigate("/")} className="overflow-auto">
            <b>
              {window.innerWidth < 770 ? (
                <img src={logo} alt="" className="imageStyle " />
              ) : (
                "BULK EMAIL TOOL"
              )}
            </b>
          </Navbar.Brand>
          {contextData.navFlag ? (
            <>
              {" "}
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")} className="hover">
                  {window.innerWidth < 770 ? <IoHome /> : "HOME"}
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/compose")}
                  className="hover"
                >
                  {window.innerWidth < 770 ? <IoSend /> : "COMPOSE"}{" "}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/graph")} className="hover">
                  {window.innerWidth < 770 ? <GoGraph /> : "GRAPH"}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/log")} className="hover">
                  {window.innerWidth < 770 ? <TbListDetails /> : "LOG"}
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/settings")}
                  className="hover"
                >
                  {window.innerWidth < 770 ? <IoSettingsSharp /> : "SETTINGS"}
                </Nav.Link>
              </Nav>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="tooltip"
                onClick={handleLogout}
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables."
              >
                {window.innerWidth < 770 ? <FaPowerOff  /> : "LOGOUT"}
              </button>
            </>
          ) : (
            <>
              <Nav className="me-auto"></Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
