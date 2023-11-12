import React from "react";
import { Container, Table , Image } from "react-bootstrap";
import reactIcon from '../images/reactIcon.png';
import htmlIcon from '../images/htmlIcon.png';
import jsIcon from '../images/jsIcon.png';
import cssIcon from '../images/cssIcon.png';
import cppIcon from '../images/cppIcon.png';
import cIcon from '../images/cIcon.png';
import pythonIcon from '../images/pythonIcon.png';
import gitIcon from '../images/gitIcon.png';
import gitHubIcon from '../images/gitHubIcon.png';
import nodeJSIcon from '../images/nodeJSIcon.png';
import mongoDBIcon from '../images/mongoDBIcon.png';
import mySQLIcon from '../images/mySQLIcon.png';
import phpIcon from '../images/phpIcon.png';
import bootstrapIcon from '../images/bootstrapIcon.png';
import jqueryIcon from '../images/jqueryIcon.png';
const Skills = () => {

  return (
      <section id="skills">
      <Container className="my-5">
        <h3 className="sectionHeader">Skills</h3>
        <br/>
        <br/>
        <Table borderless className="Skills">
          <tbody>
          {/*first row*/}
          <tr>
            <td className="text-center">
              <Image src={pythonIcon} alt="Python" className="skillsImageSize"/>
              <p>Python</p>
            </td>
            <td className="text-center">
              <Image src={cIcon} alt="C" className="skillsImageSize"/>
              <p>C</p>
            </td>
            <td className="text-center">
              <Image src={cppIcon} alt="C++" className="skillsImageSize"/>
              <p>C++</p>
            </td>
          </tr>
          {/*second row*/}
          <tr>
            <td className="text-center">
              <Image src={phpIcon} alt="PHP" className="skillsImageSize"/>
              <p>PHP</p>
            </td>
            <td className="text-center">
              <Image src={nodeJSIcon} alt="NodeJs" className="skillsImageSize"/>
              <p>NodeJs</p>
            </td>
            <td className="text-center">
              <Image src={jsIcon} alt="JavaScript" className="skillsImageSize"/>
              <p>JavaScript</p>
            </td>
          </tr>
          {/*third row*/}
          <tr>
            <td className="text-center">
              <Image src={htmlIcon} alt="HTML" className="skillsImageSize"/>
              <p>HTML</p>
            </td>
            <td className="text-center">
              <Image src={cssIcon} alt="CSS" className="skillsImageSize"/>
              <p>CSS</p>
            </td>
            <td className="text-center">
              <Image src={reactIcon} alt="React" className="skillsImageSize"/>
              <p>React</p>
            </td>
          </tr>
          {/*fourth row*/}
          <tr>
            <td className="text-center">
              <Image src={jqueryIcon} alt="jQuery" className="skillsImageSize"/>
              <p>jQuery</p>
            </td>
            <td className="text-center">
              <Image src={bootstrapIcon} alt="Bootstrap" className="bootstrapImageSize"/>
              <p>Bootstrap</p>
            </td>
            <td className="text-center">
              <Image src={mySQLIcon} alt="MySQL" className="skillsImageSize"/>
              <p>MySQL</p>
            </td>
          </tr>
          {/*fifth row*/}
          <tr>
            <td className="text-center">
              <Image src={mongoDBIcon} alt="MongoDB" className="skillsImageSize"/>
              <p>MongoDB</p>
            </td>
            <td className="text-center">
              <Image src={gitIcon} alt="Git" className="skillsImageSize"/>
              <p>Git</p>
            </td>
            <td className="text-center">
              <Image src={gitHubIcon} alt="GitHub" className="skillsImageSize"/>
              <p>GitHub</p>
            </td>
          </tr>
          </tbody>
        </Table>
      </Container>
      </section>
  );
};
export default Skills;
