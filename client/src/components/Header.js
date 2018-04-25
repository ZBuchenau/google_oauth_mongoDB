import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">Emaily</a>
            <ul id="nav-mobile" className="right">
              <li>
                <a>Log in With Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
