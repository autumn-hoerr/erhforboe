import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../SocialLinks'

import './header.sass'
import logo from "./imgs/logo.svg";

console.log(logo)

const Header = () => (
  <header className="c-header">
    <div className="l-container">
      <Link to="/" exact className="c-main-nav__link--home">
        <img src={logo} alt="ERH for BOE" title="Home" />
      </Link>
      <nav className="c-navigation">
        <Link to="/about" exact activeClassName="is-active" className="c-main-nav__link">About</Link>
        <Link to="/issues" exact activeClassName="is-active" className="c-main-nav__link">Issues</Link>
        <a href="https://donorbox.org/elena-rosemond-hoerr-for-school-board" className="c-main-nav__link--donate">Donate</a>
      </nav>
      <h2 className="h-mobile-only c-social-links__intro">Stay connected:</h2>
      <SocialLinks />
    </div>
  </header>
)

export default Header
