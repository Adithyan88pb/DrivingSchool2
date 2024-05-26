import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer-section mt-5">
        <div className="container">
          <div className="row">
            <div className="footer-content pt-5 ">
              <div className="baba">
                <p>Address: Lorem ipsum dolor sit amet.</p>
                <h4>DRIVING SCHOOL</h4>
                <div className="icons">
                  <p>Follow us on social media</p>
                  <div className="main_icons">
                    <FaInstagram className="insta" />
                  </div>
                  <div className="main_icons">
                    <FaFacebookF />
                  </div>
                  <div className="main_icons">
                    <CiTwitter />
                  </div>
                  <div className="main_icons">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-cta  pb-5"></div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      {/* <img src={Fc_clubs_image} className="img-fluid" alt="logo" /> */}
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#" >Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>

                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>

                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {year}, All Right Reserved
                    <a href="https://adithyan88pb.github.io/Adithyan/">
                      Adithyan Pb
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
