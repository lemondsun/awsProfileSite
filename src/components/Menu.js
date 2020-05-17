import React, { useEffect }from 'react'
import { Link} from 'react-router-dom'

export default function Menu(props) {
  const [page] = React.useState(props)
  const [menuLocation, setMenu] = React.useState('menu-bar')

  let shiftMenuBar = (page) => {
    if (page !== 'home') {
    setMenu('top-menu')
    }
  }
  let menuItems = ['techstack', 'projects', 'contact']
  useEffect(() => {
    shiftMenuBar(page.page)
  })
  
  return (
    
    <div id={menuLocation}>
      {
        menuItems.map(item => (
          item === page.page? 
          <Link to='/'><h1 class='menu-item'><span class='method'>.home</span><span class="parenthesis">( )</span></h1></Link>
            :
            <Link to={`/${item}`}><h1 class='menu-item'><span class='method'>{`.${item}`}</span><span class="parenthesis">( )</span></h1></Link>

        ))
      }
      <a href='https://www.docdroid.net/4KJO5md/jason-mullings-resume-pdf' target="_blank"  rel="noopener"><h1 class='menu-item'><span class='method'>.resume</span><span class="parenthesis">( )</span></h1></a>
      </div>
      
  )
}
