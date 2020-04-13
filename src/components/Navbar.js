import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import logo from "../images/logo.png"

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: {fields: date, order: DESC}) {
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
      <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light, top: 200">
        <div className="uk-navbar-container">

          <nav className="uk-navbar uk-container" data-uk-navbar>
            <div className="uk-navbar-left">
            <a href="/">
              <img src={logo} className="logo" alt="logo"/>
            </a>
            </div>
            <div className="uk-navbar-right">
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
              <li>
                <a href="https://www.instagram.com/misssatellite/" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/estela-garcia-zamora" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
              </li>
              </ul>
              <a href="#" className="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon uk-toggle="target: #sidenav"></a>
            </div>
          </nav>
          <hr className="hr-container hr-dark"/>
        </div>
      </div>
        <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav">
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
