import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="l-container">
    <h1>NOT FOUND</h1>
    <p>Whoops, you took a wrong turn somewhere</p>
    <Link to="/">Return to home?</Link>
  </div>
)

export default NotFoundPage
