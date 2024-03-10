import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner_graph = () => {

  return (
    <div className="body">
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
           <Col xs={20} md={20} xl={20}>
              <span className="tagline">AMD Innovation Showcase 2024</span>
              <p className="text-center">Shathurshika Chandrakumar | Lucky Im</p> {/* Added text-center class to center the <p> element */}
              <h1>{"Market Sentiment Analysis"}</h1>
              <h2> {"Future graph to be implemented about the result of analysis"}
              </h2>
              </Col>
      
          </Row>
        </Container>
      </section>
      
    </div>

    
  );
};
