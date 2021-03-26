import React, { useState } from 'react'

import shotInFilmImg from '../images/shotInFilmImg.png'
import wiseWordsImg from '../images/wiseWordsImg.png'
import tartineImg from '../images/tartineImg.png'
import churchwebsite from  '../images/church.png'

import illustratorLogo from '../images/illustratorLogo.png'
import reactLogo from '../images/reactLogo.png'
import rubyOnRails from '../images/rubyOnRails.png'
import javascriptLogo from '../images/javascriptLogo.png'
import postgresqlLogo from '../images/postgresqlLogo.png'
import cssLogo from '../images/cssLogo.png'
import sassLogo from '../images/sassLogo.png'



export default function Work() {
  const [site, setSite] = useState(null)

  let shotInFilm = {
    src: shotInFilmImg,
    tech: [illustratorLogo, reactLogo, rubyOnRails, javascriptLogo, postgresqlLogo, cssLogo],
    site: 'https://www.shotinfilm.com/'
  }
  let wiseWords = {
    src: wiseWordsImg,
    tech: [reactLogo, javascriptLogo, cssLogo],
    site: 'http://wisewords.surge.sh/'
  }
  let tartine = {
    src: tartineImg,
    tech: [reactLogo, javascriptLogo, cssLogo],
    site: `http://tartine.surge.sh/`
  }

  let churchWebsite = {
    src: churchwebsite,
    tech: [reactLogo, javascriptLogo, cssLogo, sassLogo, illustratorLogo],
    site: 'http://churchsample.surge.sh/'
  }
  let stackImgs = shotInFilm.tech.map((img)=>  <img src={img} class='stack--image' alt='logo'/>)

  let detailsSection = (subject) => {
    stackImgs = subject.tech.map((img) => <img src={img} class='stack--image' alt='logo'/>)

      return (<div class='details'>
        <img src={subject.src} class='details--photo' alt='website snapshot'/>
        <div class='details__info'>
          <p class='body-text' >STACK</p>
          <div class='stack'>
            {stackImgs}
          </div>
          <a href={subject.site} target="_blank" rel="noopener noreferrer">
          <button class='details__info--button' >
              <p class='button-link' >
              VISIT SITE
              </p>
            </button>
            </a>
        </div>
      </div>
      )
  }
  return (
    <div class='work' id='work'>
      <div class='work-list'>
        <p class="body-header">MY WORK</p>
        <p class='body-link' onClick={() => setSite(shotInFilm)}>SHOT IN FILM</p>
        <p class='body-link' onClick={() => setSite(churchWebsite)}>CHURCH WEBSITE</p>
        <p class='body-link' onClick={() => setSite(wiseWords)}>WISE - WORDS</p>
        <p class='body-link' onClick={() => setSite(tartine)}>TARTINE</p>

      </div>
      {site !== null ?
        detailsSection(site)
        :
        <div class='details'>
        <img src={shotInFilmImg} class='details--photo' alt='website snapshot'/>
        <div class='details__info'>
      <p class='body-text stack--title'>STACK</p>
          <div class='stack'>
          {stackImgs}
            </div>
            <a href='https://www.shotinfilm.com/' target="_blank" rel="noopener noreferrer">
      <button class='details__info--button'>
        <p class='button-link'>VISIT SITE</p>
              </button>
              </a>
    </div>
      </div>}
    </div>
  )
}
