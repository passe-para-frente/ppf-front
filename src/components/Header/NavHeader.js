import React from 'react';
import { Link } from 'react-router-dom';

import LogoMenu from '../../assets/images/logo-menu-top.png';
import BtDoar from '../../assets/images/bt-doar.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img className="logo-menu" src={LogoMenu} alt="logo menu" />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#receber">Receber</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <img src={BtDoar} alt="Botao Doar" />
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
