import React from 'react'

export default function Projects() {
  return (
    <div id='projects-div'>
    <h1 class='commented-title'>Projects:</h1>

    <div id="project-row">
      <div className="project-area">
        <a href="http://wisewords.surge.sh/" target="_blank">
          <h3 className="projects-titles">Wise-words</h3>
        </a>
        <p>
          A web app designed to answer simple questions with the use of the
          React framework and an external API.
        </p>
        <img
          className="project-images"
          src="https://media.giphy.com/media/duLrxdbtlDABbsRZo8/giphy.gif"
        />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
        />
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        />
        <hr className="projects-bottom-divider"></hr>
        <a href="https://github.com/lemondsun/Wise-Words" target="_blank">
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          />
        </a>
      </div>
      <div className="project-area">
        <a href="http://chuckedout.surge.sh/" target="_blank">
          <h3 className="projects-titles">Chucked Out</h3>
        </a>
        <p>
          A fun dive into the world of API's. Made with vanilla Javascript
          and two seperate API's.
        </p>
        <img
          className="project-images"
          src="https://i.imgur.com/TpbW1qN.jpg"
        />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        />
        <img
          className="project-languages-images"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
        />
        <img
          className="project-languages-images"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        />
        <hr className="projects-bottom-divider"></hr>
        <a
          href="https://github.com/lemondsun/could-chuck-game"
          target="_blank"
        >
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          />
        </a>
      </div>
      <div className="project-area">
        <a href="http://tartinenyc.surge.sh/" target="_blank">
          <h3 className="projects-titles">Tartine</h3>
        </a>
        <p>
          A remodeled website developed with a team of UX designers and
          other Software Engineers.
        </p>
        <img
          className="project-images"
          src="https://media.giphy.com/media/mBptyFCBPUSMBewxk2/giphy.gif"
        />
        <hr></hr>
        <img
          className="project-languages-images"
          src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
        />
        <img
          className="project-languages-images"
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        />
        <hr className="projects-bottom-divider"></hr>
        <a href="https://tartinenyc.surge.sh" target="_blank">
          <img
            className="github-link"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          />
        </a>
      </div>
    </div>
    </div>
  )
}
