import React from "react";
import "./Home.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import home_image from "../../Assets/joey-banks-YApiWyp0lqo-unsplash.jpg";
import home_image1 from "../../Assets/stephan-mahlke-fpgKH45Y6IQ-unsplash.jpg";
import Course from "../../Components/Course/Course";
import WelcomeToDriving from "../../Components/WelcomeToDriving/WelcomeToDriving";
import About from "../About/About";
import Review from "../../Components/Review/Review";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <section className="home__conatiner">
        <Container>
          <Row>
            <Col lg="6">
              <div className="home__content">
                <h1>How to drive good and safe</h1>
              </div>
              <div className="home_content-tow">
                <p>
                  Work for money and design for love i'am Ui/UX designer bassed
                  in india
                </p>
                <div>-----------------------------------</div>
              </div>
              <div class="nav-button">
                <button class="btn">
                  Contact <i class="uil uil-file-alt"></i>
                </button>
              </div>
              <div className="home__content_image1">
                <img src={home_image} alt="" />
              </div>
            </Col>
            <Col sm="6">
              <div className="home__content_image">
                <img src={home_image1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Course />
      <WelcomeToDriving />
      <About />
      <Cards />

      <main>
        <section className="container111">
          <div className="title">
            <h2 style={{ color: "black" }}>What our awesome customers say</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, ipsum.
            </p>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
