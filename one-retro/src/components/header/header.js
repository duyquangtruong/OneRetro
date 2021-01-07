import logo from "../../images/logo.png";
import { useState, useEffect } from "react";
import avatar from "../../images/avatar.jpeg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const GET_USER_API = "https://duyquangtruong-oneretro.herokuapp.com/users";

function Header() {
  const userId = sessionStorage.getItem("_id");
  const userFullname = sessionStorage.getItem("fullname");

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/boards">
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
              title={userFullname}
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
