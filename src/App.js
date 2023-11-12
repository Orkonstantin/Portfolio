import "./styles.css";
import React from "react";
import AppNavbar from "./components/AppNavbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Characteristics from "./components/Characteristics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ProjectsGallery from "./components/ProjectsGallery";
export default function App() {

  return (
    <div className="App">
      <AppNavbar />
      <Introduction />
      <AboutMe />
      <Characteristics />
      <Skills />
      <Projects />
      {/*<ProjectsGallery/>*/}
      <ContactMe />
      <Footer />
    </div>
  );
}