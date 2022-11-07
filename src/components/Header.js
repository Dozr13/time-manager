import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header" >
      <ul className='header-items'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tasks'>Tasks</Link></li>
        <li><Link to='/time'>Time</Link></li>
      </ul>
      <h1 className='site-name'>Daily Task Manager</h1>
    </div>
  )
}

export default Header