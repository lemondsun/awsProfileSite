import React from 'react'

export default function Hero() {
  return (
    <div class='hero-section'>
      <div class='hero-name'>
      <p class='heading-primary first-name'>JASON</p>
      <p class='heading-primary last-name'>MULLINGS</p>
      </div>
      <div class='hero-menu'>
        <a  class='heading-secondary' href='#about'>
          <p>THE PROGRAMMER</p>
        </a>
        <a class='heading-secondary' href='#work'>
        <p>MY WORK</p>
        </a>
        <a class='heading-secondary' href='#contact'>
          <p>CONTACT</p>
          </a>
      </div>
      {/*<div class='hero-menu-long'>
      <a  class='heading-secondary' href='#about'>
        <p>THE PROGRAMMER</p>
      </a>
      <a class='heading-secondary' href='#work'>
      <p>MY WORK</p>
      </a>
      <a class='heading-secondary' href='#contact'>
        <p>CONTACT</p>
        </a>
  </div>*/}
    </div>
  )
}
