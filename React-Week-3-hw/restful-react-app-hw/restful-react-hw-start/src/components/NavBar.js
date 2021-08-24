import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/wines" className="navbar-item">
          Wine Board
        </Link>
        <Link to="/register" className="navbar-item">
          Register
        </Link>
        <Link to="/login" className="navbar-item">
          Login
        </Link>
        <Link to="/newWine" className="navbar-item">
          Add Wine
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
