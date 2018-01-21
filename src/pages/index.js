import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Hero from '../components/Hero';
import logo4 from '../img/erhforboe-04.svg';

const IndexPage = ({ data }) => (
  <main>
    <section>
        <Hero headerImage={data.headerImage} citation alt="Elena Rosemond-Hoerr and her family enjoying a day at Wrightsville Beach"/>
        <div className="l-container">
          <div className="c-why">
            <blockquote className="c-why__quote">
              <p>“I believe in a robust public school system that provides our students with the resources and opportunities to become leaders in a rapidly evolving global society. I want to support students, parents, and teachers in their shared goal—thriving schools in New Hanover County.”</p>
              <strong className="c-why__cite">— Elena Rosemond-Hoerr</strong>
            </blockquote>
            <img className="c-why__img" src={logo4} alt="Elena Rosemond-Hoerr for Board of Education" />
          </div>
        </div>
    </section>
  </main>
)

export default IndexPage

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp( id: { regex: "/family-large/"}) {
      sizes(maxWidth: 1074){
        ...GatsbyImageSharpSizes
      }
    }
  }
`
// export const query = graphql`
//   query homeHeroQuery {
//     file(relativePath: { eq: "elena-family-large.jpg" }) {
//       heroImg {
//         resolutions(width: 1024) {
//           ...GatsbyImageSharpResolutions
//         }
//       }
//     }
//   }
// `;