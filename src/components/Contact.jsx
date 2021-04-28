import React from 'react'

export default function Contact() {
  
  return (
    <div class='contact' id='contact'>
      <p class='body-header'>MY CONTACT</p>
      <form class="contact__form" action="https://formspree.io/xpzqaewg" method="POST">
        <div>
        <input class="contact__form--input" type="text" name="name" placeholder='YOUR NAME'></input>
        <input class="contact__form--input" type="text" name="_replyto" placeholder='YOUR EMAIL'></input>
        </div>
        <div class='message-section'>
        <textarea class='message-section--text' name="message"  placeholder='YOUR MESSAGE'></textarea>
        <button class="message-section--button" type="submit" value="Send"><p class='button-link'>SEND</p></button>
        </div>
      </form>
    </div>
  )
}
