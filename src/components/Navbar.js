import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
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
                  <img src={logo} width="auto" height="8px"  alt="logo"/>
                </a>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
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
              <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
            </li>
            </ul>
        </div>
    </div>
      </header>

    )}
  />
)

export default Navbar
