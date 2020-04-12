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
    <nav className="uk-navbar uk-container" data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center">
          <li>
            <a href="/"><img src={Logo} width="auto" height="8px"  alt="logo"/></a>
          </li>
        </ul>
      </nav>
      <nav className="uk-navbar uk-container" data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center footer-social-nav">
          <li>
            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
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
