import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {

  return (
    <footer className="footer">
      <p>Or Konstantin &copy; {new Date().getFullYear()}</p>
      <div className="footer-social-links">
        <a href="https://www.facebook.com/or.konstantin"  target='_blank'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/orkon_/"  target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/Orkon3101"  target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
