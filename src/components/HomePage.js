import React from 'react'
import Menu from '../components/Menu'

export default function HomePage() {
  return (
    <div>
    <div id="home-page-div">
      <div id='titled-header'>
      <h1 id="const-title">const</h1>
      <h1 id="name-title">Jason  Mullings</h1>
      <h1 id="programmer-title">
      <span id="new">= new </span>
        <span class='method'>Programmer</span>
          <span class="parenthesis">( )</span>
        </h1>
       
      </div>
      </div>
      <Menu/>
      </div>
  )
}
