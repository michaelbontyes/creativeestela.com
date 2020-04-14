import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import logo from "../images/logo.png"

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: {fields: date, order: DESC}, filter: {slug: {ne: "homepage"}}) {
          edges {
            node {
              title
              slug
            }
          }
        },
        Logo: file(relativePath: { eq: "logo.png" }) {
             childImageSharp {
               fluid(maxWidth: 300) {
                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
               }
             }
           }
      }
    `}
    render={data => (

      <header>

            <div className="" data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200">
                <nav class="uk-navbar-container" data-uk-navbar>
                    <div class="uk-navbar-left uk-padding uk-padding-remove-bottom uk-padding-remove-top">
                        <a href="/">
                          <img src={logo} className="logo" alt="logo"/>
                        </a>
                    </div>
                    <div class="uk-navbar-right uk-padding uk-padding-remove-bottom uk-padding-remove-top">
                    <ul className="uk-navbar-nav uk-visible@m">
                      <li><Link
                        className="navbar-item"
                        to="/work"
                        key="/work"
                        activeClassName="active"
                      >
                        Work
                      </Link></li>
                      {data.allWordpressPage.edges.map(edge => (
                        <li>
                        <Link
                          className="navbar-item"
                          to={edge.node.slug}
                          key={edge.node.slug}
                          activeClassName="active"
                        >
                          {edge.node.title}
                        </Link>
                        </li>
                      ))}
                      <li><Link
                        className="navbar-item"
                        to="/contact"
                        key="/contact"
                        activeClassName="active"
                      >
                        Contact
                      </Link></li>
                      <li>
                        <a href="https://www.instagram.com/misssatellite/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/estela-garcia-zamora" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
                      </li>
                      </ul>
                        <button className="uk-button uk-button-large uk-navbar-toggle uk-hidden@m mobile-icon uk-navbar-nav uk-active mobile-nav-link" data-uk-toggle="target: #my-id" type="button">☰</button>
                    </div>
                </nav>
                <hr className="hr-container hr-dark"/>
            </div>



         <a href="#my-id" data-uk-toggle></a>

         <div id="my-id" data-uk-offcanvas="flip: true" className="uk-offcanvas">
             <div class="uk-offcanvas-bar">

              <ul class="uk-navbar-nav uk-nav side-nav">
            <li><Link
              className="navbar-item"
              to="/work"
              key="/work"
              activeClassName="active"
            >
              Work
            </Link></li>
              {data.allWordpressPage.edges.map(edge => (
              <li>
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
                activeClassName="active"
                >
                {edge.node.title}
              </Link>
              </li>
            ))}
            <li><Link
              className="navbar-item"
              to="/contact"
              key="/contact"
              activeClassName="active"
            >
              Contact
            </Link></li>
            <li>
              <hr class="uk-divider-small uk-margin-top"/>
            </li>
            <li>
              <a href="https://www.instagram.com/misssatellite/" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/estela-garcia-zamora" target="_blank">LinkedIn</a>
            </li>
            </ul>

       </div>
   </div>
      </header>

    )}
  />
)

export default Navbar
