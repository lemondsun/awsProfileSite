import React from 'react'
import Menu from '../components/Menu'

export default function Contact() {
  const [page] = React.useState('contact')
  return (
    <div class='entire-page'>
    <Menu page={page}/>
    <div id='contact-page'>
      
    <h1 class='commented-title' >//Contact Me</h1>
    <div id="contact-form-area">
    <form id="contact-form" action="https://formspree.io/xpzqaewg" method="POST">
      <label>
            Your name:
            </label>
        <input class="form-input" type="text" name="name" ></input>
        
  <label>
            Your email:
            </label>
  <input class="form-input" type="text" name="_replyto"></input>

        <label>
            Your message:
            </label>
      <textarea class='message-area' name="message"></textarea>
   
  <button id="contact-form-button" type="submit" value="Send">send</button>
</form>
  </div>
      </div>
      </div>
  )
}
