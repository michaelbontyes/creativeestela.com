import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeroImg from "../images/hero.png"

const Hero = () => (
<div className="uk-card uk-card-default uk-card-body uk-cover-container uk-height-medium uk-width-margin">
  <img src={HeroImg} alt="thumbnail1" data-uk-cover/>
</div>
)

export default Hero
