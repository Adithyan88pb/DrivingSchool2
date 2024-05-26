import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./course.css";
const Course = () => {
  return (
    <section className="coures_section">
      <Container>
        <Row>
          <Col sm="3">
            <div className="coures_fist_section">
              <span className="span_main">22K+</span>{" "}
              <span>Course Complete</span>
            </div>
          </Col>
          <Col sm="3">
            <div className="coures_fist_section">
              <span className="span_main">22K+</span>{" "}
              <span>Course Complete</span>
            </div>
          </Col>
          <Col sm="3">
            <div className="coures_fist_section">
              <span className="span_main">22K+</span>{" "}
              <span>Course Complete</span>
            </div>
          </Col>
          <Col sm="3">
            <div className="coures_fist_section">
              <span className="span_main">22K+</span>{" "}
              <span>Course Complete</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Course;
