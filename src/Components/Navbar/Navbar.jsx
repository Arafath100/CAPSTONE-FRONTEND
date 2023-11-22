import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import logo from "./mail.png";
import "./Navbar.css";
import { BiLogOutCircle } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";

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
            <img src={logo} alt="" className="imageStyle " />
            <b>BULK EMAIL TOOL</b>
          </Navbar.Brand>
          {contextData.navFlag ? (
            <>
              {" "}
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")} className="hover">HOME</Nav.Link>
                <Nav.Link onClick={() => navigate("/compose")} className="hover"> COMPOSE </Nav.Link>
                <Nav.Link onClick={() => navigate("/graph")} className="hover">GRAPH</Nav.Link>
                <Nav.Link onClick={() => navigate("/log")} className="hover">LOG</Nav.Link>
                <Nav.Link onClick={() => navigate("/settings")} className="hover">SETTINGS</Nav.Link>
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
                {window.innerWidth < 770 ? <BiLogOutCircle /> : <FaPowerOff />}
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
