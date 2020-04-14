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
    const excerpt = data.wordpressPost.excerpt
    const featuredImage = data.wordpressPost.jetpack_featured_media_url
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
                    <h4
                      className="content"
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    ></h4>
                  </div>
                </div>
              </div>
          </div>
          <div data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" >
            <div className="uk-card uk-card-body uk-cover-container uk-height-medium uk-width-margin">
              <img src={featuredImage} alt="thumbnail1" data-uk-cover/>
            </div>
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
    allWordpressPost(filter: {slug: {ne: "homepage"}, categories: {elemMatch: {slug: {eq: "portfolio"}}}}, sort: {fields: date, order: DESC})
    {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
    wordpressPost(slug: {eq: "homepage"}) {
      title
      excerpt
      jetpack_featured_media_url
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
