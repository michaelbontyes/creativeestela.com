import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Grid from "../components/grid"
import Hero from "../components/hero"
import Thumbail3 from "../images/thumbnail3.png"

import PostList from '../components/PostList'
import NavBar from '../components/Navbar'

const WorkPage = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const title = "Work"

  return (
    <Layout>
      <Helmet title={`${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: {slug: {ne: "homepage"}, categories: {elemMatch: {slug: {eq: "portfolio"}}}}, sort: {fields: date, order: DESC})
    {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`
