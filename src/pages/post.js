import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Post = () => (

  <Layout>
    <SEO title="Home" />
    <div className="uk-section">
        <div className="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" data-uk-grid>
                <div>
                    <div className="uk-card uk-card-default ">
                      <div className="uk-card-media-top">
                          <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"/>
                      </div>
                      <div className="uk-card-body">
                          <h3 className="uk-card-title">Media Top</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-card-body">
                        <h3 className="uk-card-title">Primary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-card-body">
                        <h3 className="uk-card-title">Secondary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Post
