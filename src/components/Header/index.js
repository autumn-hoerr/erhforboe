import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../SocialLinks'

import './header.sass'
import logo from "./imgs/logo.svg";

const Header = (props) => (
  <header className={`c-header ${props.navOpen ? 'nav-open' : '' }`}>
    <div className="l-container">
      <Link to="/" exact className="c-main-nav__link--home">
        <img src={logo} alt="ERH for BOE" title="Home" />
      </Link>
      <div className="navigation">
        <nav className="c-navigation">
          <Link to="/" exact activeClassName="is-active" className="h-mobile-only c-main-nav__link" onClick={props.handleNavClick}>Home</Link>
          <Link to="/about" exact activeClassName="is-active" className="c-main-nav__link" onClick={props.handleNavClick}>About</Link>
          <Link to="/issues" exact activeClassName="is-active" className="c-main-nav__link" onClick={props.handleNavClick}>Issues</Link>
          <a href="https://donorbox.org/elena-rosemond-hoerr-for-school-board" className="c-main-nav__link--donate">Donate</a>
        </nav>
        <h2 className="h-mobile-only c-social-links__intro">Stay connected:</h2>
        <SocialLinks />
      </div>
      <div className={`hamburger nav-trigger h-mobile-only ${props.navOpen ? 'is-active' : '' }`} id="hamburger-9" onClick={props.handleNavClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  </header>
)

export default Header