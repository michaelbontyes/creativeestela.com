import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FontAwesome from 'react-fontawesome'

import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light, top: 200">
      <div className="uk-navbar-container">
        <nav className="uk-navbar uk-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <a href="/">
              <img src={Logo} width="auto" height="8px"  alt="logo"/>
            </a>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/about">Who am I?</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </nav>
        <hr className="hr-container hr-dark"/>
      </div>
    </div>
    <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
    <div className="uk-offcanvas-bar">
        <ul className="uk-nav">
          <li className="uk-active">
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Who am I?</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="" class="uk-icon-button" data-uk-icon="twitter"></a>
          </li>
        </ul>
    </div>
</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
