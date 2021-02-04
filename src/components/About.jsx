import React from 'react'
import reactLogo from '../images/reactLogo.png'
import sassLogo from '../images/sassLogo.png'
import rubyOnRails from '../images/rubyOnRails.png'
import javascriptLogo from '../images/javascriptLogo.png'
import postgresqlLogo from '../images/postgresqlLogo.png'
import cssLogo from '../images/cssLogo.png'
import pythonLogo from '../images/pythonLogo.png'
import illustratorLogo from '../images/illustratorLogo.png'
import photoshopLogo from '../images/photoshopLogo.png'


let logos = [
  reactLogo, sassLogo, rubyOnRails, javascriptLogo,
  postgresqlLogo, cssLogo, pythonLogo, illustratorLogo,
  photoshopLogo

]

let logoSection = logos.map((x) => <img class='skills__list--logo' src={x}/>)

export default function About() {
  return (
    <div class='about' id='about'>
      <p class='body-header'>ABOUT THE PROGRAMMER</p>
      <p class='body-text about--text'>I am an energetic software engineer with a passion to produce clean and readable code. As a graduate of General Assembly's Software Immersive program in 2019, I spend my time taking classes in the field of programming and working on projects for myself and clients expanding my knowledge and skills in the programming world. </p>
      <div class='skills'>
        <p class='body-header skills--header'>SKILLS</p>
        <div class='skills__list'>
        {logoSection}
        </div>
      </div>
    </div>
  )
}
