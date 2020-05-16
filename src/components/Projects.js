import React from 'react'
import Menu from '../components/Menu'

export default function Projects() {
const [page] = React.useState('projects')

  return (
    <div>
    <Menu page={page}/>
    <div id='projects-div'>
    <h1 class='commented-title'>//Projects</h1>

    <div id="project-row">
      <div className="project-area">
        <a href="http://wisewords.surge.sh/" target="_blank">
          <h3 className="projects-titles">Wise-words</h3>
        </a>
        <p class='project-description'>
          A web app designed to answer simple questions with the use of the
          React framework and an external API.
        </p>
        <img
          className="project-images"
          src="https://media.giphy.com/media/duLrxdbtlDABbsRZo8/giphy.gif"
        alt='gif of website'
          />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
        alt='react logo'
          />
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        alt='Javascript logo'
          />
        <hr className="projects-bottom-divider"></hr>
        <a href="https://github.com/lemondsun/Wise-Words" target="_blank">
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt='github logo'
            />
        </a>
      </div>
      <div className="project-area">
        <a href="http://chuckedout.surge.sh/" target="_blank">
          <h3 className="projects-titles">Chucked Out</h3>
        </a>
        <p class='project-description'>
          A fun dive into the world of API's. Made with vanilla Javascript
          and two seperate API's.
        </p>
        <img
          className="project-images"
          src="https://i.imgur.com/TpbW1qN.jpg"
        alt='snapshot of website'
          />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          alt='Javascript logo'
          />
        <img
          className="project-languages-images"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
          alt='HTML logo'
          />
        <img
          className="project-languages-images"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt='CSS logo'
          />
        <hr className="projects-bottom-divider"></hr>
        <a
          href="https://github.com/lemondsun/could-chuck-game"
          target="_blank"
        >
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt='Github logo'
            />
        </a>
      </div>
      <div className="project-area">
        <a href="http://tartinenyc.surge.sh/" target="_blank">
          <h3 className="projects-titles">Tartine</h3>
        </a>
        <p class='project-description'>
          A remodeled website developed with a team of UX designers and
          other Software Engineers.
        </p>
        <img
          className="project-images"
          src="https://media.giphy.com/media/mBptyFCBPUSMBewxk2/giphy.gif"
          alt='gif of website'
          />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
          alt='React logo'  />
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          alt='Javascript logo'
          />
        <hr className="projects-bottom-divider"></hr>
        <a href="https://tartinenyc.surge.sh" target="_blank" >
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt='Github logo'
            />
        </a>
      </div>
    </div>
      </div>
      </div>
  )
}
