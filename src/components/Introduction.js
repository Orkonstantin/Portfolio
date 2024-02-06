import React from "react";
import { Button, Container } from "react-bootstrap";
const Introduction = () => {
  return (
    <section id="Introduction">
      <Container className="my-5">
        <div className="intro-text">
          <div className="intro-heading">Hi, It's Nice To Meet You</div>
          <div className="intro-lead-in">Let's get to know each other</div>
          <Button className="IntroBtn" variant="primary" href="#AboutMe">
            About Me
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default Introduction;
