import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Grid from "../components/grid"
import Hero from "../components/hero"
import Thumbail3 from "../images/thumbnail3.png"

const AboutPage = () => (

  <Layout>
    <SEO title="Home" />
    <div className="uk-section">
        <div className="uk-container">
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"  data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-body uk-text-left">
                        <h2>Bio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Thumbail3} alt="thumbnail3" className="uk-card uk-card-default uk-cover-container " />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Grid/>
  </Layout>
)

export default AboutPage
