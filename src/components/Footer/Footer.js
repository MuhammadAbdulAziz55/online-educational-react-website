import React from "react";
import { blog } from "../../fakeData";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="newsLetter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter -Stay tune and get the latest update</h1>
            <span>far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIC COACH</h1>
            <span>online education & learning</span>

            <p>
              Id ad ut incididunt Lorem nostrud ex consectetur reprehenderit.
            </p>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quck Links</h3>
            <ul>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="bxo">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>

                    <label htmlFor="">{val.date}</label>
                  </span>
                  <h4>{val.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box  last">
            <h3>Have a Questions</h3>
            <ul>
              <li>
                <i className="fa fa map"></i>
                29/A, Ring Road, Mohammadpur, Dhaka
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                abdulazizfrince5@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div>
        <p className="legal">
          Copyright @2022 All rights reserved | Build
          <i className="fa fa-heart"></i> By M. Abdul Aziz
        </p>
      </div>
    </>
  );
};

export default Footer;
