import React, {useState} from 'react';

export default function Menu() {
  const [showItems, setItems] = useState(false)

  let menuItems = (
    <div  class="menu__links">
      <a class="menu__links--item " href='#about'
      onClick={() => setItems(!showItems)}
      >
        About
      </a>
      <a class="menu__links--item " href="#work"
      onClick={() => setItems(!showItems)}
      >
        My Work
      </a>
      <a class="menu__links--item" href="#contact"
      onClick={() => setItems(!showItems)}
      >
        Contact
      </a>
      <a class="menu__links--item" href='https://www.docdroid.net/m8LbvdL/jason-mullings-resume-pdf' target="_blank"  rel="noopener">Resume</a>

    </div>
  );
  return (
    <div class='menu'>
      <p class='menu-header' onClick={() => setItems(!showItems)}>THE MENU</p>
      {showItems ? menuItems : null}
    </div>
  )
}
