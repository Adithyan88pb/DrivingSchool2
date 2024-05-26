import React from "react";
import "./WelcomeToDriving.css";
import { Col, Container, Row } from "react-bootstrap";
import LearningRoadsImage from "../../Assets/pexels-pixabay-416974.jpg";
import BasicLessons from "../../Assets/pexels-jeshootscom-13861.jpg";
import ExperiencedInstructors from "../../Assets/woman-male-driving-instructor-during-driving-test.jpg";

const WelcomeToDriving11 = [
  {
    title: "Learning Roads",
    imgSrc: LearningRoadsImage,
  },
  {
    title: "Basic Lessons",
    imgSrc: BasicLessons,
  },
  {
    title: "Experienced instructors",
    imgSrc: ExperiencedInstructors,
  },
];

const WelcomeToDriving = () => {
  return (
    <section className="WelcomeToDriving_section">
      <div className="WelcomeToDriving_h1-section text-center">
        <h1 className="welcome">Welcome to Driving School!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          praesentium.
        </p>
      </div>

      <section className="WelcomeToDriving_Image_section">
        <Container>
          <Row>
            {WelcomeToDriving11.map((item) => (
              <Col lg="4">
                <div className="img-container">
                  <div className="h6_section">
                    <h6>{item.title}</h6>
                  </div>
                  <img src={item.imgSrc} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default WelcomeToDriving;
