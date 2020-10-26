import React from 'react'
const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="./index.html">
            <img src="img/logo.jpg" alt="nav-logo" width='5%' />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="./" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
            </li>

            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
