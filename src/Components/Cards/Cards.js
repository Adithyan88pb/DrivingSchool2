import React from "react";
import "./Cards.css";
import { Container, Row } from "react-bootstrap";
const Cards = () => {
  return (
    <section className="section_container">
      <Container>
        <Row>
          <main className="main flow">
            <h1 className="main__heading text-dark"> Our Drivinig Courses</h1>
            <div className="main__cards cards">
              <div className="cards__inner">
                <div className="cards__card card">
                  <h2 className="card__heading">NORMAL DRIVING</h2>
                  <p className="card__price">$9.99</p>
                  <ul role="list" className="card__bullets flow">
                    <li>Access to standard workouts and nutrition plans</li>
                    <li>Email support</li>
                  </ul>
                  <a href="#basic" className="card__cta cta ">
                    Book Now
                  </a>
                </div>
                <div className="cards__card card">
                  <h2 className="card__heading">DEFENSIVE</h2>
                  <p className="card__price">$19.99</p>
                  <ul role="list" className="card__bullets flow">
                    <li>Access to advanced workouts and nutrition plans</li>
                    <li>Priority Email support</li>
                    <li>Exclusive access to live Q&A sessions</li>
                  </ul>
                  <a href="#pro" className="card__cta cta">
                    Book Now
                  </a>
                </div>
                <div className="cards__card card">
                  <h2 className="card__heading">POWER BOOSTER</h2>
                  <p className="card__price">$19.99</p>
                  <ul role="list" className="card__bullets flow">
                    <li>Access to advanced workouts and nutrition plans</li>
                    <li>Priority Email support</li>
                    <li>Exclusive access to live Q&A sessions</li>
                  </ul>
                  <a href="#pro" className="card__cta cta">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="overlay cards__inner"></div>
            </div>
          </main>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
