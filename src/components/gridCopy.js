import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Thumbnail1 from "../images/thumbnail1.png"
import Thumbnail2 from "../images/thumbnail2.png"
import Thumbnail3 from "../images/thumbnail3.png"

const GridCopy = () => (

<div className="uk-section">
    <hr className="hr-container hr-red"/>
    <div className="uk-container">

        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200" data-uk-grid>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <a href="#"><img src={Thumbnail2} alt="" className="uk-animation-reverse uk-transform-origin-top-right"/></a>
                </div>
                <div className="uk-card-body">
                  <div class="uk-flex uk-flex-middle uk-text-center">
                    <div class="uk-card uk-text-left">
                      <a href="#"><h3 className="uk-card-title">Project Name</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                      <a href="#"><span class="uk-label">Label 1</span></a>&nbsp;&nbsp;
                      <a href="#"><span class="uk-label">Label 2</span></a>
                    </div>
                    <div class="uk-card uk-margin-left uk-text-right">
                      <a href="#"><p>  > </p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                <a href="#"><img src={Thumbnail1} alt="" className="uk-animation-reverse uk-transform-origin-top-right"/></a>
                </div>
                <div className="uk-card-body">
                  <div class="uk-flex uk-flex-middle uk-text-center">
                    <div class="uk-card uk-text-left">
                      <a href="#"><h3 className="uk-card-title">Project Name</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                      <a href="#"><span class="uk-label">Label 1</span></a>
                    </div>
                    <div class="uk-card uk-margin-left uk-text-right">
                      <a href="#"><p>  > </p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                <a href="#"><img src={Thumbnail3} alt="" className="uk-animation-reverse uk-transform-origin-top-right"/></a>
                </div>
                <div className="uk-card-body">
                  <div class="uk-flex uk-flex-middle uk-text-center">
                    <div class="uk-card uk-text-left">
                      <a href="#"><h3 className="uk-card-title">Project Name</h3></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                      <a href="#"><span class="uk-label">Label 1</span></a>&nbsp;&nbsp;
                      <a href="#"><span class="uk-label">Label 2</span></a>&nbsp;&nbsp;
                      <a href="#"><span class="uk-label">Label 3</span></a>
                    </div>
                    <div class="uk-card uk-margin-left uk-text-right">
                      <a href="#"><p>  > </p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
)

export default GridCopy
