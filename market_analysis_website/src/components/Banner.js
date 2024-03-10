import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {

  return (
    <div className="body">
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={12} xl={12}>
              <span className="tagline">AMD Innovation Showcase 2024</span>
              <p className="text-center">Shathurshika Chandrakumar | Lucky Im</p> {/* Added text-center class to center the <p> element */}
              <h1>{"Market Sentiment Analysis"}</h1>
         
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
