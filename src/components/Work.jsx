import React, { useState } from 'react'
import shotInFilmImg from '../images/shotInFilmImg.png'
import wiseWordsImg from '../images/wiseWordsImg.png'
import tartineImg from '../images/tartineImg.png'

import illustratorLogo from '../images/illustratorLogo.png'
import reactLogo from '../images/reactLogo.png'
import rubyOnRails from '../images/rubyOnRails.png'
import javascriptLogo from '../images/javascriptLogo.png'
import postgresqlLogo from '../images/postgresqlLogo.png'
import cssLogo from '../images/cssLogo.png'


export default function Work() {
  const [site, setSite] = useState(null)

  let shotInFilm = {
    src: shotInFilmImg,
    tech: [illustratorLogo,reactLogo,rubyOnRails,javascriptLogo,postgresqlLogo,cssLogo]
  }
  let wiseWords = {
    src: wiseWordsImg,
    tech: [reactLogo, javascriptLogo, cssLogo]
  }
  let tartine = {
    src: tartineImg,
    tech: [reactLogo, javascriptLogo, cssLogo]
  }
  let stackImgs = shotInFilm.tech.map((img)=>  <img src={img} class='stack--image'/>)

  let detailsSection = (subject) => {
    debugger
    stackImgs = subject.tech.map((img) => <img src={img} class='stack--image' />)

      return (<div class='details'>
        <img src={subject.src} class='details--photo' />
        <div class='details__info'>
          <p class='body-text' >STACK</p>
          <div class='stack'>
            {stackImgs}
          </div>
          <button>
            VISIT SITE
</button>
        </div>
      </div>
      )
  }
  return (
    <div class='work' id='work'>
      <div class='work-list'>
        <p class="body-header">MY WORK</p>
        <p class='body-link' onClick={() => setSite(shotInFilm)}>SHOT IN FILM</p>
        <p class='body-link' onClick={() => setSite(wiseWords)}>WISE - WORDS</p>
        <p class='body-link' onClick={() => setSite(tartine)}>TARTINE</p>

      </div>
      {site !== null ?
        detailsSection(site)
        :
        <div class='details'>
        <img src={shotInFilmImg} class='details--photo'/>
        <div class='details__info'>
      <p class='body-text stack--title'>STACK</p>
          <div class='stack'>
          {stackImgs}
          </div>
      <button class='details__info--button'>
        <p class='button-link'>VISIT SITE</p>
      </button>
    </div>
      </div>}
    </div>
  )
}
