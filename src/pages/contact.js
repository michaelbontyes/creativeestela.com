import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import Layout from '../components/Layout'
import { navigateTo } from "gatsby-link";

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
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </p>
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
