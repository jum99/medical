import React from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/nav-logo.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="container">
        <Link to="/" className="nav-link">
          <Navbar.Brand>
            <img src={logo} className="mb-3 ms-2 img-fluid" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          style={{ backgroundColor: "#e2f2ef", marginRight: "15px" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="ms-3" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link me-3 fw-600">
              Home
            </Link>
            <Link to="/hospitals" className="nav-link me-3 fw-600">
              Hospital
            </Link>
            <Link className="nav-link me-3 fw-600">Treatments</Link>
            <Link to="/doctors" className="nav-link me-3 fw-600">
              Doctors
            </Link>
            <Link className="nav-link me-3 fw-600">Testimonials</Link>
            <Link className="nav-link me-3 fw-600">Blogs</Link>
            <Link className="nav-link me-3 fw-600">Language</Link>

            <button className="common-btn me-3 fw-600 ">
              Get Medical Advise
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
