import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// import react icons
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const NavSection = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  li {
    margin: 0px 10px;
  }
  a {
    cursor: pointer;
  }

  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: auto;
    right: 0;
  }

  @media screen and (max-width: 992px){
    .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    width: 220px;
  }
  }
`;

const Navbar = ({ user, logout }) => {
  return (
    <NavSection>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container">
          <Link to="/home" className="navbar-brand fw-bolder">
            Yummy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navToggle">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="hero" className="nav-link" smooth={true} duration={0}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="menu" className="nav-link" smooth={true} duration={0}>
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="events"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="chefs"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Chefs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="gallery"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle">
                      Dropdown 4
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Deep dropdown 1
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  smooth={true}
                  duration={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUser />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item fw-bolder" href="#">
                    {user.fullName}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-secondary" href="#">
                    {user.email}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={logout}>
                    <IoMdLogOut /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </NavSection>
  );
};
export default Navbar;
