import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import { navigateTo } from "gatsby-link"
import Image from "../components/image"
import SEO from "../components/seo"
import Recaptcha from "react-google-recaptcha"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (

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
                    method="post"
                    action="/thanks"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    onSubmit={this.handleSubmit}>
                    <noscript>
                      <p>This form won’t work with Javascript disabled</p>
                    </noscript>
                    <p>
                    <label class="uk-form-label" for="form-stacked-text">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="" onChange={this.handleChange} required/>
                    </div>
                    </p>
                    <p>
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-form-controls">
                          <input class="uk-input" id="form-stacked-text" type="email" name="email" placeholder="" onChange={this.handleChange} required/>
                      </div>
                    </p>
                    <p>
                      <label class="uk-form-label" for="form-stacked-text">Message</label>
                      <div class="uk-form-controls">
                          <textarea class="uk-textarea" rows="5" name="message" placeholder="" onChange={this.handleChange} required></textarea>
                      </div>
                    </p>
                    <Recaptcha
                      ref="recaptcha"
                      sitekey={RECAPTCHA_KEY}
                      onChange={this.handleRecaptcha}
                    />
                    <p>
                      <button class="uk-button uk-button-default submit-button" type="submit">Send</button>
                    </p>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>


    );
   }
 }
