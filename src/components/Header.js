import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header" >
      <ul className='header-items'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tasks'>Tasks</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
      <p className='site-name'>Daily Task Manager</p>
    </div>
  )
}

export default Header