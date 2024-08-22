import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/food_delivery.png";
import projImg2 from "../assets/img/flix_gpt.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projectList = [
    {
      title: "FeastFast",
      description:
        "React application that clones a Food Delivery Application and is hosted on vercel",
      imgUrl: projImg1,
      eventKey: "first",
      link: "https://food-delivery-clone-neon.vercel.app/",
    },
    {
      title: "FlixGPT",
      description:
        "React application that clones a popular movie streaming application and is hosted on firebase",
      imgUrl: projImg2,
      eventKey: "second",
      link: "https://flixgpt-54d6b.web.app/",
    },
    // {
    //   title: "Food Delivery Clone",
    //   description: "React application that clones a Food Delivery Application",
    //   imgUrl: projImg1,
    //   eventKey: "third",
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are a few past design projects I've worked on.</p>
                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">FeastFast</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">FlixGPT</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                      <Row>
                        {projectList.map((project, index) => {
                          return (
                            <Tab.Pane eventKey={project.eventKey}>
                              <ProjectCard key={index} {...project} />
                            </Tab.Pane>
                          );
                        })}
                      </Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="arrow" src={colorSharp2} />
    </section>
  );
};

export default Projects;
