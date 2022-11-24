import React, { useState } from "react";
import Head from "./Heading/Head";
import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          {/* <BrowserRouter>
            <ul
              className={click ? "mobile-nav" : "flexSB"}
              onClick={() => setClick(false)}
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/journal">Journal</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </BrowserRouter> */}

          <div
            id="navButtonLink"
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <a className="link" href="/home">
              Home
            </a>
            <a className="link" href="/courses">
              All Courses
            </a>
            <a className="link" href="/about">
              About
            </a>
            <a className="link" href="/team">
              Team
            </a>
            <a className="link" href="/pricing">
              Pricing
            </a>
            <a className="link" href="/journal">
              Journal
            </a>
            <a className="link" href="/contact">
              Contact
            </a>
          </div>

          <div className="start">
            <div className="buttons">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
