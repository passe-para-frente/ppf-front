import React, { Component } from 'react';
import ContentHeader from './ContentHeader';

export default class NavHeader extends Component {
  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="green">
            <div className="nav-wrapper container">
              <a href="#home" className="brand-logo">Passe Para Frente</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#receber">Receber</a></li>
                  <li><a href="#contato">Contato</a></li>
                  <li><a href="#login">Login</a></li>
                </ul>
            </div>
          </nav>
        </div>
        <ContentHeader />
      </>
    );
  }
}