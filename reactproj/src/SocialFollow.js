import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

    export default function SocialFollow() {
    return (
        <div class="social-container">
        <h2>Sanjay Kumar S R</h2>
        <h3>© 2020 - A Simple Weather App in React JS.</h3>
        <a href="https://www.facebook.com/" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
        <a href="https://twitter.com/" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
        <a href="https://www.instagram.com/" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
        <a href="https://www.linkedin.com/in/sanjay-kumar-s-r/" className="linkedin social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /> </a>
    </div>
  );
}