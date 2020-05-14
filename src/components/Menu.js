import React from 'react'
import { Link} from 'react-router-dom'

export default function Menu() {
  return (
    <div id='menu-bar'>
      <Link to="/techstack"><h1 class='menu-item'><span class='method'>.techStack</span><span class="parenthesis">( )</span></h1></Link>
      <Link to='/projects'><h1 class='menu-item'><span class='method'>.projects</span><span class="parenthesis">( )</span></h1></Link>
      <Link to='/contact'><h1 class='menu-item'><span class='method'>.contact</span><span class="parenthesis">( )</span></h1></Link>
      <a href='https://docdro.id/UVBCUo8' target="_blank" ><h1 class='menu-item'><span class='method'>.resume</span><span class="parenthesis">( )</span></h1></a>
    </div>
  )
}
