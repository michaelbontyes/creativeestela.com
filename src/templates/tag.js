import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import { Link } from "gatsby"
import { Button} from 'react-bootstrap'

const Tag = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { name: tag } = pageContext
  const title = `${tag} work (${totalCount} project${
    totalCount === 1 ? '' : 's'
  })`

  return (
    <Layout>
      <Helmet title={`${tag} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
