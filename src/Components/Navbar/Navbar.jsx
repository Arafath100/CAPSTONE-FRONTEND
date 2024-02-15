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
import { FaPowerOff } from "react-icons/fa";
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
      <Navbar variant="dark" className="navbar">
        <Container >
          <Navbar.Brand onClick={() => navigate("/")} className="overflow-auto">
            <b className="logo">
              {window.innerWidth < 770 ? (
                <img src={logo} alt="" className="imageStyle " />
              ) : (
                "BULK EMAIL TOOL"
              )}
            </b>
          </Navbar.Brand>
          {/* <Navbar.Brand onClick={() => navigate("/")} className="overflow-auto">
            <img src={logo} alt="" className="imageStyle " />
            <b className="logo">BULK EMAIL TOOL</b>
          </Navbar.Brand> */}
          {contextData.navFlag ? (
            <>
              {" "}
              <Nav className="me-auto">
                <Nav.Link
                  onClick={() => navigate("/")}
                  className="hover home-link after"
                >
                  {window.innerWidth < 770 ? <IoHome /> : "HOME"}
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/compose")}
                  className="hover compose-link after"
                >
                  {window.innerWidth < 770 ? <IoSend /> : "COMPOSE"}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/graph")} className="hover graph-link after">
                  {window.innerWidth < 770 ? <GoGraph /> : "GRAPH"}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/log")} className="hover log-link after">
                  {window.innerWidth < 770 ? <TbListDetails /> : "LOG"}
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/settings")}
                  className="hover settings-link after"
                >
                  {window.innerWidth < 770 ? <IoSettingsSharp /> : "SETTINGS"}
                </Nav.Link>
              </Nav>
              <button
                type="button"
                className="btn btn-outline-info fw-bold"
                data-bs-toggle="tooltip"
                onClick={handleLogout}
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables."
              >
                {window.innerWidth < 770 ? <FaPowerOff /> : "LOGOUT"}
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