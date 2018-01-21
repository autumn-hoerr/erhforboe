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


// <!-- Begin MailChimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
// 	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://erhforboe.us16.list-manage.com/subscribe/post?u=435329eb4fe6abe4e7ce163bc&amp;id=42604aad9f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
	
// 	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
//     <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_435329eb4fe6abe4e7ce163bc_42604aad9f" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup-->