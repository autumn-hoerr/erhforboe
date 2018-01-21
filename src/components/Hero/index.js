import React from 'react'
import Img from "gatsby-image"

const Hero = props => (
  <div className="c-hero--patternBg">
    <div className="l-container">
      <Img sizes={props.headerImage.sizes}
            alt={props.alt} />
      
      { props.citation &&
        <span className="c-hero-photo-credit">
          <a href="http://www.erinltaylorphotography.com/" target="_blank" rel="noopener noreferrer">photo: Erin L. Taylor Photography</a>
        </span>
      }
    </div>
  </div>
)

export default Hero