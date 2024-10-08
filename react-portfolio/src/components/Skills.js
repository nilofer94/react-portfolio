import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import ColorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box wow zoomIn">
              <h2>Skills</h2>
              <p>
                I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND
                EXPERIENCES
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="skill-image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-image"></img>
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-image"></img>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-image"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-image"></img>
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-image"></img>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-image"></img>
                  <h5>Agile</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ColorSharp}></img>
    </section>
  );
};

export default Skills;
