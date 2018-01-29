import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.sass'

class TemplateWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      navOpen: false
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }
  
  handleNavClick = function(){
    if(window.matchMedia("(max-width: 650px)").matches){
      this.setState(function(prevState, props){
        return {
          navOpen: !prevState.navOpen
        };
      });
    }
  }

  closeNav = function(){
    this.setState(function(prevState, props){
      return {
        navOpen: false
      }
    });
  }

  componentDidMount(){
    window.addEventListener("resize", this.closeNav.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.closeNav.bind(this))
  }

  render(){
    const navOpen = this.state.navOpen;
    const navClass = "nav-open";
    return(
      <div>
        <Helmet
          title="Elena Rosemond-Hoerr for NHC Board of Education"
          meta={[
            { name: 'theme-color', content: '#ffffff' },
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
            { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet' },
            { href: '/apple-touch-icon.png', rel: "apple-touch-icon", sizes: "180x180" },
            { href: '/favicon-32x32.png', rel: 'icon', type: 'image/png', sizes: '32x32' },
            { href: '/favicon-16x16.png', rel: 'icon', type: 'image/png', sizes: '16x16'},
            { href: '/safari-pinned-tab.svg', rel: 'mask-icon', color: '#5bbab5' },

          ]}
        />
        <div className={`l-page-container ${navOpen ? navClass : ''}`} >
          <Header handleNavClick={ this.handleNavClick } navOpen={ this.state.navOpen } closeNav={ this.closeNav } />
          <div className={`l-content-container ${navOpen ? 'is-open' : ''}`}>
            {this.props.children()}
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
  

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
