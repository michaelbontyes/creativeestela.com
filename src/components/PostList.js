import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <div className="uk-section">
          <div className="uk-container">
              <h2 className="has-text-weight-bold is-size-2 page-title">{title}</h2>
              <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" data-uk-grid>
              {posts.map(({ node: post }) => (
                <div>
                  <div className="uk-card" key={post.id}>
                    <div className="uk-card-media-top">
                        <Link to={post.slug}><img src={post.jetpack_featured_media_url} alt="" className="uk-animation-reverse uk-transform-origin-top-right"/></Link>
                    </div>
                    <div className="uk-card-body uk-margin-top uk-padding-remove">
                      <div class="uk-flex uk-flex-top uk-text-center">
                        <div class="uk-card uk-text-left uk-width-expand@m">
                            <div
                              className="content"
                              dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                            {post.tags && post.tags.length ? (
                              <div class="tags">
                                  {post.tags.map(tag => (
                                     <><Link class="uk-label" to={`/tags/${tag.slug}`}>{tag.name}</Link>&nbsp;&nbsp;</>
                                  ))}
                              </div>
                            ) : null}
                        </div>
                        <div class="uk-card uk-margin-left uk-text-right uk-width-auto@m">
                            <Link to={post.slug}>
                              <div className="link-chevron">
                                <FontAwesomeIcon icon="chevron-right" size="2x" />
                              </div>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
          </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    slug
    jetpack_featured_media_url
    tags {
      name
      slug
    }
  }
`
