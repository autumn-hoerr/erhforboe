import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../SocialLinks'
import MailchimpForm from '../MailchimpForm'
import './footer.sass'

const Footer = () => (
  <footer className="c-footer">
    <div className="c-subscribe">
      <div className="l-container">
        <span className="c-subscribe__headline">Stay Informed</span>
        <div className="c-simple-form">
          <MailchimpForm />
        </div>
      </div>
    </div>
    <div className="l-container">
      <SocialLinks />
      <div className="c-paid-for">
        <div className="c-whitebox">Paid for by Elena Rosemond-Hoerr for School Board Committee</div>
      </div>
    </div>
  </footer>
)

export default Footer