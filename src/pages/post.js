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

            wordpress content
        </div>
    </div>
  </Layout>
)

export default Post
