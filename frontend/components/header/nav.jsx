import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    let cartDisplay = this.props.currentUser ? (
      <li>
        <a href="#">
          <span className="nav-links"><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></span>
        </a>
      </li>
    ) : (
      <div></div>
    )
    
    return (
      <nav className="header-nav">
        <h1 className="header-logo">
          <a href="#">IBEX</a>
        </h1>
        <ul className="header-list">
          <li>
            <span className="nav-links"><Link to="/sneakers">Shop All</Link></span>
          </li>
          <li>
            <span className="nav-links"><Link to="/styles">Styles</Link></span>
          </li>
          <li>
            <a href="#">
              <span className="nav-links"><Link to="/search"><i className="fas fa-search"></i></Link></span>
            </a>
          </li>
          {cartDisplay}
          <li>
            <a href="#">
              <span><i className="fas fa-bars" id="menu-icon"></i></span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;