import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from "react-share";

import Logo from "../images/logo.png"

const Footer = () => (
<div className="uk-section uk-section-small">
  <hr className="hr-container hr-container-bottom hr-dark"/>
    <nav className="uk-navbar uk-container uk-visible@s" data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center">
          <li>
            <a className="logo" href="/"><img src={Logo} width="auto" height="8px"  alt="logo"/></a>
          </li>
        </ul>
      </nav>
      <nav className="uk-navbar uk-container social-footer uk-visible@s" data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center footer-social-nav">
          <li>
            <a href="https://www.instagram.com/misssatellite/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/estela-garcia-zamora" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
          </li>
        </ul>
    </nav>
    <nav className="uk-navbar uk-container uk-hidden@s" data-uk-navbar>
      <ul className="uk-navbar-nav uk-navbar-center footer-social-nav">
        <li>
          <a href="https://www.instagram.com/misssatellite/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/estela-garcia-zamora" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
        </li>
      </ul>
  </nav>
</div>


)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
