import React from "react";
import { Image } from "react-bootstrap";
import bootstrapIcon from "../images/bootstrapIcon.png";
import cIcon from "../images/cIcon.png";
import cppIcon from "../images/cppIcon.png";
import cssIcon from "../images/cssIcon.png";
import gitHubIcon from "../images/gitHubIcon.png";
import gitIcon from "../images/gitIcon.png";
import htmlIcon from "../images/htmlIcon.png";
import javaIcon from "../images/javaIcon.png";
import jqueryIcon from "../images/jqueryIcon.png";
import jsIcon from "../images/jsIcon.png";
import mongoDBIcon from "../images/mongoDBIcon.png";
import mySQLIcon from "../images/mySQLIcon.png";
import nextJsIcon from "../images/nextJsIcon.png";
import nodeJSIcon from "../images/nodeJSIcon.png";
import phpIcon from "../images/phpIcon.png";
import pythonIcon from "../images/pythonIcon.png";
import reactIcon from "../images/reactIcon.png";
import tailwindcssIcon from "../images/tailwindcssIcon.png";

const skills = [
  { skillName: "HTML", imgSrc: htmlIcon },
  { skillName: "CSS", imgSrc: cssIcon },
  { skillName: "Bootstrap", imgSrc: bootstrapIcon },
  { skillName: "Tailwind CSS", imgSrc: tailwindcssIcon },
  { skillName: "JavaScript", imgSrc: jsIcon },
  { skillName: "jQuery", imgSrc: jqueryIcon },
  { skillName: "React", imgSrc: reactIcon },
  { skillName: "NextJs", imgSrc: nextJsIcon },
  { skillName: "NodeJs", imgSrc: nodeJSIcon },
  { skillName: "PHP", imgSrc: phpIcon },
  { skillName: "Python", imgSrc: pythonIcon },
  { skillName: "C", imgSrc: cIcon },
  { skillName: "C++", imgSrc: cppIcon },
  { skillName: "Java", imgSrc: javaIcon },
  { skillName: "MySQL", imgSrc: mySQLIcon },
  { skillName: "MongoDB", imgSrc: mongoDBIcon },
  { skillName: "Git", imgSrc: gitIcon },
  { skillName: "GitHub", imgSrc: gitHubIcon },
];

const Skill = ({ skillName, imgSrc }) => {
  return (
    <td className={"text-center m-0 pb-2 pt-2"}>
      <Image src={imgSrc} alt={skillName} className="skillsImageSize" />
      <p className="skillTitle mb-0">{skillName}</p>
    </td>
  );
};

// Split the skills array into chunks of 3
const rows = [];
for (let i = 0; i < skills.length; i += 3) {
  rows.push(skills.slice(i, i + 3));
}

const SkillsList = () => {
  return (
    <>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              imgSrc={skill.imgSrc}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkillsList;
