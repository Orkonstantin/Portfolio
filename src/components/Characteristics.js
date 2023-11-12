import React from "react";
import { Container} from "react-bootstrap";
import { FaRegLightbulb,FaHandshake,FaLeanpub } from 'react-icons/fa';
const Characteristics = () => {

  return (
      <section id="Characteristics">
        <Container className="my-5">
          <h3 className="sectionHeader">Characteristics</h3>
          <h4 className="text-muted">
            Let me introduce you some of my strengths
          </h4>
          <br/>
          <div className="row text-center">

            <div className="col-md-4">
            <span className="fa-stack fa-4x spanIcon">
              <div className="circleIndex"><FaLeanpub className="iconIndex"/></div>
            </span>
              <h4 className="service-heading">Autodidact</h4>
              <p className="text-muted">
                Has high self-learning ability, with a constant hunger for
                expanding self-knowledge.
              </p>
            </div>

            <div className="col-md-4">
            <span className="fa-stack fa-4x spanIcon">
              <div className="circleIndex"><FaHandshake className="iconIndex"/></div>
            </span>
              <h4 className="service-heading">Team Player</h4>
              <p className="text-muted">
                Has excellent interpersonal skills. Loves working in a team
                knowing that people are violating each other.
              </p>
            </div>

            <div className="col-md-4">
            <span className="fa-stack fa-4x spanIcon">
              <div className="circleIndex"><FaRegLightbulb className="iconIndex"/></div>
            </span>
              <h4 className="service-heading">Creativity</h4>
              <p className="text-muted">
                Creative, with the ability to find solutions quickly and
                efficiently to problems that arise in real time.
              </p>
            </div>

          </div>
        </Container>
      </section>
  );
};
export default Characteristics;
