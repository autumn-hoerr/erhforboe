import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Elena Rosemond-Hoerr for NHC Board of Education"
      meta={[
        { name: 'description', content: 'Elena Rosemond-Hoerr for New Hanover County Board of Education' },
        { name: 'keywords', content: 'Elena Rosemond-Hoerr, Board of Education, New Hanover County, school board, elena' },
        { name: 'referrer', content: 'always'},
        { name: 'robots', content: 'all' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'Elena Rosemond-Hoerr for NHC Board of Education'},
        { name: 'og:url', content: 'https://www.erhforboe.com' },
        { name: 'og:title', content: 'Elena Rosemond-Hoerr for NHC Board of Education' },
        { name: 'og:image', content: 'https://www.erhforboe.com/imgs/og-image.jpg' },
        { name: 'og:description', content: 'I believe in a robust public school system that provides our students with the resources and opportunities to become leaders in a rapidly evolving global society. I want to support students, parents, and teachers in their shared goal- thriving schools in New Hanover County.' },
        { name: 'og:see_also', content: 'https://twitter.com/erhforboe' },
        { name: 'og:see_also', content: 'https://www.facebook.com/erhforboe' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@erhforboe' },
        { name: 'twitter:title', content: 'Elena Rosemond-Hoerr for New Hanover County Board of Education' },
        { name: 'twitter:image', content: 'https://www.erhforboe.com/imgs/og-image.jpg' },
        { name: 'twitter:description', content: 'I believe in a robust public school system that provides our students with the resources and opportunities to become leaders in a rapidly evolving global society. I want to support students, parents, and teachers in their shared goal- thriving schools in New Hanover County.' },
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet' }
      ]}
    />
    <div className="l-page-container" >
      <Header />
      <div className="l-content-container">
        {children()}
      </div>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
