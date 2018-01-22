import React from 'react'
import SubscribeFrom from 'react-mailchimp-subscribe'

const formProps = {
  action: '//erhforboe.us16.list-manage.com/subscribe/post?u=435329eb4fe6abe4e7ce163bc&amp;id=42604aad9f',
  messages: {
    inputPlaceholder: "Email",
    btnLabel: "Submit",
    sending: "Sending...",
    success: "Thank you for your interest",
    error: "Sorry, something went wrong. Please try again."
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}


const MailchimpForm = () => <SubscribeFrom {...formProps}/>

export default MailchimpForm