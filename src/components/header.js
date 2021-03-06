import PropTypes from "prop-types"
import React, { Component } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FontAwesome from 'react-fontawesome'

import Logo from "../images/logo.png"


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      Logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
  <header>

  <div class="top-wrap uk-position-relative uk-height-viewport">

    <div class="uk-position-top">
        <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200">
            <nav class="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li>
                            <Link
                            className="navbar-item"
                            data-uk-scroll="offset: 90"
                            to="/"
                            key="/"
                            activeClassName="">
                            <Img fluid={data.Logo.childImageSharp.fluid} className="navbar-logo logo" alt="Creative Estela"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-visible@m main-nav">
                        <li>
                        <h4><a href="#" data-uk-scroll="offset: 90">
                        Work
                        </a></h4></li>
                        <li>
                        <h4><a href="#" data-uk-scroll="offset: 90">
                        who Am I
                        </a></h4></li>
                        <li>
                        <h4><a href="#" data-uk-scroll="offset: 90">
                        Contact
                        </a></h4></li>
                        <li className="instagram-icon">
                        <a href="https://www.instagram.com" target="_blank" className="uk-active">
                        <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.469 0C2.918 0 0 2.914 0 6.469V15.531C0 19.082 2.914 22 6.469 22H15.531C19.082 22 22 19.086 22 15.531V6.47C22 2.918 19.086 0 15.531 0H6.469ZM6.469 2H15.531C16.1181 1.99921 16.6996 2.11427 17.2421 2.33857C17.7847 2.56288 18.2777 2.89204 18.6928 3.30718C19.108 3.72232 19.4371 4.21529 19.6614 4.75785C19.8857 5.30041 20.0008 5.8819 20 6.469V15.531C20.0008 16.1181 19.8857 16.6996 19.6614 17.2421C19.4371 17.7847 19.108 18.2777 18.6928 18.6928C18.2777 19.108 17.7847 19.4371 17.2421 19.6614C16.6996 19.8857 16.1181 20.0008 15.531 20H6.47C5.88282 20.0009 5.30122 19.886 4.75855 19.6617C4.21587 19.4375 3.72278 19.1083 3.30753 18.6932C2.89228 18.278 2.56304 17.785 2.33867 17.2424C2.1143 16.6998 1.99921 16.1182 2 15.531V6.47C1.99908 5.88282 2.11404 5.30122 2.33829 4.75855C2.56254 4.21587 2.89167 3.72278 3.30682 3.30753C3.72198 2.89228 4.215 2.56304 4.75762 2.33867C5.30025 2.1143 5.88182 1.99921 6.469 2V2ZM16.906 4.188C16.7869 4.18747 16.6688 4.21054 16.5587 4.25589C16.4485 4.30123 16.3484 4.36795 16.2642 4.45218C16.1799 4.53642 16.1132 4.6365 16.0679 4.74666C16.0225 4.85682 15.9995 4.97487 16 5.094C16 5.598 16.402 6 16.906 6C17.0252 6.00066 17.1434 5.97769 17.2536 5.9324C17.3639 5.88712 17.4641 5.82042 17.5485 5.73618C17.6328 5.65193 17.6996 5.5518 17.745 5.44157C17.7904 5.33134 17.8135 5.21321 17.813 5.094C17.8135 4.97479 17.7904 4.85666 17.745 4.74643C17.6996 4.6362 17.6328 4.53607 17.5485 4.45182C17.4641 4.36758 17.3639 4.30088 17.2536 4.2556C17.1434 4.21031 17.0252 4.18734 16.906 4.188V4.188ZM11 5C7.7 5 5 7.7 5 11C5 14.3 7.7 17 11 17C14.3 17 17 14.3 17 11C17 7.7 14.3 5 11 5ZM11 7C13.223 7 15 8.777 15 11C15 13.223 13.223 15 11 15C8.777 15 7 13.223 7 11C7 8.777 8.777 7 11 7Z" fill="#442E21"/>
                        </svg>
                        </a></li>
                        <li className="">
                        <a href="https://www.facebook.com" target="_blank" className="uk-active">
                        <svg width="8" height="15" viewBox="0 0 158 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.70312 165.106H39.6841V305C39.6841 307.762 41.9221 310 44.6841 310H102.3C105.062 310 107.3 307.762 107.3 305V165.765H146.364C148.904 165.765 151.041 163.859 151.331 161.336L157.264 109.834C157.427 108.417 156.978 106.998 156.03 105.935C155.081 104.871 153.723 104.262 152.298 104.262H107.302V71.978C107.302 62.246 112.542 57.311 122.878 57.311C124.351 57.311 152.298 57.311 152.298 57.311C155.06 57.311 157.298 55.072 157.298 52.311V5.037C157.298 2.275 155.06 0.037 152.298 0.037H111.753C111.467 0.023 110.832 0 109.896 0C102.861 0 78.4081 1.381 59.0921 19.151C37.6901 38.843 40.6651 62.421 41.3761 66.509V104.261H5.70312C2.94112 104.261 0.703125 106.499 0.703125 109.261V160.105C0.703125 162.867 2.94112 165.106 5.70312 165.106Z" fill="#442E21"/>
                        </svg>
                        </a></li>
                    </ul>
                    <button className="uk-navbar-toggle uk-hidden@m mobile-icon uk-navbar-nav uk-active mobile-nav-link" data-uk-toggle="target: #my-id" type="button">☰</button>
                </div>
            </nav>
        </div>
    </div>
