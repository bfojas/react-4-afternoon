import React, { Component } from 'react';
import routes from './routes.js'
import {NavLink} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <NavLink activeClassName="links" to="/">
                Home
              </NavLink>
              <NavLink activeClassName="links" to="/about">
                About
              </NavLink>
              {/* <div className='links'>Home</div>
              <div className='links'>About</div>  */}
              
          </div>
          {/* <About/> */}
        </nav>
        {routes}
      </div>
    )
  }
}