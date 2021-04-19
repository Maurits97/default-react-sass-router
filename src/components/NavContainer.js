import React from 'react'
import { NavLink } from 'react-router-dom'

class NavContainer extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/detail">Detail</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default NavContainer;