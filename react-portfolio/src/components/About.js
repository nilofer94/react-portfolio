import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import photo from "../assets/img/nilo.jpg";
import TrackVisibility from "react-on-screen";
import ColorSharp from "../assets/img/color-sharp.png";
import "animate.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about-box wow zoomIn">
          <Row className="d-flex">
            <Col xs={12} md={6} xl={7}>
              <div className="">
                <h2>About Me</h2>
                <p>
                  I build things for the web. I use my passion and skills to
                  create digital products and experiences.I build pixel-perfect,
                  engaging, and accessible digital experiences.I'm quietly
                  confident, naturally curious, and perpetually working on
                  improving my chops.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="skill-box wow zoomIn">
                <img src={photo} alt="photo" className="photo" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <img className="background-image-left" src={ColorSharp}></img>
    </section>
  );
};

export default About;
