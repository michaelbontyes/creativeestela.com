import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import Layout from '../components/Layout'

class Thanks extends Component {
  render() {

    return (
    <>

        <Layout>
          <SEO title="Thank you page"/>
          <div class="uk-section uk-margin-top uk-padding-remove">
            <div class="uk-container">
              <div class="" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
                <div class="uk-flex uk-flex-middle uk-text-center uk-scrollspy-inview uk-animation-fade">
                  <div class="uk-card uk-text-center uk-width-expand">
                    <h2 class="page-title">Thank you for your message !</h2>
                    <h4>I will get back to you shortly</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

      </>
    )
  }
}

export default Thanks
