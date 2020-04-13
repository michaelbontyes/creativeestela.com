import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import Layout from '../components/Layout'

class Contact extends Component {
  render() {

    return (
    <>

        <Layout>
          <SEO title="Contact"/>
          <div class="uk-section uk-margin-top uk-padding-remove">
            <div class="uk-container">
              <div class="" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100">
                <div class="uk-flex uk-flex-middle uk-flex-center uk-text-center uk-scrollspy-inview uk-animation-fade">
                  <div class="uk-width-1-3@s uk-card uk-text-center">
                    <h2 class="page-title">Send me a message</h2>
                    <form
                    name="contact"
                    method="POST"
                    action="/thanks"
                    data-netlify="true">
                    <p>
                    <label class="uk-form-label" for="form-stacked-text">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="" required/>
                    </div>
                    </p>
                    <p>
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" id="form-stacked-text" type="email" name="email" placeholder="" required/>
                      </div>
                    </p>
                    <p>
                      <label class="uk-form-label" for="form-stacked-text">Message</label>
                      <div class="uk-form-controls">
                          <textarea class="uk-textarea" rows="5" name="message" placeholder="" required></textarea>
                      </div>
                    </p>
                    <p>
                      <button class="uk-button uk-button-default" type="submit">Send</button>
                    </p>
                  </form>
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

export default Contact
