import React from 'react'
import Img from 'gatsby-image'

function createMarkup(txt) {
  return {__html: txt};
}

const Event = (props) => (
  <div className="c-about__event">
    <div className="c-about-event__img">
      <img src={`/static/about/${props.img}`} />
    </div>
    <p className="c-about-event__desc" dangerouslySetInnerHTML={createMarkup(props.txt)}>
    </p>
  </div>
)

export default Event;