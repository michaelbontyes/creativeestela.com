import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date
}) => {
  return (

    <div className="uk-section uk-padding-top-remove">
        <div className="uk-container">
          <div className="" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
          <div class="uk-flex uk-flex-middle uk-text-center">
            <div class="uk-card uk-text-left uk-width-expand@m">
              <h2 className="post-title">
              {title}
              </h2>
            </div>
            <div class="uk-card uk-margin-left uk-text-right uk-width-auto@m">
            {tags && tags.length ? (
              <>
                  {tags.map(tag => (
                     <><Link class="uk-label" to={`/tags/${tag.slug}`}>{tag.name}</Link>&nbsp;&nbsp;</>
                  ))}
              </>
            ) : null}
            </div>
          </div>

              <div class="entry-content"></div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />

            </div>
          </div>
        </div>

  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
    }
  }
`
