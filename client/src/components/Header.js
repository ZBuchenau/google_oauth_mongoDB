import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return (
            <li><a href="/auth/google">Login With Google</a></li>
          );
        default:
          return <li><a href="/api/logout">logout</a></li>;
      }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">Emaily</a>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({auth}){
  return { auth };
}

export default connect(mapStateToProps)(Header);
