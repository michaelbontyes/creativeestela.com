import React, { Component } from "react"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
      <Layout>
        <Helmet title={`${StaticPage.title} | Blog`} />
        <div className="uk-section">
            <div className="uk-container">
              <div className="" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
              <div class="uk-flex uk-flex-middle uk-text-center">
                <div class="uk-card uk-text-left uk-width-expand@m">
                  <h2 className="page-title">
                  {StaticPage.title}
                  </h2>
                </div>
              </div>

                  <div class="entry-content"></div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: StaticPage.content }}
                  />

                </div>
              </div>
            </div>
          </Layout>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
