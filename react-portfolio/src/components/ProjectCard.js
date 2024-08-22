import React from "react";
import { Col } from "react-bootstrap";
import arrow from "../assets/img/arrow.svg";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col className="proj-col">
      <a href={link} target="_blank" className="proj-col-div">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <button className="mt-4 view-button">
                <a href={link} target="_blank">
                  Visit Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
