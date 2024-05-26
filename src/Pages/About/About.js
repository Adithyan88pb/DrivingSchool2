import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import about_image from "../../Assets/stephan-mahlke-fpgKH45Y6IQ-unsplash.jpg";
import about_image1 from "../../Assets/pexels-jeshootscom-13861.jpg";
const About = () => {
  const myStyle = {
    backgroundImage:
      "url('https://th.bing.com/th/id/OIP.2X_VIW3ALT7cVoWgZ_2PdwAAAA?w=289&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')",
    height: "200px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="about_section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="whyChoose">
              <h2>
                Why You choose <br /> Our school?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              </p>
            </div>
            <div className="div why-you-choose ">
              <h3>01,</h3>
              <p>
                Our instructors are highly trained professionals with years of
                experience in teaching driving skills.
              </p>
            </div>
            <div className="div why-you-choose ">
              <h3>02,</h3>
              <p>
                We understand that everyone has different schedules. That's why
                we offer flexible scheduling options to accommodate your busy
                lifestyle.
              </p>
            </div>
            <div className="div">
              <h3>03,</h3>
              <p>
                Learn to drive in comfort and style with our modern fleet of
                vehicles equipped with the latest safety features.
              </p>
            </div>
          </Col>

          <Col lg="3">
            <div className="hero__img-box">
              <img src={about_image} alt="" />
            </div>
          </Col>
          <Col lg="3">
            <div className="hero__img-box2 ">
              <img src={about_image1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
