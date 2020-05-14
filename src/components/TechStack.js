import React from 'react'
import Menu from '../components/Menu'

export default function () {
  return (
    
    <div>
      <Menu/>
      <div id='about-me-div'>
        <h1 class='commented-title'>//About Me</h1>
        <p id="brand-statement">
        I am a flexible and energetic software engineer with a passion to help
            create the engines that will drive the world of tomorrow. My values for
            team work have been fostered and polished duringmy time working in
            the field of hospitality growing from entry level positions to
            management teams. Preparing me for a position working with groups of
            like minded individuals from all walks of life on projects that we can
            be proud of.
      </p>
      </div>
      <div className="parallax"></div>
      <div id='tech-stack-div'>
        <h1 class='commented-title'>//Tech Stack</h1>
        <div id='languages-images-box'>
      <img
        className="languages-images"
            src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
            alt="react logo"
          />
          
      <img
        className="languages-images"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
            alt="html logo"
      />
      <img
        className="languages-images"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        alt="css logo"
          />
      <img
        className="languages-images"
        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        alt="javascript logo"
          />
      <img
        className="languages-images"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png"
        alt="ruby logo"
          />
      <img
        className="languages-images"
        src="https://cdn.freebiesupply.com/logos/thumbs/2x/rails-1-logo.png"
        alt="rails logo"
          />
      <img
        className="languages-images"
        src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png"
        alt="postgreSQL logo"
          />
      <img
        className="languages-images"
        src="https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png"
        alt="python logo"
          />
      </div>
      </div>
      <div className="parallax"></div>
      <div id='bottom-div'>
      <h1 class='to-top-button'><span class='method'>.return</span><span class='parenthesis'>(<span class='argument'>toTop</span>)</span></h1>
      </div>
      </div>
     
  )
}
