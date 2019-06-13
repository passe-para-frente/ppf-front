import React, { Component } from 'react';
import './contentHeader.css';
// import { Container } from './styles';

export default class ContentHeader extends Component {
  render() {
    return (
      <div className="cover grey darken-3">
        <div className="container">
          <header className="branding">
            <div className="title">
              <h2 className="white-text">Passe para frente</h2>
            </div>
            <section className="text"></section>
          </header>
        </div>

      </div>
    );
  }
}
