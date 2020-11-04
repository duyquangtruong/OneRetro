import logo from "../../images/logo.png";
import avatar from "../../images/avatar.jpeg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  let userInfo = sessionStorage.getItem("userInfo");
  userInfo = {
    name: "Trương Quang Duy",
    email: "truongquangduy343@gmail.com",
    username: "duyquangtruong",
    createdAt: "21/2/2012",
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          OneRetro
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <img
              className="mr-2"
              style={{ borderRadius: "50%" }}
              width="50"
              height="50"
              src={avatar}
            />
            <NavDropdown
              className="m-auto"
              title={userInfo.name}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/users">Account Info</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
