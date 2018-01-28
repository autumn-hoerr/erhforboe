import React from 'react'
import Img from 'gatsby-image'
import Event from '../components/Event'
import events from '../data/events.js';

const AboutPage = ({ data }) => (
  <main>
    <section>
        <div className="l-container">
          <h1>About Elena Rosemond-Hoerr</h1>
          <div className="c-about-intro">
            <div className="c-about-intro__img">
              <Img sizes={data.elenaImage.sizes} />
            </div>
            <div className="c-about-intro__text">
              <h2>Overview:</h2>
              <p>Originally from Durham (and a proud graduate of Durham Public Schools!) I graduated with a BFA in photography from the Maryland Institute College of Art in 2008. For a number of years I worked within Baltimore Public Schools as a Museum Educator. In 2012 I moved to Wilmington with my husband Dan, joined Peace Rose Montessori School, and received my Montessori certification from the North American Montessori Center. I have been with Peace Rose ever since and am now a co-director in addition to teaching in the primary class. In 2016 Dan and I welcomed our son, Everett, who has taught me more about education in the past year than any of my training!</p>
            </div>
          </div>
        </div>
    </section>
    <section className="c-about-facts">
      <div className="l-container--small">
        <h2>A Background Steeped in Education:</h2>
        { events.map( event => {
          return <Event key={event.id} {...event} />
        })}
      </div>
    </section>
  </main>
)

export default AboutPage

export const pageQuery = graphql`
  query EventImageQuery {
    elenaImage: imageSharp( id: { regex: "/elena.jpg/"}) {
      sizes(maxWidth: 340){
        ...GatsbyImageSharpSizes
      }
    }
  }
`