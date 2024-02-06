import React from "react";
import { Container, Table } from "react-bootstrap";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <section id="skills">
      <Container className="my-5">
        <h3 className="sectionHeader ">Skills</h3>
        <br />
        <br />
        <Table borderless className="Skills">
          <tbody>
            <SkillsList />
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Skills;
