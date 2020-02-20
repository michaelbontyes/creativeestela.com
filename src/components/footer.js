import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.png"

const Footer = () => (
<div className="uk-section uk-section-small">
  <hr className="hr-container hr-dark"/>
    <nav className="uk-navbar uk-container" data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center">
          <li>
            <img src={Logo} width="auto" height="8px"  alt="logo"/>
          </li>
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