</div>




 <a href="#my-id" data-uk-toggle></a>

 <div id="my-id" data-uk-offcanvas="flip: true" >
     <div class="uk-offcanvas-bar">
         <div class="uk-padding">
          <button class="uk-offcanvas-close" type="button" data-uk-close></button>
          <ul class="uk-navbar-nav side-nav">
            <li>
            <h4><a href="#" data-uk-scroll="offset: 90">
            Work
            </a></h4></li>
            <li>
            <h4><a href="#" data-uk-scroll="offset: 90">
            who Am I
            </a></h4></li>
            <li>
            <h4><a href="#" data-uk-scroll="offset: 90">
            Contact
            </a></h4></li>
          </ul>
          <ul class="uk-navbar-nav list-inline">
            <li className="icon instagram-icon">
            <a href="https://www.instagram.com" target="_blank" className="uk-active">
            <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.469 0C2.918 0 0 2.914 0 6.469V15.531C0 19.082 2.914 22 6.469 22H15.531C19.082 22 22 19.086 22 15.531V6.47C22 2.918 19.086 0 15.531 0H6.469ZM6.469 2H15.531C16.1181 1.99921 16.6996 2.11427 17.2421 2.33857C17.7847 2.56288 18.2777 2.89204 18.6928 3.30718C19.108 3.72232 19.4371 4.21529 19.6614 4.75785C19.8857 5.30041 20.0008 5.8819 20 6.469V15.531C20.0008 16.1181 19.8857 16.6996 19.6614 17.2421C19.4371 17.7847 19.108 18.2777 18.6928 18.6928C18.2777 19.108 17.7847 19.4371 17.2421 19.6614C16.6996 19.8857 16.1181 20.0008 15.531 20H6.47C5.88282 20.0009 5.30122 19.886 4.75855 19.6617C4.21587 19.4375 3.72278 19.1083 3.30753 18.6932C2.89228 18.278 2.56304 17.785 2.33867 17.2424C2.1143 16.6998 1.99921 16.1182 2 15.531V6.47C1.99908 5.88282 2.11404 5.30122 2.33829 4.75855C2.56254 4.21587 2.89167 3.72278 3.30682 3.30753C3.72198 2.89228 4.215 2.56304 4.75762 2.33867C5.30025 2.1143 5.88182 1.99921 6.469 2V2ZM16.906 4.188C16.7869 4.18747 16.6688 4.21054 16.5587 4.25589C16.4485 4.30123 16.3484 4.36795 16.2642 4.45218C16.1799 4.53642 16.1132 4.6365 16.0679 4.74666C16.0225 4.85682 15.9995 4.97487 16 5.094C16 5.598 16.402 6 16.906 6C17.0252 6.00066 17.1434 5.97769 17.2536 5.9324C17.3639 5.88712 17.4641 5.82042 17.5485 5.73618C17.6328 5.65193 17.6996 5.5518 17.745 5.44157C17.7904 5.33134 17.8135 5.21321 17.813 5.094C17.8135 4.97479 17.7904 4.85666 17.745 4.74643C17.6996 4.6362 17.6328 4.53607 17.5485 4.45182C17.4641 4.36758 17.3639 4.30088 17.2536 4.2556C17.1434 4.21031 17.0252 4.18734 16.906 4.188V4.188ZM11 5C7.7 5 5 7.7 5 11C5 14.3 7.7 17 11 17C14.3 17 17 14.3 17 11C17 7.7 14.3 5 11 5ZM11 7C13.223 7 15 8.777 15 11C15 13.223 13.223 15 11 15C8.777 15 7 13.223 7 11C7 8.777 8.777 7 11 7Z" fill="#442E21"/>
            </svg>
            </a></li>
            <li className="icon">
            <a href="https://www.facebook.com" target="_blank" className="uk-active">
            <svg width="8" height="15" viewBox="0 0 158 310" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.70312 165.106H39.6841V305C39.6841 307.762 41.9221 310 44.6841 310H102.3C105.062 310 107.3 307.762 107.3 305V165.765H146.364C148.904 165.765 151.041 163.859 151.331 161.336L157.264 109.834C157.427 108.417 156.978 106.998 156.03 105.935C155.081 104.871 153.723 104.262 152.298 104.262H107.302V71.978C107.302 62.246 112.542 57.311 122.878 57.311C124.351 57.311 152.298 57.311 152.298 57.311C155.06 57.311 157.298 55.072 157.298 52.311V5.037C157.298 2.275 155.06 0.037 152.298 0.037H111.753C111.467 0.023 110.832 0 109.896 0C102.861 0 78.4081 1.381 59.0921 19.151C37.6901 38.843 40.6651 62.421 41.3761 66.509V104.261H5.70312C2.94112 104.261 0.703125 106.499 0.703125 109.261V160.105C0.703125 162.867 2.94112 165.106 5.70312 165.106Z" fill="#442E21"/>
            </svg>
            </a></li>
          </ul>
        </div>
     </div>
 </div>

  </header>
);
};
export default Header
