import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"


import Layout from '../components/Layout'
import PostList from '../components/PostList'
import NavBar from '../components/Navbar'

import Hero from "../components/hero"

class Homepage extends Component {
  render() {
    const data = this.props.data
    const { edges: posts, totalCount } = data.allWordpressPost
    const { edges: pages } = data.allWordpressPage
    const { title: siteTitle } = data.site.siteMetadata
    const title = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } `
    return (
    <>

        <Layout pages={pages}>
          <SEO title="Home" />
          <div className="uk-section">
              <div className="uk-container">
                <div className="uk-flex uk-flex-center" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
                  <div className="uk-width-2-3@s uk-margin-top uk-margin-bottom">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h4>
                  </div>
                </div>
              </div>
          </div>
          <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" >
          <Hero/>
          </div>
          <PostList posts={posts} title="" />

        </Layout>

      </>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "portfolio"}}}}, sort: {fields: date, order: DESC})
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
