import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Grid from "../components/grid"
import Hero from "../components/hero"


export default ({ data }) => (

  <Layout>
    <SEO title="Home" />

    <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
            <div className="uk-width-2-3@s">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h4>
            </div>
          </div>
        </div>
    </div>
    <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" >
    <Hero/>
    </div>
    <Grid/>
  </Layout>
)
