import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-Photoroom.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/thaslima-nilofer-953391172/"
                target="_blank"
              >
                {" "}
                <img src={navIcon1} alt="icon" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9789308138"
                target="_blank"
              >
                <img src={navIcon2} alt="icon" />
              </a>
            </div>
            <p>CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
